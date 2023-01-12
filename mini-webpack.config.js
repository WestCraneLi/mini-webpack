const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader'
      ],
    },
    // {
    //   test:/\.js$/,
    //   use:[
    //     {
    //       loader:path.resolve('./tools/loader/varToletLoader.js'),
    //       options: {
    //         str: "var",
    //         replaceStr: "let",
    //         // 将 let 替换为 const
    //       },
    //     }
    //   ]
    // }
  ],
};
