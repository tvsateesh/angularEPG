function EPGController($scope, EPGService) {
    $scope.epgData = EPGService.epgData;
}

function EPGDetailsController($scope, $routeParams,EPGService) {
    $scope.program = EPGService.epgData.getEPGData($routeParams.id);
}