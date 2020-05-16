//2016-01-09: Create module and add name of app to ng-app tag
var todoApp = angular.module('TodoApp', [])

//2016-01-09: Create a controller
todoApp.controller('TodoCtrl', function ($scope) {
  //TODO - Change into a function and change binding in HTML
  $scope.totalTodos = 2;

  $scope.todos = [
    { text: "Getting started", done: false },
    { text: "Learn more about Angular", done: false },
   ];

   $scope.addTodo = function(event) {
     event.preventDefault();
     $scope.todos.push({ text: $scope.formTodoText, done: false });
     $scope.totalTodos++;
     $scope.formTodoText = '';
   }

   //TODO - implement and add button to HTML
   $scope.clearCompleted = function (event) {
     event.preventDefault();

     //TOdo - loop over list and removed completed
   }
});
