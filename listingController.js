angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = "Click on 'Details' to get more information about a building.";

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function(form) {
		if (form.code != '') {
			$scope.listings.push(
			{"code": form.code, 
				"name": form.name, 
				"coordinates": {
					"latitude": form.latitude, 
					"longitude": form.longitude
				}, 
			"address": form.address})
		}
		form.code='';
		form.name='';
		form.latitude='';
		form.longitude='';
	};
	
	//function to delete a listing from the table
    $scope.deleteListing = function(index) {
		$scope.listings.splice(index, 1);
		index='';
	};
	
    $scope.showDetails = function(index) {
		if ($scope.listings[index].hasOwnProperty('address')) {
			$scope.detailedInfo = $scope.listings[index].name + ":" +
								"\n\nLatitude: " + $scope.listings[index].coordinates.latitude +
								"\nLongitude: " + $scope.listings[index].coordinates.longitude +
								"\nAddress: " + $scope.listings[index].address;
		}
		else
			$scope.detailedInfo="No information on this building.";
		index='';
	};
  }
]);