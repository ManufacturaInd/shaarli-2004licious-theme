module.exports = {
  plugins: [
    require("autoprefixer")({}),
    require('postcss-import')({}),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
