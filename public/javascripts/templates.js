angular.module('templates-main', ['../partials/form.jade']);

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
    "    <!-- textarea(id=pageText, rows=\"4\", cols=\"50\", ng-model=\"mc.pageText\")-->\n" +
    "    <!-- input(id=\"pageText\", type=\"text\", ng-model=\"mc.pageText\")-->\n" +
    "  </div>\n" +
    "  <button ng-click=\"mc.submit()\">Submit</button>\n" +
    "  <h1>{{mc.pageName}}</h1>\n" +
    "  <h2>{{mc.pageText}}</h2>\n" +
    "</div>");
}]);
