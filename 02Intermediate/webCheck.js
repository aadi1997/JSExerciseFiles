let userEmail = 'abc1231'
let password = '1231234'

let userChecker = function(myString) {
    if(myString.includes('123') && myString.length > 6) {
        return true
    }
    return false
}

let passChecker = function(myString) {
    if(myString.includes('123') && myString.length > 6) {
        return true
    }
    return false
}
console.log(passChecker(password))