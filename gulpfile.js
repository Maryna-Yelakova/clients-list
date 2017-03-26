'use strict';

const gulp         = require('gulp'),
      gulpsync     = require('gulp-sync')(gulp),
      watch        = require('gulp-watch'),
      rename       = require('gulp-rename'),
      sourcemaps   = require('gulp-sourcemaps'),
      cleancss     = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer'),
      tsc          = require('gulp-typescript'),
      tsproject    = tsc.createProject('tsconfig.json'),
      rimraf       = require('rimraf'),
      browsersync  = require('browser-sync'),
      reload       = browsersync.reload;

const path = {
  src: {
    libs: './node_modules/**',
    sysjs: './systemjs.config.js',
    appcss: './frontend/src/app/style/*.css',
    appts: './frontend/src/app/**/*.ts',
    apphtml: './frontend/src/app/**/*.html',
    html: './index.html'
  },
  build: {
    libs: './build/assets/libs/',
    sysjs: './build/',
    appcss: './build/app/css/',
    appts: './build/app/',
    apphtml: './build/app/',
    html: './build/',
    js: '/build/'
  },
  watch: {
    sysjs: './systemjs.config.js',
    appcss: './frontend/src/app/**/*.css',
    appts: './frontend/src/app/**/*.ts',
    apphtml: './frontend//src/app/**/*.html',
    html: './index.html'
  },
  clean: {
    build: './build',
    nodemodules: './node_modules'
  }
};

gulp.task('libs', function() {
  return gulp
          .src([
                '@angular/**/bundles/**',
                'core-js/client/shim.min.js',
                'reflect-metadata/Reflect.js',
                'rxjs/**/*.js',
                'systemjs/dist/system-polyfills.js',
                'systemjs/dist/system.src.js',
                'zone.js/dist/**',
                'angular-in-memory-web-api/**/*.js'
          ], {cwd: path.src.libs})
          .pipe(gulp.dest(path.build.libs));
});

gulp.task('sysjs', function() {
  return gulp
          .src(path.src.sysjs)
          .pipe(gulp.dest(path.build.sysjs))
          .pipe(reload({stream: true}));
});

gulp.task('app:ts', function() {
  return gulp
    .src(path.src.appts)
    .pipe(sourcemaps.init())
    .pipe(tsproject())
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.build.appts))
    .pipe(reload({stream: true}));
});

gulp.task('app:css', function () {
  return gulp
      .src(path.src.appcss)
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(cleancss())
      .pipe(gulp.dest(path.build.appcss))
      .pipe(reload({stream: true}));

});

gulp.task('app:html', function() {
  return gulp
          .src(path.src.apphtml)
          .pipe(gulp.dest(path.build.apphtml))
          .pipe(reload({stream: true}));
});

gulp.task('index:html', function() {
  return gulp
          .src(path.src.html)
          .pipe(gulp.dest(path.build.html))
          .pipe(reload({stream: true}));
});

gulp.task('build', gulpsync.sync([
  'libs',
  'sysjs',
  'app:ts',
  'app:css',
  'app:html',
  'index:html'
]));

gulp.task('watch', function() {
  watch([path.watch.sysjs],   function() { gulp.start('sysjs'); });
  watch([path.watch.appts],   function() { gulp.start('app:ts'); });
  watch([path.watch.appcss],   function() { gulp.start('app:css'); });
  watch([path.watch.apphtml], function() { gulp.start('app:html'); });
  watch([path.watch.html],    function() { gulp.start('index:html'); });
});

gulp.task('default', gulpsync.sync([
  'build'
]));

gulp.task('dev', gulpsync.sync([
  'build',
  'watch',
  'webserver'
]));

gulp.task('clean', function (cb) {
  return rimraf(path.clean.build, cb)
});

gulp.task('webserver', function() {
  browsersync({
    server: {
      baseDir: './build'
    },
    tunnel: false,
    host: 'localhost',
    port: 4000,
    logPrefix: 'local-server'
  });
});

gulp.task('clean:typings', function (cb) {
  return rimraf(path.clean.typings, cb)
});

gulp.task('clean:nodemodules', function (cb) {
  return rimraf(path.clean.nodemodules, cb)
});

gulp.task('clean:all', gulpsync.sync([
  'clean',
  'clean:typings',
  'clean:nodemodules'
]));
