(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blogpost/blogpost.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blogpost/blogpost.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n  <div class=\"header-top-area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"header-left-menu\">\n            <ul>\n              <li><a href=\"index.html\">Home</a></li>\n              <li><a href=\"about-me.html\">About me</a></li>\n              <li><a href=\"contact-me.html\">Contact me</a></li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"social-icon\">\n            <a target=\"_blank\" href=\"http://facebook.com\"><i class=\"fa fa-facebook\"></i></a>\n            <a target=\"_blank\" href=\"http://twitter.com\"><i class=\"fa fa-twitter\"></i></a>\n            <a target=\"_blank\" href=\"http://plus.google.com\"><i class=\"fa fa-google-plus\"></i></a>\n            <a target=\"_blank\" href=\"http://linkedin.com\"><i class=\"fa fa-linkedin\"></i></a>\n            <a target=\"_blank\" href=\"http://instagram.com\"><i class=\"fa fa-instagram\"></i></a>\n            <a target=\"_blank\" href=\"http://dribble.com\"><i class=\"fa fa-dribbble\"></i></a>\n            <a target=\"_blank\" href=\"http://behance.com\"><i class=\"fa fa-behance\"></i></a>\n          </div>\n\n          <form action=\"index.html\" class=\"search-form\" method=\"get\" role=\"search\">\n            <input type=\"search\" title=\"Search for:\" name=\"s\" value=\"\" placeholder=\"Search ...\" class=\"search-field\">\n            <input type=\"submit\" value=\"Search\" class=\"search-submit\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"header-bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"logo\">\n            <h1><a href=\"index.html\">Din<span>Lipi</span></a></h1>\n\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n            </div>\n          </div>\n\n\n        </div>\n\n        <div class=\"col-md-9\">\n          <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"active\"><a href=\"index.html\">Home</a></li>\n              <li><a href=\"about-me.html\">About</a></li>\n              <li class=\"dropdown\"><a data-toggle=\"dropdown\" href=\"#\">Other pages <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"blog-left-sidebar.html\">Home left sidebar</a></li>\n                  <li><a href=\"two-column-grid.html\">Home 2 column masonry</a></li>\n                  <li><a href=\"three-column-grid.html\">Home 3 column masonry</a></li>\n                  <li><a href=\"archive.html\">Post Archives</a></li>\n                  <li><a href=\"single-post.html\">Single post</a></li>\n                  <li><a href=\"404.html\">404 not found</a></li>\n                </ul>\n              </li>\n              <li><a href=\"archive.html\">Movie</a></li>\n              <li><a href=\"archive.html\">Sports</a></li>\n              <li><a href=\"archive.html\">Travel</a></li>\n              <li><a href=\"contact-me.html\">Contact me</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<div style=\"clear:both\"></div>\n\n\n\n<section class=\"page-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"page-title\">\n          <h2>Archive for <span>Videos</span></h2>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <article>\n          <div class=\"post-content\">\n            <h2><a href=\"index.html\">{{blogPost.title}}</a></h2>\n            <div class=\"post-excerpt\" [innerHTML]=\"blogPost.content\">\n            </div>\n          </div>\n        </article>\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"right-sidebar\">\n          <div class=\"widget\">\n            <img class=\"about-photo\" src=\"assets/img/photo.jpg\" alt=\"\">\n            <h2 class=\"widget-title\">ABOUT ME</h2>\n            <p>Welcome to Dinlipi.<br/>\n              I'm Rasel Ahamed - Web Developer from Bangladesh. I love to do coding and love to watch movies and playing cricket.</p>\n            <p class=\"social-profiles\">Join me: <a href=\"http://facebook.com\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a> <a href=\"http://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a> <a href=\"http://plus.google.com\" target=\"_blank\"><i class=\"fa fa-google-plus\"></i></a> <a href=\"http://pinterest.com\" target=\"_blank\"><i class=\"fa fa-pinterest\"></i></a></p>\n          </div>\n\n          <div class=\"widget\">\n            <h2 class=\"widget-title\">Categories</h2>\n            <ul>\n              <li><a href=\"archive.html\">Entertainment</a></li>\n              <li><a href=\"archive.html\">Sports</a></li>\n              <li><a href=\"archive.html\">Travel</a></li>\n              <li><a href=\"archive.html\">Lifestyle</a></li>\n              <li><a href=\"archive.html\">Jobs</a></li>\n              <li><a href=\"archive.html\">Movies</a></li>\n              <li><a href=\"archive.html\">Music</a></li>\n            </ul>\n          </div>\n\n          <div class=\"widget\">\n            <h2 class=\"widget-title\">Recent Posts</h2>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>The story of a colorful life</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 15 Oct, 2015</p>\n            </div>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb-2.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>Into the Backpack of a Photographer</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 21 Sep, 2015</p>\n            </div>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb-3.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>The Light of Future</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 19 Sep, 2015</p>\n            </div>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb-4.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>Some Speed Art Works, Will Amaze You</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 6 Jun, 2015</p>\n            </div>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb-5.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>Meaning of Freedom!</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 29 may, 2015</p>\n            </div>\n          </div>\n\n          <div class=\"widget\">\n            <h2 class=\"widget-title\">Tags</h2>\n            <div class=\"tag-cloud\">\n              <a href=\"archive.html\">Entertainment</a>\n              <a href=\"archive.html\">Sports</a>\n              <a href=\"archive.html\">Travel</a>\n              <a href=\"archive.html\">Lifestyle</a>\n              <a href=\"archive.html\">Movies</a>\n              <a href=\"archive.html\">Music</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-4\">\n        <div class=\"footer-widget\">\n          <h2 class=\"footer-wid-title\">Popular Posts</h2>\n          <div class=\"single-wid-post\">\n            <a href=\"single-post.html\">\n              <img src=\"assets/img/post-thumb-3.jpg\" alt=\"\" class=\"alignleft\">\n              <h2>The Light of Future</h2>\n            </a>\n            <p><i class=\"fa fa-clock-o\"></i> 19 Sep, 2015</p>\n          </div>\n          <div class=\"single-wid-post\">\n            <a href=\"single-post.html\">\n              <img src=\"assets/img/post-thumb-6.jpg\" alt=\"\" class=\"alignleft\">\n              <h2>Lives after the Sunset</h2>\n            </a>\n            <p><i class=\"fa fa-clock-o\"></i> 15 Oct, 2015</p>\n          </div>\n          <div class=\"single-wid-post\">\n            <a href=\"single-post.html\">\n              <img src=\"assets/img/post-thumb-7.jpg\" alt=\"\" class=\"alignleft\">\n              <h2>Top 10 Manupulated Photos of All time</h2>\n            </a>\n            <p><i class=\"fa fa-clock-o\"></i> 15 Oct, 2015</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4\">\n        <div class=\"footer-widget\">\n          <h2 class=\"footer-wid-title\">Latest Tweets</h2>\n          <div id=\"tweet\"></div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4\">\n        <div class=\"footer-widget\">\n          <h2 class=\"footer-wid-title\">Instagram</h2>\n          <div id=\"instafeed\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <div class=\"footer-menu\">\n          <ul>\n            <li><a href=\"index.html\">Home</a></li>\n            <li><a href=\"about-me.html\">About</a></li>\n            <li><a href=\"archive.html\">Archives</a></li>\n            <li><a href=\"contact-me.html\">Contact me</a></li>\n          </ul>\n        </div>\n\n        <div class=\"footer-copyright\">\n          <p>&copy; 2015 - All Rights Reserved.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n  <div class=\"header-top-area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"header-left-menu\">\n            <ul>\n              <li><a href=\"index.html\">Home</a></li>\n              <li><a href=\"about-me.html\">About me</a></li>\n              <li><a href=\"contact-me.html\">Contact me</a></li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"social-icon\">\n            <a target=\"_blank\" href=\"http://facebook.com\"><i class=\"fa fa-facebook\"></i></a>\n            <a target=\"_blank\" href=\"http://twitter.com\"><i class=\"fa fa-twitter\"></i></a>\n            <a target=\"_blank\" href=\"http://plus.google.com\"><i class=\"fa fa-google-plus\"></i></a>\n            <a target=\"_blank\" href=\"http://linkedin.com\"><i class=\"fa fa-linkedin\"></i></a>\n            <a target=\"_blank\" href=\"http://instagram.com\"><i class=\"fa fa-instagram\"></i></a>\n            <a target=\"_blank\" href=\"http://dribble.com\"><i class=\"fa fa-dribbble\"></i></a>\n            <a target=\"_blank\" href=\"http://behance.com\"><i class=\"fa fa-behance\"></i></a>\n          </div>\n\n          <form action=\"index.html\" class=\"search-form\" method=\"get\" role=\"search\">\n            <input type=\"search\" title=\"Search for:\" name=\"s\" value=\"\" placeholder=\"Search ...\" class=\"search-field\">\n            <input type=\"submit\" value=\"Search\" class=\"search-submit\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"header-bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"logo\">\n            <h1><a href=\"index.html\">Din<span>Lipi</span></a></h1>\n\n            <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n            </div>\n          </div>\n\n\n        </div>\n\n        <div class=\"col-md-9\">\n          <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"active\"><a href=\"index.html\">Home</a></li>\n              <li><a href=\"about-me.html\">About</a></li>\n              <li class=\"dropdown\"><a data-toggle=\"dropdown\" href=\"#\">Other pages <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"blog-left-sidebar.html\">Home left sidebar</a></li>\n                  <li><a href=\"two-column-grid.html\">Home 2 column masonry</a></li>\n                  <li><a href=\"three-column-grid.html\">Home 3 column masonry</a></li>\n                  <li><a href=\"archive.html\">Post Archives</a></li>\n                  <li><a href=\"single-post.html\">Single post</a></li>\n                  <li><a href=\"404.html\">404 not found</a></li>\n                </ul>\n              </li>\n              <li><a href=\"archive.html\">Movie</a></li>\n              <li><a href=\"archive.html\">Sports</a></li>\n              <li><a href=\"archive.html\">Travel</a></li>\n              <li><a href=\"contact-me.html\">Contact me</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<div style=\"clear:both\"></div>\n\n\n\n<section class=\"page-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"page-title\">\n          <h2>Archive for <span>Videos</span></h2>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n          <article *ngFor=\"let blog of blogPosts\">\n            <div class=\"post-content\">\n              <h2><a href=\"index.html\">{{blog.title}}</a></h2>\n              <div class=\"post-excerpt\" [innerHTML]=\"blog.preview\">\n              </div>\n              <div class=\"post-content-bottom\">\n                <a href=\"index.html\" class=\"readmore\" routerLink=\"/blogPost/{{blog.id}}\">Read More <i class=\"fa fa-long-arrow-right\"></i></a>\n              </div>\n            </div>\n          </article>\n\n          <div class=\"post-navigation\">\n            <nav>\n              <ul class=\"pagination\">\n                <li *ngIf=\"pagination.currentPage > 0\"><a routerLink [queryParams]=\"{page : 1}\" class=\"page-link\">First</a></li>\n                <li *ngIf=\"pagination.currentPage > 0\"><a routerLink [queryParams]=\"{page : pagination.currentPage}\" class=\"page-link\">Previous</a> </li>\n                <li *ngFor=\"let page of pagination.pages\" [ngClass]=\"{active: pagination.currentPage === page}\" class=\"page-item number-item\">\n                  <a routerLink [queryParams]=\"{page: page + 1}\" class=\"page-link\">{{page + 1}}</a>\n                </li>\n                <li *ngIf=\"(pagination.currentPage + 1) < pagination.totalPages\"><a routerLink [queryParams]=\"{page: pagination.currentPage + 2}\" class=\"page-link\">Next</a> </li>\n                <li *ngIf=\"(pagination.currentPage + 1) < pagination.totalPages\">\n                  <a routerLink [queryParams]=\"{page: pagination.totalPages}\" class=\"page-link\">Last</a>\n                </li>\n\n              </ul>\n<!--              <ul class=\"pagination\">-->\n<!--                <li><a href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>-->\n<!--                <li><a href=\"#\">1</a></li>-->\n<!--                <li><a href=\"#\">2</a></li>-->\n<!--                <li><a href=\"#\">3</a></li>-->\n<!--                <li><a href=\"#\">4</a></li>-->\n<!--                <li><a href=\"#\">5</a></li>-->\n<!--                <li><a href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>-->\n<!--              </ul>-->\n            </nav>\n          </div>\n        </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"right-sidebar\">\n          <div class=\"widget\">\n            <img class=\"about-photo\" src=\"assets/img/photo.jpg\" alt=\"\">\n            <h2 class=\"widget-title\">ABOUT ME</h2>\n            <p>Welcome to Dinlipi.<br/>\n              I'm Rasel Ahamed - Web Developer from Bangladesh. I love to do coding and love to watch movies and playing cricket.</p>\n            <p class=\"social-profiles\">Join me: <a href=\"http://facebook.com\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a> <a href=\"http://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a> <a href=\"http://plus.google.com\" target=\"_blank\"><i class=\"fa fa-google-plus\"></i></a> <a href=\"http://pinterest.com\" target=\"_blank\"><i class=\"fa fa-pinterest\"></i></a></p>\n          </div>\n\n          <div class=\"widget\">\n            <h2 class=\"widget-title\">Categories</h2>\n            <ul>\n              <li><a href=\"archive.html\">Entertainment</a></li>\n              <li><a href=\"archive.html\">Sports</a></li>\n              <li><a href=\"archive.html\">Travel</a></li>\n              <li><a href=\"archive.html\">Lifestyle</a></li>\n              <li><a href=\"archive.html\">Jobs</a></li>\n              <li><a href=\"archive.html\">Movies</a></li>\n              <li><a href=\"archive.html\">Music</a></li>\n            </ul>\n          </div>\n\n          <div class=\"widget\">\n            <h2 class=\"widget-title\">Recent Posts</h2>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>The story of a colorful life</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 15 Oct, 2015</p>\n            </div>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb-2.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>Into the Backpack of a Photographer</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 21 Sep, 2015</p>\n            </div>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb-3.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>The Light of Future</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 19 Sep, 2015</p>\n            </div>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb-4.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>Some Speed Art Works, Will Amaze You</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 6 Jun, 2015</p>\n            </div>\n            <div class=\"single-wid-post\">\n              <a href=\"single-post.html\">\n                <img src=\"assets/img/post-thumb-5.jpg\" alt=\"\" class=\"alignleft\">\n                <h2>Meaning of Freedom!</h2>\n              </a>\n              <p><i class=\"fa fa-clock-o\"></i> 29 may, 2015</p>\n            </div>\n          </div>\n\n          <div class=\"widget\">\n            <h2 class=\"widget-title\">Tags</h2>\n            <div class=\"tag-cloud\">\n              <a href=\"archive.html\">Entertainment</a>\n              <a href=\"archive.html\">Sports</a>\n              <a href=\"archive.html\">Travel</a>\n              <a href=\"archive.html\">Lifestyle</a>\n              <a href=\"archive.html\">Movies</a>\n              <a href=\"archive.html\">Music</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-4\">\n        <div class=\"footer-widget\">\n          <h2 class=\"footer-wid-title\">Popular Posts</h2>\n          <div class=\"single-wid-post\">\n            <a href=\"single-post.html\">\n              <img src=\"assets/img/post-thumb-3.jpg\" alt=\"\" class=\"alignleft\">\n              <h2>The Light of Future</h2>\n            </a>\n            <p><i class=\"fa fa-clock-o\"></i> 19 Sep, 2015</p>\n          </div>\n          <div class=\"single-wid-post\">\n            <a href=\"single-post.html\">\n              <img src=\"assets/img/post-thumb-6.jpg\" alt=\"\" class=\"alignleft\">\n              <h2>Lives after the Sunset</h2>\n            </a>\n            <p><i class=\"fa fa-clock-o\"></i> 15 Oct, 2015</p>\n          </div>\n          <div class=\"single-wid-post\">\n            <a href=\"single-post.html\">\n              <img src=\"assets/img/post-thumb-7.jpg\" alt=\"\" class=\"alignleft\">\n              <h2>Top 10 Manupulated Photos of All time</h2>\n            </a>\n            <p><i class=\"fa fa-clock-o\"></i> 15 Oct, 2015</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4\">\n        <div class=\"footer-widget\">\n          <h2 class=\"footer-wid-title\">Latest Tweets</h2>\n          <div id=\"tweet\"></div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4\">\n        <div class=\"footer-widget\">\n          <h2 class=\"footer-wid-title\">Instagram</h2>\n          <div id=\"instafeed\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <div class=\"footer-menu\">\n          <ul>\n            <li><a href=\"index.html\">Home</a></li>\n            <li><a href=\"about-me.html\">About</a></li>\n            <li><a href=\"archive.html\">Archives</a></li>\n            <li><a href=\"contact-me.html\">Contact me</a></li>\n          </ul>\n        </div>\n\n        <div class=\"footer-copyright\">\n          <p>&copy; 2015 - All Rights Reserved.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogpost/blogpost.component */ "./src/app/blogpost/blogpost.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'blogPost/:id', component: _blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_4__["BlogpostComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'blog';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogpost/blogpost.component */ "./src/app/blogpost/blogpost.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_6__["BlogpostComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/blogpost/blogpost.component.css":
/*!*************************************************!*\
  !*** ./src/app/blogpost/blogpost.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dwb3N0L2Jsb2dwb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/blogpost/blogpost.component.ts":
/*!************************************************!*\
  !*** ./src/app/blogpost/blogpost.component.ts ***!
  \************************************************/
/*! exports provided: BlogpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpostComponent", function() { return BlogpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let BlogpostComponent = class BlogpostComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_API_URL}/blog/posts/${id}`).subscribe((blogPost) => {
            this.blogPost = blogPost;
        });
    }
};
BlogpostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BlogpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blogpost',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blogpost.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blogpost/blogpost.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blogpost.component.css */ "./src/app/blogpost/blogpost.component.css")).default]
    })
], BlogpostComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let HomeComponent = class HomeComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
    }
    loadPage(page) {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BASE_API_URL}/blog/posts?page=${page}`).subscribe(x => {
            this.pagination = x.pagination;
            this.blogPosts = x.blogPosts;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    BASE_API_URL: 'http://localhost:8081'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexandru.ciocan/Desktop/coddify-blog/blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map