var myApp = angular.module('student', []);

function StudentController($scope){
  $scope.students = [
    {name: "Nikhil Jain", age: 27},
    {name: "Rohit Sharma", age: 23},
    {name: "Suvish T.", age: 22}
  ];
  
  $scope.newStudent = function(){
    $scope.enterNew = true;
    $scope.editing = false;
    $scope.student = {};
  };
  
  $scope.createStudent = function(){
    $scope.students.push($scope.student);
    $scope.enterNew = false;
    $scope.editing = false;
  };
  
  $scope.editStudent = function(student){
    $scope.enterNew = false;
    $scope.editing = true;
    $scope.student = student;
  };
  
  $scope.updateStudent = function(student){
    $scope.enterNew = false;
    $scope.editing = false;
  };
  
  $scope.cancelSave = function(){
    $scope.enterNew = false;
    $scope.editing = false;
    $scope.student = {};
  };
  
  $scope.deleteStudent = function(student){
    var index = $scope.students.indexOf(student);
    $scope.students.splice(index,1);
  }
}