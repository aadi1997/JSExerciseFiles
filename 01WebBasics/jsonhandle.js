const student = {
    name: 'John',
    age: 23,
    isActive: true
}

//Object to string
const x = JSON.stringify(student);
console.log(typeof x);
//localStorage.setItem('student', x);
const toJSON = JSON.parse(x);
console.log(typeof toJSON);