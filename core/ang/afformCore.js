(function(angular, $, _) {
  // Declare a list of dependencies.
  angular.module('afformCore', CRM.angRequires('afformCore'));

  // Use `afformCoreDirective(string name)` to generate an AngularJS directive.
  angular.module('afformCore').service('afformCoreDirective', function(crmApi4, crmStatus, crmUiAlert) {
    return function(camelName, meta, d) {
      function getUrlVars() {
        var vars = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
          vars[key] = value;
        });
        return vars;
      }
      d.restrict = 'AE';
      d.scope = {};
      d.scope.options = '=' + camelName;
      d.link = {
        pre: function($scope, $el, $attr) {
          $scope.ts = CRM.ts(camelName);
          $scope.routeParams = getUrlVars();
          $scope.meta = meta;
          $scope.crmApi4 = crmApi4;
          $scope.crmStatus = crmStatus;
          $scope.crmUiAlert = crmUiAlert;
          $scope.crmUrl = CRM.url;
        }
      };
      return d;
    };
  });
})(angular, CRM.$, CRM._);
