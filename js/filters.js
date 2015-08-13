couldEPG.filter("trim", function() {
    return function(input) {
        return input.match(/(.*)\.[^.]+$/)[1].split("/").pop();
    };
});

couldEPG.filter("trimUnderscore", function() {
    return function(input) {
        return input.match(/(.*)\.[^.]+$/)[1].split("/").pop().replace("_"," ");
    };
});
