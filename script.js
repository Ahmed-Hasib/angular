var myapp=angular.module("mymodule",[]);
myapp.controller("mycontroller",function($scope){
    $scope.msg="AngularJS is Working ";
    var employee=[
        {name:"Aasib Ahmed",dob:new Date("November 28,1990"),gender:"male",salary:1250000.223 },
        {name:"Basib Ahmed",dob:new Date("November 28,1990"),gender:"male",salary:200.254 },
        {name:"Casib Ahmed",dob:new Date("November 28,1990"),gender:"male",salary:254000.223 },
        {name:"Dasib Ahmed",dob:new Date("November 28,1990"),gender:"male",salary:5000.254 },
        {name:"Easib Ahmed",dob:new Date("November 28,1990"),gender:"male",salary:50000.223 },
        {name:"Hasib Ahmed",dob:new Date("November 28,1990"),gender:"male",salary:10000.254 }
    ];
    $scope.employees=employee;
    $scope.rowlimit=2;
    $scope.sort="name";
    
});