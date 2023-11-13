const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: [
          "style-loader",
          "css-loader", 
          "postcss-loader",
        ],
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ]
};