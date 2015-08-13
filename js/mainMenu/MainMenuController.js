function MainMenuController($scope, $document, $routeParams, MenuService,xmlFactory) {
    MenuService.menuList.getList($scope)

    var vm = this;
    vm.msgs = [];
    vm.keys = {
        ENTER    : function(name, code) { vm.msgs.push({ name: name, code: code}) },
        ESC      : function(name, code) { vm.msgs.push({ name: name, code: code}) },
        SHIFT    : function(name, code) { vm.msgs.push({ name: name, code: code}) },
        SPACEBAR : function(name, code) { vm.msgs.push({ name: name, code: code}) }
    };
   /* $scope.keyPressed = function(e) {
        $scope.keyCode = e.which;
        alert(e.which)
    };
    $document.bind("keypress", function(event) {
        console.log(event)
    });

    var addLog = function (label) {
        console.log(label);
    };

    // Bind two callback on a
    keyboardManager.bind('a', function() {
        addLog('Callback a - 00');
    });
    keyboardManager.bind('a', function() {
        addLog('Callback a - 01');
    });
    // Bind ctrl+a
    keyboardManager.bind('ctrl+a', function() {
        addLog('Callback ctrl+a');
    });
    // Bind ctrl+shift+d
    keyboardManager.bind('ctrl+shift+d', function() {
        addLog('Callback ctrl+shift+d');
    });
    // Bind z and disabled input,textarea
    keyboardManager.bind('z', function() {
        addLog('Callback z');
    }, {
        'inputDisabled': true
    });*/

}

function SubmMenuController($scope, $routeParams, SubMenuService,xmlFactory) {
    SubMenuService.menuList.getSubMenuList($scope,$routeParams.id)
}
