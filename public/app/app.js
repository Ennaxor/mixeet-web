var mixeet = angular.module('mixeet', ['ui.router']);

/* RUTAS ... */ 
mixeet.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	var static_path ="static/app";

	$urlRouterProvider.otherwise("/");
	
	$stateProvider
		.state('landing', {
			url: "/landing",
			onEnter: function ($rootScope) {
	            if (getJSONLocal("auth")) {
	                $rootScope.go("app.home");
	            }
        	},
        	templateUrl: "index.html",
			controller: "landingCtrl"
		})
		.state('app', {
			url: "/",
			onEnter: function ($rootScope) {
	            if (!getJSONLocal("auth")) {
	                $rootScope.go("landing");
	            }
	        },
			templateUrl: "index.html",
			controller: "headerCtrl"
		})
		.state('app.home', {
			url: "home",
			onEnter: function ($rootScope) {
	            if (!getJSONLocal("auth")) {
	                $rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: '/home/main.tpl.html',
	                controller: 'homeCtrl'
	            	}
	        	}  
		})
		.state('app.collections', {
			url: "collections",
			onEnter: function ($rootScope) {
	            if (!getJSONLocal("auth")) {
	                $rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: '/collections/main.tpl.html',
	                controller: 'collectionsCtrl'
	            	}
	        	}  
		})
		.state('app.events', {
			url: "events",
			onEnter: function ($rootScope) {
	            if (!getJSONLocal("auth")) {
	                $rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: '/events/main.tpl.html',
	                controller: 'eventsCtrl'
	            	}
	        	}  
		})
		.state('app.achievements', {
			url: "achievements",
			onEnter: function ($rootScope) {
	            if (!getJSONLocal("auth")) {
	                $rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: '/achievements/main.tpl.html',
	                controller: 'achievementsCtrl'
	            	}
	        	}  
		})
	/*	.state('home', {   
	      url: "/",
	      templateUrl: static_path+"/home/main.tpl.html",
	      controller: 'homeCtrl'
	    })
		.state('landing', {   
	      url: "/landing"
	      //templateUrl: static_path+"/home/main.tpl.html",
	      //controller: 'landingCtrl'
	    })
		.state('collections', {
			url: "/collections",
	      	templateUrl: static_path+"/collections/main.tpl.html",
	      	controller: 'collectionsCtrl'
		})
		.state('events', {
			url: "/events",
	      	templateUrl: static_path+"/events/main.tpl.html",
	      	controller: 'eventsCtrl'
		})
		.state('achievements', {
			url: "/achievements",
	      	templateUrl: static_path+"/achievements/main.tpl.html",
	      	controller: 'achievementsCtrl'
		});*/




});

