import path from "path"
import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import pkg from "./package.json"
import { phenomicLoader } from "phenomic"

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
          loader: phenomicLoader,
        },
        {
          test: /\.json$/,
          loader: "json",
        },
        {
          test: /\.js$/,
          loader: `babel${
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
            "style",
            [ `css?modules&importLoaders=1&localIdentName=${
                config.production
                ? "[hash:base64:5]"
                : "[path][name]--[local]--[hash:base64:5]"
              }`,
              "postcss",
            ].join("!"),
          ),
        },
        {
          test: /\.global\.css$/,
          include: path.resolve(__dirname, "web_modules"),
          loader: ExtractTextPlugin.extract(
            "style",
            [ "css", "postcss" ].join("!"),
          ),
        },
        {
          test: /\.(html|ico|jpg|png|gif)$/,
          loader: "url?limit=8192&name=[sha512:hash:base64:7].[ext]",
        },
        {
          test: /\.svg$/,
          loader: "raw",
        },
      ],
    },

    phenomic: {
      context: path.join(__dirname, config.source),
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
                "--desktop": "(width >= 1025px)",
                "--tablet": "(1024px >= width >= 768px)",
                "--mobile": "(width <= 767px)",
                "--mobile400": "(width <= 400px)",
                "--noDesktop": "(width <= 1024px)",
                "--noMobile": "(width >= 768px)",
              },
            },
            customProperties: {
              variables: {
                cinnabar: "#e74c3c",
                nobel: "#999",
                dimGray: "#6a6a6a",
                solitude: "#f4f5f9",
                athensGrey: "#d8d9db",
                gainsboro: "#ddd",
                charcoal: "#3e3e3e",
                nero: "#202020",
                arsenic: "#373a47",
              },
            },
          },
        }),
        require("postcss-font-magician")({
          formats: "woff2 woff",
        }),
        require("postcss-triangle"),
        require("postcss-center"),
        require("postcss-flexbugs-fixes"),
        require("postcss-sorting")({ "sort-order": "yandex" }),
      ]
    },

    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new ExtractTextPlugin("[name].[hash].css", { disable: config.dev }),
      new webpack.ProvidePlugin({
        React:    "react",
        ReactDOM: "react-dom",
        Helmet:   "react-helmet",
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV":
          config.dev ? "\"development\"" : "\"production\"",
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
