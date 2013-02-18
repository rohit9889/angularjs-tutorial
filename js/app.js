var myApp = angular.module('student', []);

function StudentController($scope, $http){
  var loadStudents = function(){
    $scope.students = [];

    $http.get('/students.json').success(
      function(response, status, headers, config){
        $scope.students = response.students;
      }
    ).error(function(response, status, headers, config){
      $scope.error_message = response.error_message;
    });
  }

  $scope.newStudent = function(){
    $scope.enterNew = true;
    $scope.editing = false;
    $scope.student = {};
  };
  
  $scope.createStudent = function(){
    $http.post('/students.json', {"student": $scope.student})
      .success(function(response, status, headers, config){
          $scope.students.push(response.student);
          $scope.enterNew = false;
          $scope.editing = false;
        })
      .error(function(response, status, headers, config){
        $scope.error_message = response.error_message;
      });
  }

  $scope.editStudent = function(student){
    $scope.enterNew = false;
    $scope.editing = true;
    $scope.student = student;
  };
  
  $scope.updateStudent = function(){
    $http.put('/students/' + $scope.student.id + '.json', {"student": $scope.student})
      .success(function(response, status, headers, config){
          $scope.student = response.student;
          $scope.enterNew = false;
          $scope.editing = false;
        })
      .error(function(response, status, headers, config){
        $scope.error_message = response.error_message;
      });
  };

  $scope.cancelSave = function(){
    $scope.enterNew = false;
    $scope.editing = false;
    $scope.student = {};
  };

  
  $scope.deleteStudent = function(student){
    $http.delete('/students/' + student.id + '.json')
      .success(function(response, status, headers, config){
          var index = $scope.students.indexOf(student);
          $scope.students.splice(index,1);
      })
      .error(function(response, status, headers, config){
        $scope.error_message = response.error_message;
      });
  }

  loadStudents();
}