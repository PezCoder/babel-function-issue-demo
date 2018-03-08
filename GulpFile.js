var gulp         = require('gulp');
var browserify   = require('browserify');
var babelify     = require('babelify');
var source       = require('vinyl-source-stream');

gulp.task('bhalu', function() {
  browserify('./test.js')
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(source('./test.js'))
    .pipe(gulp.dest('dest.js'));

});
