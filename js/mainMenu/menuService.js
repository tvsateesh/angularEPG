couldEPG.factory("MenuService", function (xmlFactory,$q) {
    // create store
    var menuList = new MenuList(xmlFactory,$q);

    return {
        menuList: menuList
    };
});

couldEPG.factory("SubMenuService", function (xmlFactory,$q) {
    // create store
    var menuList = new SubMenuList(xmlFactory,$q);

    return {
        menuList: menuList
    };
});

