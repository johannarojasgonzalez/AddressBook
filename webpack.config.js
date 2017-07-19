const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'source-map',
  entry: ['./src/app/app.module'], // point d'entrée
  output: {
    path: __dirname + '/dist',
    filename: "bundle.[hash].js", // resultat d'un build (il va regrouper tous les js), le hash facilite les pb de cache car il genere à chaque fois un nouveau nom de fichier
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        // A chaque fois qu'il importe un fichier js il le charge avec babel
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              target: {
                browsers: ['IE 11', 'Firefox ESR', 'last 2 versions']
              }
            }]]
          }
        }
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader/url" },
          { loader: "file-loader" },
          {loader: "postcss-loader"}
        ]
      }
    ]
  }
};