const path = require('path');

const config = () => {
  return {
    mode: 'production',
    entry: {
      ui: path.resolve(__dirname,'src','ui','index.jsx')
    },
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
         test: /\.jsx?$/,
         include: [
           path.resolve(__dirname, 'src','ui')
         ],
         loaders: ['babel-loader']
      }
    ]
    },
    resolve: {
      extensions: [".js", ".json", ".jsx", ".css"]
    }
  };
};

module.exports = config;
