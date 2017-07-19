module.exports = {
  //parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'autoprefixer': {}
    /*,
    'postcss-cssnext': {}, // comme babel il transforme les nouveautés de css pour la compatibilité avec d'autres versions des browsers
    'cssnano': {}*/ // pour mimifier le poid du fichier css
  }
}