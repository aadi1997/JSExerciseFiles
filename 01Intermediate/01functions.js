// let sayHello = function(name) {
//     console.log(`Hi ${name}`)
// }
// sayHello('John')

//Default Parameters
let user = function(name = 'noName', cnt = 0) {
    return 'Hello ' + name + ' and your count is : ' + cnt
}
console.log(user())