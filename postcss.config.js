module.exports = {
  plugins: [
    require("autoprefixer")({}),
    require("stylelint")({}),
    require('postcss-import')({}),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
