angular.module('templates-main', ['../partials/editPage.jade', '../partials/form.jade', '../partials/navbar.jade', '../partials/navbarAdmin.jade', '../partials/panel.jade']);

angular.module("../partials/editPage.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../partials/editPage.jade",
    "<div class=\"form\">\n" +
    "  <div class=\"pageName\">\n" +
    "    <label for=\"pageName\">Page Name</label>\n" +
    "    <input id=\"pageName\" type=\"text\" ng-model=\"mc.pageName\"/>\n" +
    "  </div>\n" +
    "  <div class=\"pageText\">\n" +
    "    <p>Page Text</p>\n" +
    "    <div text-angular=\"text-angular\" ng-model=\"mc.pageText\" ta-unsafe-sanitizer=\"true\"></div>\n" +
    "  </div>\n" +
    "  <button ng-click=\"mc.submit()\">Submit</button>\n" +
    "  <h1>{{mc.pageName}}</h1>\n" +
    "  <div ng-bind-html=\"mc.pageText\"></div>\n" +
    "</div>");
}]);

angular.module("../partials/form.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../partials/form.jade",
    "<div class=\"form\">\n" +
    "  <div class=\"pageName\">\n" +
    "    <label for=\"pageName\">Page Name</label>\n" +
    "    <input id=\"pageName\" type=\"text\" ng-model=\"mc.pageName\"/>\n" +
    "  </div>\n" +
    "  <div class=\"pageText\">\n" +
    "    <p>Page Text</p>\n" +
    "    <div text-angular=\"text-angular\" ng-model=\"mc.pageText\" ta-unsafe-sanitizer=\"true\"></div>\n" +
    "  </div>\n" +
    "  <button ng-click=\"mc.submit()\">Submit</button>\n" +
    "  <h1>{{mc.pageName}}</h1>\n" +
    "  <div ng-bind-html=\"mc.pageText\"></div>\n" +
    "</div>");
}]);

angular.module("../partials/navbar.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../partials/navbar.jade",
    "<nav role=\"navigation\" ng-class=\"classes()\" class=\"navbar navbar-default\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\"><a ng-if=\"brand!=null\" class=\"navbar-brand\">{{brand}}</a></div>\n" +
    "  </div>\n" +
    "</nav>");
}]);

angular.module("../partials/navbarAdmin.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../partials/navbarAdmin.jade",
    "<jg-panel>\n" +
    "  <div class=\"row\">\n" +
    "    <col-sm-2>\n" +
    "      <p>Static (This means it does not scroll)</p>\n" +
    "    </col-sm-2>\n" +
    "    <col-sm-1>\n" +
    "      <input type=\"checkbox\" ng-model=\"\"/>\n" +
    "    </col-sm-1>\n" +
    "    <col-sm-2>\n" +
    "      <p>Brand Name</p>\n" +
    "    </col-sm-2>\n" +
    "    <col-sm-1>\n" +
    "      <input type=\"text\" ng-model=\"\"/>\n" +
    "    </col-sm-1>\n" +
    "  </div>\n" +
    "</jg-panel>");
}]);

angular.module("../partials/panel.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../partials/panel.jade",
    "<div class=\"panel panel-default\">\n" +
    "  <div ng-if=\"header != null\" class=\"panel-heading\">{{header}}</div>\n" +
    "  <div ng-transclude=\"ng-transclude\" class=\"panel-body\"></div>\n" +
    "</div>");
}]);
