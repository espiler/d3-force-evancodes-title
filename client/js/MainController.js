angular.module('evancodes.main', [])


.controller('MainController', function(Main, $http, $scope) {
	var temp = [];
	$scope.data = "SOMETHING"
	$scope.posts = [{
		content:"<br>While working on <a href=\"http://stockfuse.herokuapp.com\" target=\"blank\">StockFuse</a>, a stock photo aggregator, I found it necessary to scrape multiple websites, on demand, in the background. My first attempt used spookyJS to create a headless browser in which I could load the pages to be scraped and search them directly for the desired elements using a long, ugly string following document.getElementsbyClass. I had to determine the exact parameters of that string by digging into the DOM of each stock site\'s results page and coming up with creative ways to isolate the photos and their related urls. Not only did the whole process with ",
		datePosted:1419533660207,
		title:"Using Kimono Labs for web scraping",
		url:"using-kimono-labs-for-web-scraping"
		},
		{
		content:"So you\'ve realized that D3 is a powerful tool for data visualization, but in researching the specifics keep getting distracted by just playing around with all the built in particle force capabilities. Yup! Pretty, interactive, colored dots. Read below for a basic D3 force layout tutorial so you can make one of your own, just like mine on the top of this page.\n\n<br/><br/>\n\nI\'ll be using svg circle elements in my force layout because theyre easy to control and to account for collisions  (if you choose to go further) due to their uniform radii.\n\n<br/><br/>\n\nWe\'ll start with the basic outline for any d3 force layout and then delve into specifics.",
		datePosted:1419485086646,
		title:"Fun With D3 Force and Your Mouse",
		url:"fun-with-d3-force-and-your-mouse"
	}]

	var update = function() {
		console.log('updating.......')
	}

	$scope.getAllPosts = function() {
		// $scope.posts = []
		var ref = new Firebase("https://brilliant-torch-8757.firebaseio.com/posts");
		ref.on("value", function(snapshot) {
			var posts = snapshot.val();
			for (var post in posts) {
				temp.push(posts[post]);
			}
			$scope.posts = temp
			$scope.posts.sort(function(a,b) { return b.datePosted - a.datePosted; })
			console.log($scope.posts);
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
	}

	$scope.getAllPosts();

})