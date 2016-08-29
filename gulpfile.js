var gulp          = require('gulp');
var notify        = require('gulp-notify');
var vinylSource        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');
var rename        = require('gulp-rename');
var minifyCSS     = require('gulp-minify-css');
var templateCache = require('gulp-angular-templatecache');

// Where our files are located
var source = "src/";
var dest = 'build/';
var sassFiles = source + "sass/main.scss";
var jsFiles   = source + "app/**/*.js";
var viewFiles = source + "app/**/*.html";
var filesToCopy = [
      "src/images/**/*.*",
      "src/fonts/**/*.*"
    ]; 

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};


gulp.task('browserify', function() {
  return browserify('./src/app/app.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(vinylSource('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function() {
  return gulp.src(sassFiles)
      .pipe(sass())
      .on('error', interceptErrors)
      .pipe(minifyCSS())
      .pipe(gulp.dest("./build/css"));
});

gulp.task('html', function() {
  return gulp.src("src/index.html")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});

gulp.task('views', function() {
  return gulp.src(viewFiles)
      .pipe(templateCache({
        standalone: true
      }))
      .on('error', interceptErrors)
      .pipe(rename("app.templates.js"))
      .pipe(gulp.dest('./src/app/config/'));
});


gulp.task('copy', function() {
  gulp.src(filesToCopy, { base: source })
            .pipe(gulp.dest(dest));
  gulp.src(source + "app/index.html")
    .pipe(gulp.dest(dest));
});

gulp.task('default', ['sass', 'html', 'views', 'copy'], function() {

  gulp.start(['browserify']);

  browserSync.init(['./build/**/**.**'], {
    server: "./build",
    port: 4000,
    ui: {
      port: 4001
    }
  });

  gulp.watch(sassFiles, ['sass']);
  gulp.watch("src/index.html", ['html']);
  gulp.watch(viewFiles, ['views']);
  gulp.watch(jsFiles, ['browserify']);
});
