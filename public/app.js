var app = angular.module('graphApp',['ngRoute', 'ngResource']);
app.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){
    
    $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'graphCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });


        $locationProvider.html5Mode(true);
    
    
}]);



