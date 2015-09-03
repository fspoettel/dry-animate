
//////////////////////////////
// gulpfile.js
// @tasks: parse-css, build-tests, clean
///////////////////////////////

var gulp     = require('gulp');
var rubySass = require('gulp-ruby-sass');
var sass     = require('gulp-sass');

gulp.task('test_ruby', function() {
  rubySass('./_test/src')
    .on('error', function(err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest('./_test/build/ruby'));
});

gulp.task('test', function() {
  gulp.src('./_test/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./_test/build/libsass'));
});
