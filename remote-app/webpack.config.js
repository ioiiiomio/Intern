const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");


module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  
  output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: 'http://localhost:3001/',
    },
  resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    port: 3001,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, "src")],
    static: { directory: path.resolve(__dirname, "build") },
  },


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
      name: 'remoteApp',
      filename: 'remoteApp.js',
      exposes: {
        './Header': './src/component/Header.tsx',
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
};
