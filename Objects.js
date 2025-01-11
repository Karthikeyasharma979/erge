var obj ={
    "name":"karthik",
    age:20,
    "language":"Javascript"
}
console.log("name : "+obj.name);
console.log("age : "+obj["age"]);
console.log("Language :"+obj.language);

//arrays
const arr = [1,2,3,4,1,4,1,4]
const[a,b,c,d,f]=arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(f);

//rest operator
const[r,...rest]=arr;
console.log("rest ",rest);