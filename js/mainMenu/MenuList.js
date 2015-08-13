function MenuList(xmlFactory,$q){
    this.getList = function ($scope){
        xmlFactory.getXMLData("xml/menu0.xml",function(data){
            $scope.menus = data ;
            var menuList = [];
            for ( var i in data.menu.include) {
                menuList.push(data.menu.include[i]._href);
            }
            $q.all(menuList).then(function (results) {
                var aggregatedData = [];
                angular.forEach(results, function (result) {
                    aggregatedData = aggregatedData.concat(result.data);
                });
                return aggregatedData;
            });
        });
    }
}
function SubMenuList( xmlFactory, $q){
    this.getSubMenuList = function( $scope, url){
        url = url.replace("xml/","");
        xmlFactory.getXMLData("xml/"+url,function(data){
            if ( data.item && !data.item.item.length   ){
                var obj = data.item.item;
                data.item.item = [];
                data.item.item[0]=obj;
            }
            $scope.menus = data ;
        });
    }
}
