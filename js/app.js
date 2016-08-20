angular.module("FinalApp",["ngRoute", "ngResource"])
.config(function($routeProvider){
    $routeProvider
        .when("/", {
            controller: "MainController",
            templateUrl: "templates/home.html"
        })
        .when("/post/:id", {
            controller: "PostController",
            templateUrl: "templates/post.html"
        })
        .when("/new", {
            controller: "NewPostController",
            templateUrl: "templates/form.html"
        })
        .when("/edit/:id", {
            controller: "PostController",
            templateUrl: "templates/form.html"
        });
});
