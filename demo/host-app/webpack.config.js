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
    publicPath: 'http://localhost:3000/',
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    // necc
    port: 3000,
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
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        remoteApp: 'remoteApp@http://localhost:3001/remoteApp.js',
        musicApp: 'musicApp@http://localhost:3002/musicApp.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.1.0' },
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});
