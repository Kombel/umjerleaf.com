


var App = angular.module('umjerApp',['ngRoute','ngAnimate']);



App.config(function($routeProvider){

	$routeProvider
	//Route for Home Page
		.when('/',{
			templateUrl: 'pages/home.html',
			controller: 'mainController'

		})
		//Route for Contact Page
		.when('/contact',{

			templateUrl: 'pages/contact.html',
			controller: 'contactController'
		})
		//Route for About us Page
		.when('/aboutus',{

			templateUrl: 'pages/aboutus.html',
		})
		.when('/team',{

			templateUrl: 'pages/team.html',
		})



});


App.controller('mainController',function($scope){

	$scope.message="Home: Welcome to AngularJS";
	$scope.pageClass='page-home';

});

App.controller('contactController',function($scope){
	$scope.message="Contact Us";
	$scope.pageClass='page-contact';

});


App.controller('aboutController',function($scope){

	$scope.message="About Us";
	$scope.pageClass='page-aboutus';
});
