'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('controllerA', ['$http','notify', function($http, notify){
    this.xxx='A';
    this.active = true;
    this.name = 'My test name';
    // this.callNotify = function(msg) {
    //     notify(msg);
    // };
}])
.controller('controllerB', function(){
})
.factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
        msgs.push(msg);
        if (msgs.length === 3) {
            win.alert(msgs.join('\n'));
            msgs = [];
        }
    };
}])
.directive('test',function(){
    return {
        scope: {
            name: '@testName',
            active: '=testActive'
        },
        template: '<p>Output is: {{name}}: {{active}}'
    };
});
