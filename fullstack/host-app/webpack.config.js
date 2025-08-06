const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (_, argv) => ({
  entry: './src/index.ts',
  mode: 'development',
  
  output: {
    path: path.resolve(__dirname, 'build'),
    // Necc full path for host
    publicPath: 'http://localhost:3005/',
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    // necc
    port: 3005,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, "src")],
    static: { directory: path.resolve(__dirname, "public") },
  },
// ??
  performance: { hints: false },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        include: /@fluent[\\/]bundle[\\/]esm/,
        resolve: { fullySpecified: false },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      // Штука чтобы грузить свг
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        // еще загрузить его надо чтобы он подгружал свг
        issuer: /\.[jt]sx?$/,
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        gamificationApp: 'gamificationApp@http://localhost:3001/remoteEntry.js',
        referalApp: 'referalApp@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^19.1.0',
          eager: true, 
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^19.1.0',
          eager: true, 
        },
        '@radix-ui/react-icons': { singleton: true, eager: true },
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});
