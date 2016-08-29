angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("about/about.html","<div class=\"well\">\n  <h1>About Me</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo enim amet cum necessitatibus velit tempore pariatur iure excepturi in doloribus ea iusto, omnis voluptatem. Officiis ducimus, modi laboriosam debitis pariatur.</p>\n</div>");
$templateCache.put("contact/contact.html","<div class=\"callout callout-success\">\n    <h4>I am  kooll</h4>\n    <p><strong>Heads up!</strong> This copy is a work in progress.</p>\n</div>\n<div class=\"card\">\n    <div class=\"card-header bg-warning\">\n        Featured\n    </div>\n    <div class=\"card-block\">\n        <h4 class=\"card-title\">Special title treatment</h4>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n</div>");
$templateCache.put("home/home.html","<h1>{{\'My Home\' | upper}} <i class=\"ti-star\"></i></h1>\r\n\r\n<img src=\"images/me.png\" alt=\"Me\" class=\"text-sm-center\">\r\n\r\n<p ng-bind=\"::$ctrl.appName\"></p>\r\n\r\n<h1>\r\n	Users List \r\n	<button class=\"btn btn-primary pull-sm-right\" ng-click=\"$ctrl.getUsers()\" ng-if=\"!$ctrl.users.length\">Get Users</button>\r\n</h1>\r\n<table class=\"table table-bordered\">\r\n	<thead>\r\n		<tr colorme>\r\n			<th>Name</th>\r\n			<th>Email</th>\r\n			<th>Phone</th>\r\n			<th>Website</th>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		<tr ng-repeat=\"user in ::$ctrl.users\">\r\n			<td ng-bind=\"user.name\"></td>\r\n			<td ng-bind=\"user.email\"></td>\r\n			<td ng-bind=\"user.phone\"></td>\r\n			<td ng-bind=\"user.website\"></td>\r\n		</tr>\r\n	</tbody>\r\n</table>");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n<div id=\"wrapper\">\n    <sidebar></sidebar> \n    <div class=\"content\">\n    	<div ui-view></div>\n        <app-footer></app-footer>\n    </div>\n</div>\n\n");
$templateCache.put("layout/footer.html","<footer>\n    <div class=\"container\">\n        <a class=\"logo-font\" ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName | lowercase\"></a>\n        <span class=\"attribution\">\n      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n      An UI project from <a href=\"https://github.com/hesing\">Hemant</a>.\n      Code licensed under MIT.\n    </span>\n    </div>\n</footer>\n");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-dark bg-primary navbar-fixed-top\">\n    <a class=\"navbar-brand\" ui-sref=\"app.home\">\n        <button class=\"navbar-toggler\" type=\"button\">\n            &#9776;\n        </button>\n        NG Demo\n    </a>\n    <ul class=\"nav navbar-nav pull-sm-right\">\n        <li class=\"nav-item\" ui-sref-active=\"active\">\n            <a class=\"nav-link\" ui-sref=\"app.about\">About</a>\n        </li>\n        <li class=\"nav-item\" ui-sref-active=\"active\">\n            <a class=\"nav-link\" ui-sref=\"app.contact\">Contact</a>\n        </li>\n        \n    </ul>\n</nav>");
$templateCache.put("components/sidebar/sidebar.html","<aside class=\"sidebar left sidebar-menu-bg sidebar-xs toggled\">\r\n    <div class=\"sidebar-inner\">\r\n        <ul class=\"menu\">\r\n            <li ng-click=\"$ctrl.toggleItem()\">\r\n                <a ui-sref=\"app.home\">Home</a>\r\n            </li>\r\n            <li ng-click=\"$ctrl.toggleItem()\">\r\n                <a ui-sref=\"app.about\">About</a>\r\n            </li>\r\n            <li ng-click=\"$ctrl.toggleItem()\">\r\n                <a ui-sref=\"app.contact\">Contact</a>\r\n            </li>\r\n            <li class=\"sub-menu\">\r\n                <a href=\"\" ng-click=\"$ctrl.toggleItem()\">\r\n                    <i class=\"ti-angle-right menu-arrow\"></i> Headers</a>\r\n                <ul>\r\n                    <li><a data-ng-click=\"mactrl.sidebarStat($event)\" data-ui-sref=\"headers.textual-menu\" data-ui-sref-active=\"active\" class=\"active\" href=\"#/headers/textual-menu\">Textual menu</a></li>\r\n                    <li><a data-ng-click=\"mactrl.sidebarStat($event)\" data-ui-sref=\"headers.image-logo\" data-ui-sref-active=\"active\" href=\"#/headers/image-logo\">Image logo</a></li>\r\n                    <li><a data-ng-click=\"mactrl.sidebarStat($event)\" data-ui-sref=\"headers.mainmenu-on-top\" data-ui-sref-active=\"active\" href=\"#/headers/mainmenu-on-top\">Mainmenu on top</a></li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</aside>");}]);