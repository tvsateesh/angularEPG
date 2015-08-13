'use strict';

function channelListController($scope, $routeParams, ChannelListService, MenuService,xmlFactory) {

    // get store and cart from service
    $scope.channelsList = ChannelListService.channelsList;
    // use routing to pick the selected product
    if ($routeParams.id != null) {
        $scope.channel = $scope.channels.getChannelsList($routeParams.id);
    }
}

function ChannelDetailController($scope, $routeParams,ChannelListService) {
    $scope.channel = ChannelListService.channelsList.getChannelsList($routeParams.id);
}