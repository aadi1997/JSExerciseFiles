var john = {
    name: 'John',
    age: 25,
    isActive: false, 
}
var marry = {
    name: 'Marry',
    age: 35,
    isActive: true, 
}
var ron = {
    name: 'Ron',
    age: 23,
    isActive: false, 
}
let users = new Map()
//console.log(typeof users)
users.set('john', john)
users.set('marry', marry)
users.set('ron', ron)

// console.log(users.size)
// console.log(users.get('marry'))

for(const key of users.keys()) {
    console.log(key)
}