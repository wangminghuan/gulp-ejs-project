var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'), //png图片压缩插件
  tinypng = require('gulp-tinypng-compress'),
  ejs = require('gulp-ejs');
//引入文件路径配置
var filePath = require("../config.js");

gulp.task('uglify-js', ['optimize-js'], function() {
  return gulp.src(filePath.appPath + '/bundle.js')
  .pipe(uglify())//不需要压缩请注释掉本行
  .pipe(rename({
    basename:'index',
    suffix: '.min'
  }))
  .pipe(gulp.dest(filePath.publicPath + "/js/"))

});
gulp.task('uglify-css', ['optimize-sass'], function() {
  return gulp.src(filePath.CSSPath + '/bundle.css')
  .pipe(cleanCss())//不需要压缩请注释掉本行
  .pipe(rename({
    basename:'index',
    suffix: '.min'
  }))
  .pipe(gulp.dest(filePath.publicPath + "/css/"))
});
gulp.task('compress-img', function() {
  return gulp.src(filePath.IMGPath + "/*")
  .pipe(tinypng({
      key: '0XHvqwY7DaNks2UFbAOR7wh4KLns_hbV',
      sigFile: '',
      log: true
    }))
  .pipe(gulp.dest(filePath.publicPath + "/img/"))
});

//模板引擎
gulp.task('gulp-ejs', function() {
  return gulp.src(filePath.IMGPath + "/*")
  .pipe(tinypng({
      key: '0XHvqwY7DaNks2UFbAOR7wh4KLns_hbV',
      sigFile: '',
      log: true
    }))
  .pipe(gulp.dest(filePath.publicPath + "/img/"))
});

gulp.task('build-task', ['uglify-js', 'uglify-css', 'compress-img']);
gulp.task('build-test-task', ['uglify-js', 'uglify-css']);
