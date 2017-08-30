var app = angular.module('graphApp', ['ngRoute', 'ngResource']);
app.controller('graphCtrl', function ($scope, $http, $resource) {
    // Initializes Variables
    // ----------------------------------------------------------------------------

    $scope.formdata = {};

    $scope.width = 600;
    $scope.height = 350;
    $scope.yAxis = 'Sales';
    $scope.xAxis = 'Value';

    // Data 

    $scope.data = {};

    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
    $scope.max = 50;

    $scope.maximum = function () {

        var arrLength = $scope.data.length;
        for (var i = 0; i < arrLength; i++) {
            // Find Maximum X Axis Value
            if ($scope.data[i].y >= $scope.max){
                alert($scope.data[i].y);
                $scope.max = $scope.data[i].y;
            }

        }
        console.log($scope.max);
    }


    $scope.loadData = function () {
        $http.get('/data/')
            .then(function (success) {
                $scope.data = success.data;
                $scope.maximum();

            }, function (error) {

                console.log('Error: ' + error);
            });




    };

    //initial load
    $scope.loadData();




    /*
        var arrLength = $scope.data.length;
        for (var i = 0; i < arrLength; i++) {
            // Find Maximum X Axis Value
            if ($scope.data[i].y > $scope.max)
                $scope.max = $scope.data[i].y;
            console.log($scope.max);
        }*/
    // End Controller  

    $scope.create = function () {

        // Grabs all of the text box fields
        var userData = {
            x: $scope.formdata.x,
            y: $scope.formdata.y,
        };

        // Saves the user data to the db
        $http.post('/data/', userData)
            .then(function (success) {
                $scope.data = success.data;

            }, function (error) {

                console.log('Error: ' + error);
            });


        $http.get('/data/')
            .then(function (success) {
                $scope.data = success.data;
                $scope.maximum();

            }, function (error) {

                console.log('Error: ' + error);
            });


        

        $scope.formdata.x = null;
        $scope.formdata.y = null;

        $scope.userForm.$setUntouched();
        $scope.userForm.$setPristine();

    };





});
