let convertToRupees = (dollar) => {
    if(typeof dollar == 'number') {
        return dollar * 64
    } else {
        throw Error('Value must be a number')
    }
}

//console.log(convertToRupees('5'))
try {
    console.log(convertToRupees('5'))
} catch (error) {
    console.log(error)
}

console.log('I will not run if program crashes')