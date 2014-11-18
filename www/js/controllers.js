angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CategoriesCtrl', ['$scope', function($scope){
  $scope.categories = [
    {id : 1, nama: 'Objek Wisata', keterangan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat.', gambar: 'http://placehold.it/128x128'},
    {id : 1, nama: 'Kuliner', keterangan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat.', gambar: 'http://placehold.it/128x128'},
    {id : 1, nama: 'Pusat Perbelanjaan', keterangan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat.', gambar: 'http://placehold.it/128x128'},
    {id : 1, nama: 'Transportasi', keterangan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat.', gambar: 'http://placehold.it/128x128'},
    {id : 1, nama: 'Pelayanan Publik', keterangan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat.', gambar: 'http://placehold.it/128x128'}
  ];
}])

.controller('SubCategoriesCtrl', ['$scope', function($scope){
  $scope.subCategories = [
    {id : 1, nama : 'Wisata Alam', gambar : 'http://placehold.it/128x128'},
    {id : 2, nama : 'Wisata Pantai', gambar : 'http://placehold.it/128x128'},
    {id : 3, nama : 'Wisata Olahraga & Petualangan', gambar : 'http://placehold.it/128x128'},
    {id : 4, nama : 'Wisata Hiburan', gambar : 'http://placehold.it/128x128'},
    {id : 5, nama : 'Wisata Malam', gambar : 'http://placehold.it/128x128'}
  ];

  $scope.idSubCategory = 1;  
}])

.controller('PlacesCtrl', function($scope) {
  $scope.places = [
    {id : 1, nama: 'Pantai Widuri', alamat: 'Jl. Kemerdekaan No. 11', rating: 3, gambar : 'http://placehold.it/64x64'},
    {id : 2, nama: 'Pantai Blendung', alamat: 'Jl. November No. 19', rating: 2, gambar : 'http://placehold.it/64x64'},
    {id : 3, nama: 'Zatobay', alamat: 'Jl. Taubat No. 11', rating: 5, gambar : 'http://placehold.it/64x64'},
    {id : 4, nama: 'Arum Jeram', alamat: 'Jl. Mandiri No. 10', rating: 1, gambar : 'http://placehold.it/64x64'},
    {id : 5, nama: 'Pantai Jokotingkir', alamat: 'Jl. Veteran No. 57', rating: 5, gambar : 'http://placehold.it/64x64'}
  ];
})

.controller('NewsCtrl', function($scope) {
  $scope.news = [
    {id : 1, judul: 'Pantai Widuri Pemalang', tanggal: '11 november 2011', gambar : 'http://placehold.it/64x64'},
    {id : 2, judul: 'Pemalang Ikhlas Selalu', tanggal: '11 januari 2011', gambar : 'http://placehold.it/64x64'},
    {id : 3, judul: 'HUT ke 67 Pemalang Ikhlas', tanggal: '11 april 2011', gambar : 'http://placehold.it/64x64'},
    {id : 4, judul: 'Pemilihan Bupati', tanggal: '11 maret 2011', gambar : 'http://placehold.it/64x64'},
    {id : 5, judul: 'Banjir di Pemalang', tanggal: '11 desember 2011', gambar : 'http://placehold.it/64x64'},
  ];
})

.controller('NewsDetailCtrl', function($scope) {
  $scope.newsDetail =
    {id : 1, judul: 'Pantai Widuri Pemalang', tanggal: '11 November 2011', gambar: 'http://placehold.it/350x150', isi: 'Diketemukan banyak pemuda - pemudi sedang memadu kasih di pantai widuri pemalang...'};
});
