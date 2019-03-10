let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetdone: 0
}

let addMeeting = function(todo, meet = 0) {
    todo.meetings += meet
}
let meetDone = function(todo, meet = 0) {
    todo.meetdone += meet
}
let resetDay = function(todo) {
    todo.meetings = 0
    todo.meetdone = 0
}
let getSummaryOfDay = function(todo) {
    let meetLeft = todo.meetings - todo.meetdone
    return `You have ${meetLeft} left today`
}
addMeeting(myTodos, 4)
console.log(myTodos)
addMeeting(myTodos, 2)
console.log(myTodos)
meetDone(myTodos, 5)
console.log(myTodos)
console.log(getSummaryOfDay(myTodos))
