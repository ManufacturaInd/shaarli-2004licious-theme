module.exports = {
  plugins: [
    require("stylelint")({}),
    require('postcss-import')({}),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
