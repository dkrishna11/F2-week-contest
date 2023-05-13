/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(student){
    if( student.marks>50 ){
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(student){
    if(student.marks>50 ){
      console.log(student)
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent = {id:4, name:"susan", age:"20" , marks:45};
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
 let failedStudents = arr.filter(function(student){
  if(student.marks<50)
  return false;
  else return true;
 });
 console.log(failedStudents);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "krishna", age: "26", marks: 90 },
    { id: 6, name: "Vishruth", age: "20", marks: 60 },
    { id: 7, name: "Nandini", age: "24", marks: 80 },
  ];

  let concatArray = arr.concat(newArr);
  console.log(concatArray);
}