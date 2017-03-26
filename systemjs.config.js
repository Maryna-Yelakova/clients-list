
(function (global) {
  System.config({
    paths: {
      'libs:': 'assets/libs/'
    },
    map: {
      'app': 'app',
      '@angular/core': 'libs:@angular/core/bundles/core.umd.js',
      '@angular/common': 'libs:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'libs:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'libs:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'libs:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'libs:@angular/http/bundles/http.umd.js',
      'rxjs': 'libs:rxjs',
      'angular-in-memory-web-api': 'libs:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'app': {
        'main': './main.js',
        'defaultExtension': 'js'
      },
      'rxjs': {
        'defaultExtension': 'js'
      }
    }
  });
})(this);
