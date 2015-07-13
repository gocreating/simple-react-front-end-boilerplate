var gulp          = require('gulp');
var browserify    = require('browserify');
var source        = require('vinyl-source-stream');
var buffer        = require('vinyl-buffer');
var reactify      = require('reactify');
var browserSync   = require('browser-sync');

gulp.task('pack', function() {
  return browserify({
    debug: true,
    entries: './js/index.js',
    transform: [
      reactify
    ]
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(gulp.dest('build/'));
});

gulp.task('watch', function(cb) {
  gulp.watch('./**/*.jsx', ['pack']);
});

gulp.task('browser-sync', function(cb) {
  browserSync.init(null, {
    files: [
      'build/**/*.*',
    ],
    port: 3000,
    logLevel: 'info',
    injectChanges: true,
    logSnippet: false,
    server: {
      baseDir: '.',
    },
  });
});

gulp.task('default', function() {
  gulp.start([
    'pack',
    'watch',
    'browser-sync'
  ]);
});