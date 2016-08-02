import path from "path"

import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"

import pkg from "./package.json"

// note that this webpack file is exporting a "makeConfig" function
// which is used for phenomic to build dynamic configuration based on your needs
// see the end of the file if you want to export a default config
// (eg: if you share your config for phenomic and other stuff)
export const makeConfig = (config = {}) => {
  return {
    ...config.dev && {
      devtool: "#cheap-module-eval-source-map",
    },
    module: {
      noParse: /\.min\.js/,
      loaders: [
        {
          // phenomic requirement
          test: /\.md$/,
          loader: "phenomic/lib/content-loader",
        },
        {
          test: /\.json$/,
          loader: "json-loader",
        },
        {
          test: /\.js$/,
          loader: `babel-loader${
            config.dev
            ? "?cacheDirectory=true&presets[]=babel-preset-react-hmre"
            : "?cacheDirectory=true"
          }`,
          include: [
            path.resolve(__dirname, "scripts"),
            path.resolve(__dirname, "web_modules"),
          ],
        },
        {
          test: /\.css$/,
          exclude: /\.global\.css$/,
          include: path.resolve(__dirname, "web_modules"),
          loader: ExtractTextPlugin.extract(
            "style-loader",
            [ `css-loader?modules&localIdentName=${
                config.production
                ? "[hash:base64:5]"
                : "[path][name]--[local]--[hash:base64:5]"
              }`,
              "postcss-loader",
            ].join("!"),
          ),
        },
        {
          test: /\.global\.css$/,
          include: path.resolve(__dirname, "web_modules"),
          loader: ExtractTextPlugin.extract(
            "style-loader",
            [ "css-loader", "postcss-loader" ].join("!"),
          ),
        },
        {
          test: /\.(html|ico|jpg|png|gif)$/,
          loader: "url?limit=8192&name=[sha512:hash:base64:7].[ext]",
        },
        {
          test: /\.svg$/,
          loader: "raw-loader",
        },
      ],
    },

    phenomic: {
      contentLoader: {
        context: path.join(__dirname, config.source),
        // renderer: (text) => html
        feedsOptions: {
          title: pkg.name,
          site_url: pkg.homepage,
        },
        feeds: {
          "feed.xml": {
            collectionOptions: {
              filter: { layout: "Post" },
              sort: "date",
              reverse: true,
              limit: 20,
            },
          },
        },
      },
    },

    postcss(webpack) {
      return [
        require("postcss-import")({
          addDependencyTo: webpack,
        }),
        require("postcss-cssnext")({
          features: {
            autoprefixer: {
              browsers: "last 2 versions",
            },
            rem: false,
            customMedia: {
              extensions: {
                "--desktop": "(min-width: 1025px)",
                "--tablet": "(min-width: 768px) and (max-width: 1024px)",
                "--mobile": "(max-width: 767px)",
                "--mobile400": "(max-width: 400px)",
                "--noDesktop": "(max-width: 1024px)",
                "--noMobile": "(min-width: 768px)",
              },
            },
          },
        }),
        require("postcss-font-magician")({
          formats: "woff2 woff",
        }),
        require("css-mqpacker"),
        require("postcss-triangle"),
        require("postcss-center"),
        require("postcss-sorting")({ "sort-order": "yandex" }),
      ]
    },

    plugins: [
      new ExtractTextPlugin("[name].[hash].css", { disable: config.dev }),
      new webpack.ProvidePlugin({
        React:    "react",
        ReactDOM: "react-dom",
        Helmet:   "react-helmet",
      }),
      ...config.production && [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } }
        ),
      ],
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: "[name].[hash].js",
    },

    resolve: {
      extensions: [ ".js", ".json", "" ],
      root: [ path.join(__dirname, "node_modules") ],
    },
    resolveLoader: { root: [ path.join(__dirname, "node_modules") ] },
  }
}

// you might want to export a default config for another usage ?
// export default makeConfig()
