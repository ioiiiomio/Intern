const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const isStandalone = process.env.STANDALONE === "true";


module.exports = {
  entry: './src/index.tsx',
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:3002/',
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },

  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    port: 3002,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, "src")],
    static: { directory: path.resolve(__dirname, "public") },
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new Dotenv({
      path: '.env', 
      safe: false,
      systemvars: true,
    }),

    !isStandalone &&
      new ModuleFederationPlugin({
        name: 'musicApp',
        filename: 'musicApp.js',
        exposes: {
          './MusicPage': './src/components/MusicPage.tsx',
        },
        shared: {
          react: { singleton: true, requiredVersion: '^19.1.0' },
          'react-dom': { singleton: true, requiredVersion: '^19.1.0' },
        },
      }),
  ].filter(Boolean),
};
