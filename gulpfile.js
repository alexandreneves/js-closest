var gulp = require('gulp');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function () {
    return browserify({entries: './src/Closest.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('Closest.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist'));
});
 
gulp.task('watch', ['build'], function () {
    gulp.watch('./src/js/*.js', ['build']);
});
 
gulp.task('default', ['build', 'watch']);
