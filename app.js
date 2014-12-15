var app = angular.module('chat', ['firebase']);

app.config(function ($provide) {
    $provide.value('firebaseUrl', 'https://glowing-fire-2144.firebaseio.com/');
});

app.controller('ChatController',
    ['$scope', '$firebase', 'firebaseUrl',
    function($scope, $firebase, firebaseUrl) {
        var ref = new Firebase(firebaseUrl)
        ,   sync = $firebase(ref);

        $scope.messages = sync.$asArray();

        $scope.sendMessage = function ($event) {
            $event.preventDefault();
            $scope.messages.$add($scope.newMessage);
            $scope.newMessage = {};
        };
    }]
);
