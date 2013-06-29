jqmModule.directive('jqmFlip', [function () {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        // Templates can only have one root node, this does not match with the required jQuery Mobile code.
        // So everything is wrapped in another div layer ... this layer also establishes a new scope
        templateUrl: 'templates/jqmFlip.html',
        scope: {},
        require: ['?ngModel'],
        link: function (scope, element, attr, ctrls) {
            var ngModelCtrl = ctrls[0];

            observeParameters();
            initToggleState();
            bindClick();

            function observeParameters () {
                attr.$observe('onLabel', function (value) {
                    scope.onLabel = value;
                });
                attr.$observe('onValue', function (value) {
                    scope.onValue = value;
                });
                attr.$observe('offLabel', function (value) {
                    scope.offLabel = value;
                });
                attr.$observe('offValue', function (value) {
                    scope.offValue = value;
                });
            }

            function initToggleState () {
                ngModelCtrl.$render = updateToggleStyle();
                ngModelCtrl.$viewChangeListeners.push(updateToggleStyle);
            };

            function updateToggleStyle () {
                var toggled = isToggled();
                scope.toggleLabel = toggled ? scope.onLabel : scope.offLabel;
                scope.onStyle = toggled ? 100 : 0;
                scope.offStyle = toggled ? 0: 100;
            }

            function bindClick () {
                scope.toggle = function () {
                    ngModelCtrl.$setViewValue(isToggled() ? scope.offValue : scope.onValue);
                };
            }

            function isToggled () {
                return ngModelCtrl.$viewValue == scope.onValue;
            }

        }
    };
}]);
