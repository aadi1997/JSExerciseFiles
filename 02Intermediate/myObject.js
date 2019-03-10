let myVideo = {
    title: 'Loops',
    length: 15,
    description: 'This is a video description'
}
// console.log(myVideo)
// console.log(myVideo.title)

let addLength = function(myObject) {
    return {
        formatOne: `This video has length : ${myObject.length + 2}`
    }
}
let addOne = addLength(myVideo)
console.log(addOne.formatOne)