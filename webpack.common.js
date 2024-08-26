const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    // filename: "app.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
    },
  },
};
// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     filename: "app.js",
//     path: path.resolve(__dirname, "public"),  
//     publicPath: "/", 
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.json'],
//     alias: {
//       'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime')
//     },
//     symlinks: false,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: [
//           MiniCssExtractPlugin.loader,
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 plugins: [
//                   [
//                     "postcss-preset-env",
//                     {
//                       // Options
//                     },
//                   ],
//                 ],
//               },
//             },
//           },
//         ],
//       },
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [new MiniCssExtractPlugin()],
//   devtool: 'source-map',
// };
