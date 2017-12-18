(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
         });

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
        });
}

  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
    var modalInstance= $uibModal.open({
       animation: 'true',
       ariaLabelledBy: 'modal-title',
       ariaDescribedBy: 'modal-body',
       templateUrl: '../templates/UserNameModal.html',
       controller: 'UserNameInstanceCtrl',
       controllerAs: 'un',
       size: 'sm',
       backdrop: 'static',
       keyboard: false,
     });
  }
}

angular
         .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
         .config(config)
         .run(['$cookies', '$uibModal', BlocChatCookies]);
 })();
