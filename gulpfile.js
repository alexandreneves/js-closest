const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', function () {
    return gulp.src('src/Closest.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});
 
gulp.task('watch', ['build'], function () {
    gulp.watch('./src/js/*.js', ['build']);
});
 
gulp.task('default', ['build', 'watch']);
