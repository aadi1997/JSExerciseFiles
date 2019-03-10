// let iAmGlobal = 'val'
// let x = true
// if(x) {
//     var iAmLocal = 'val1'
//     console.log(iAmGlobal)
//     console.log(iAmLocal)
// }
// console.log(iAmLocal)

//Kings Problem
//let king = 'John'

if(true) {
    //let king = 'Sam'
    if(true) {
        king = 'Ram' //undeclared variables declared as var
        console.log(king)
    }
}
if(true) {
    console.log(king)
}