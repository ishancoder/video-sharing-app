(function(){
	var app = angular.module('videoApp',[]);

	app.factory('videoFactory',['$http', function($http){
		var o = {
			videos:[{name:"new video",
					link:"https://www.youtube.com",
					description:"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"},
					{name:"another new video",
					link:"https://www.youtube.com",
					description:"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"}]
		};

		return o;
	}]);

	app.controller('videoAppController',['$scope','videoFactory',function($scope, videoFactory){
			$scope.videos = videoFactory.videos;
	}]);
})();