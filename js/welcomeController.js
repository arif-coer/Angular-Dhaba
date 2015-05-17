var welcomeController = angular.module('welcomeController', []);

welcomeController.controller('WelcomeCtrl', function ($scope){
    $scope.message = "Welcome to Angular Dhaba"
});

welcomeController.controller('UserLoginCtrl',function($scope){
    $scope.message = "Enter email and password to login"
});

welcomeController.controller('LoginControllerCtrl', function ($scope,users){
    $scope.validateUser = function(user){
        console.log("------->"+user.email)
        users.find(user.email,user.password, function(user) {
            $scope.user = user;
            var path="/contentAccess/"+user.id
            $location.path(path);
        });
    }
});

welcomeController.controller('homePageCtrl',function($scope,$routeParams){
    $scope.user = $routeParams.user
});
