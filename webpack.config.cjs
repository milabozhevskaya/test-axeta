const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const { constants } = require("buffer");
const { types } = require("util");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new ForkTsCheckerPlugin(),
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "esnext",
        css: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "esnext",
        },
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          stylesHandler,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                exportLocalsConvention: "camelCase",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
      {
        test: /\.(resource.png)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(resource.jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@@": path.resolve(__dirname, "public"),
      app: path.resolve(__dirname, "src/app"),
      context: path.resolve(__dirname, "src/app/context"),
      entities: path.resolve(__dirname, "src/entities"),
      features: path.resolve(__dirname, "src/features"),
      pages: path.resolve(__dirname, "src/pages"),
      shared: path.resolve(__dirname, "src/shared"),
      widgets: path.resolve(__dirname, "src/widgets"),
      store: path.resolve(__dirname, "src/app/store"),
      api: path.resolve(__dirname, "src/shared/api"),
      assets: path.resolve(__dirname, "src/shared/assets"),
      constants: path.resolve(__dirname, "src/shared/constants"),
      hooks: path.resolve(__dirname, "src/shared/hooks"),
      types: path.resolve(__dirname, "src/shared/types"),
      utils: path.resolve(__dirname, "src/shared/utils"),
      styles: path.resolve(__dirname, "src/shared/styles"),
      data: path.resolve(__dirname, "src/data"),
    },
  },
  experiments: {
    asyncWebAssembly: true,
    buildHttp: {
      allowlist: [/^https?:\/\//],
    },
    fallback: {
      crypto: false,
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      })
    );
  } else {
    config.mode = "development";
  }
  config.experiments = {
    topLevelAwait: true,
  };

  return config;
};
