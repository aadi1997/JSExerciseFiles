let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetdone: 0,
    addMeeting: function(num) {
        //console.log(this)
        this.meetings += num
    },
    meetDone: function(num) {
        this.meetdone += num
    },
    reset: function() {
        this.meetdone = 0
        this.meetings = 0
    },
    summary: function() {
        return `You have ${this.meetings - this.meetdone} meetings left for today`
    }
}
myTodos.addMeeting(3)
myTodos.meetDone(1)
console.log(myTodos.summary())
myTodos.reset()
console.log(myTodos.summary())