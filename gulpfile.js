var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass-watch', function() {
  return gulp.src('sass/master.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['sass-watch']);
});
