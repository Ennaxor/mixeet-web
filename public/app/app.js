var mixeet = angular.module('mixeet', ['ui.router']);

/* RUTAS ... */ 
mixeet.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	var getJSONLocal = function(key){
		var result = null;
		try{
			var json = localStorage[key];
			if(json !== undefined){
				result = JSON.parse(json);
			}
		}catch(e){

		}
		return result;
	}

	//var static_path ="static/app";

	$urlRouterProvider.otherwise("/");
	
	$stateProvider
		.state('landing', {
			url: "/landing",
			onEnter: function ($state) {
	            if (getJSONLocal("auth")) {
	               // $rootScope.go("app.home");
	               $state.go('app');
	            }
        	},
        	templateUrl: "/app/landing/main.tpl.html",
			controller: "landingCtrl"
		})
		.state('app', {
			url: "/",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	               // $rootScope.go("landing");
	               $state.go('landing');
	            }
	        },
			templateUrl: "/app/main.tpl.html",
			controller: "headerCtrl"
		})
		.state('app.home', {
			url: "home",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	               // $rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: '/app/home/main.tpl.html',
	                controller: 'homeCtrl'
	            	}
	        	}  
		})
		.state('app.collections', {
			url: "collections",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	                //$rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: '/app/collections/main.tpl.html',
	                controller: 'collectionsCtrl'
	            	}
	        	}  
		})
		.state('app.events', {
			url: "events",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	                //$rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: '/app/events/main.tpl.html',
	                controller: 'eventsCtrl'
	            	}
	        	}  
		})
		.state('app.achievements', {
			url: "achievements",
			onEnter: function ($state) {
	            if (!getJSONLocal("auth")) {
	                //$rootScope.go("landing");
	            }
	        },
			views: {
	            content: {
	                templateUrl: '/app/achievements/main.tpl.html',
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

