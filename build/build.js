'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'
//上传
const  client  = require('scp2')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
// client.scp('D:/phone/dist/index.html', {
//   host: 'http://60.255.46.235:8088',
//   username: 'administrator',
//   password: 'GDrjkf@123...',
//   path: 'D:/medical/app ',
//   port: 3389
// }, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('文件上传完毕!\n')
//   }
// })