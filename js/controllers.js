angular.module("FinalApp")
.controller("MainController", function($scope, PostResource){
    $scope.posts = PostResource.query();

    $scope.removePost = function(post){
        PostResource.delete({id: post.id}, function(data){
            console.log(data);
        });
        $scope.posts = $scope.posts.filter(function(element){
            return element.id !== post.id;
        });
    };
})
.controller("PostController", function($scope, PostResource, $routeParams, $location){
    $scope.post = PostResource.get({id: $routeParams.id});
    $scope.title = "Edit post";
    $scope.savePost = function(){
        PostResource.update({id: $scope.post.id}, {data: $scope.post}, function(data){
            console.log(data);
            $location.path("/post/"+$scope.post.id);
        });
    };
})
.controller("NewPostController", function($scope, PostResource, $routeParams, $location){
    $scope.post = {};
    $scope.title = "Create post";
    $scope.savePost = function(){
        PostResource.save({data: $scope.post}, function(data){
            console.log(data);
            $location.path("/");
        });
    };
});
