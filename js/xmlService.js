couldEPG.factory('xmlFactory',function($http){
    var factory = [],x2js = new X2JS();

    factory.getXMLData = function( fileName, callback){
        $http.get(fileName).success(function(data){
            var xmlObject = x2js.xml_str2json(data);
            console.log(xmlObject);
            callback(xmlObject)
        });
    };
    return factory;
});


