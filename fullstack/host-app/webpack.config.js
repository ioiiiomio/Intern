//this is a sample
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (_, argv) => ({
  entry: './src/index.ts',
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:3000/main',
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },

  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    port: 3000,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, "src")],
    static: { directory: path.resolve(__dirname, "public") },
  },


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
          remoteApp: '',
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
