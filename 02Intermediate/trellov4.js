//const myTodos = ['Buy Bread', 'Go to Gym', 'Record Videos']

const newtodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Record Videos',
    isDone: true,
}]

const findTodo = function(myTodos, title) {
    const index = myTodos.findIndex(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}

let printMe = findTodo(newtodos, 'Go To gym')
console.log(printMe)