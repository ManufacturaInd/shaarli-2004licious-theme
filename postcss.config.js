module.exports = {
  plugins: [
    require("autoprefixer")({}),
    require('postcss-import')({}),
    require('postcss-normalize')({}),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
