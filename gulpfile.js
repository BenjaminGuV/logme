/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'libjs'
*/
gulp.task('libjs', function () {
  gulp.src([ 'bower_components/jquery/dist/jquery.js' ])
  .pipe(concat('aplugins.js'))
  //.pipe(uglify())
  .pipe(gulp.dest('lib/'))
});

gulp.task('libcss', function () {
  gulp.src([ 'bower_components/bootstrap/dist/css/bootstrap.css' ])
  .pipe(concat('aplugins.css'))
  //.pipe(uglify())
  .pipe(gulp.dest('lib/'))
});

gulp.task('js', function () {
  gulp.src('lib/*.js')
  .pipe(concat('todo.js'))
  //.pipe(uglify())
  .pipe(gulp.dest('js/'))
});

gulp.task('css', function () {
  gulp.src('lib/*.css')
  .pipe(concat('todo.css'))
  //.pipe(uglify())
  .pipe(gulp.dest('css/'))
});

gulp.task('default', [ 'libjs', 'libcss', 'js', 'css']);

