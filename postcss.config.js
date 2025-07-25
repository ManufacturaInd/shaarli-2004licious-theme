module.exports = {
  plugins: [
    require("autoprefixer")({}),
    require('postcss-normalize')({}),
    require('postcss-import')({}),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
