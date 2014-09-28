angular.module('templates-main', ['../partials/form.jade', '../partials/navbar.jade', '../partials/panel.jade']);

angular.module("../partials/form.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../partials/form.jade",
    "<div class=\"form\">\n" +
    "  <div class=\"pageName\">\n" +
    "    <label for=\"pageName\">Page Name</label>\n" +
    "    <input id=\"pageName\" type=\"text\" ng-model=\"mc.pageName\"/>\n" +
    "  </div>\n" +
    "  <div class=\"pageText\">\n" +
    "    <p>Page Text</p>\n" +
    "    <div text-angular=\"text-angular\" ng-model=\"mc.pageText\"></div>\n" +
    "  </div>\n" +
    "  <button ng-click=\"mc.submit()\">Submit</button>\n" +
    "  <h1>{{mc.pageName}}</h1>\n" +
    "  <div ng-bind-html=\"mc.pageText\"></div>\n" +
    "  <hr/>\n" +
    "</div>");
}]);

angular.module("../partials/navbar.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../partials/navbar.jade",
    "<nav role=\"navigation\" ng-class=\"classes()\" class=\"navbar navbar-default\">\n" +
    "  <div class=\"container\"></div>\n" +
    "</nav>");
}]);

angular.module("../partials/panel.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../partials/panel.jade",
    "<div class=\"panel panel-default\">\n" +
    "  <div ng-if=\"header != null\" class=\"panel-heading\">{{header}}</div>\n" +
    "  <div ng-transclude=\"ng-transclude\" class=\"panel-body\"></div>\n" +
    "</div>");
}]);
