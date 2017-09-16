(function () {
  'use strict';

  angular.module('LunchCheckerApp', [])

  .controller('LunchCheckerController', function ($scope) {
    $scope.lunchMenu = '';
    $scope.message = '';
    $scope.checkMenuItem = function () {
      $scope.message = calculateMenuItem($scope.lunchMenu);
    }
  });

  function calculateMenuItem(lunchMenu) {
    var items = lunchMenu.split(",").filter(v => v.trim().length > 0);
    if(lunchMenu.length == 0 || items.length == 0) {
      return "Please enter data first!";
    } else {
      if(items.length <= 3) {
        return "Enjoy!";
      } else {
        return "Too much!";
      }
    }
  }

})()
