
//////////////////////////////
// gulpfile.js
// @tasks: parse-css, build-tests, clean
///////////////////////////////

"use strict";

let gulp = require("gulp"),
    sass = require("gulp-sass");

gulp.task("default", function() {
  gulp.src("./scss/dry-animate.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./"))
});
