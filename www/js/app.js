// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })

    .state('app.kategori', {
      url: "/kategori",
      views: {
        'menuContent' :{
          templateUrl: "templates/kategori/list.html",
          controller: 'CategoriesCtrl'
        }
      }
    })

    .state('app.kategoriDetail', {
      url: "/kategori/:kategoriId",
      views: {
        'menuContent' :{
          templateUrl: "templates/kategori/sub.html",
          controller: 'SubCategoriesCtrl'
        }
      }
    })

    .state('app.subKategoriDetail', {
      url: "/kategori/:kategoriId/:subKategoriId",
      views: {
        'menuContent' :{
          templateUrl: "templates/tempat/list.html",
          controller: 'PlacesCtrl'
        }
      }
    })

    .state('app.place', {
      url: "/place/:placeId",
      views: {
        'menuContent' :{
          templateUrl: "templates/tempat/detail.html"
        }
      }
    })

    .state('app.disarankan', {
      url: "/disarankan",
      views: {
        'menuContent' :{
          templateUrl: "templates/disarankan.html"
        }
      }
    })

    .state('app.berita', {
      url: "/berita",
      views: {
        'menuContent' :{
          templateUrl: "templates/berita/list.html",
          controller: 'NewsCtrl'
        }
      }
    })

    .state('app.newsDetail', {
      url: "/newsDetail/:nId",
      views: {
        'menuContent' :{
          templateUrl: "templates/berita/detail.html",
          controller: 'NewsDetailCtrl'
        }
      }
    })

    .state('app.peta', {
      url: "/peta",
      views: {
        'menuContent' :{
          templateUrl: "templates/peta.html"
        }
      }
    })

    .state('app.cuaca', {
      url: "/cuaca",
      views: {
        'menuContent' :{
          templateUrl: "templates/cuaca.html"
        }
      }
    })

    .state('app.tnc', {
      url: "/tnc",
      views: {
        'menuContent' :{
          templateUrl: "templates/tnc.html"
        }
      }
    })

.state('app.tentang', {
      url: "/tentang",
      views: {
        'menuContent' :{
          templateUrl: "templates/tentang.html"
        }
      }
    });


     
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

