'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var DEST = 'dist/';

gulp.task('default', function() {
  return gulp.src('src/arsh_charts.js')
    .pipe(gulp.dest(DEST))
    .pipe(uglify({preserveComments:'some'}))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});
