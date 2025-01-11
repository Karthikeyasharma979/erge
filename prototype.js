var Student={
    name:"Karthik",
    age:20
}

var UStudent={
    dept:"IT"
}

UStudent.__proto__=Student;
console.log(UStudent.name)

