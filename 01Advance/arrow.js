// const sayHello = function(name) {
//     return `Hey ${name}`
// }
// console.log(sayHello('Aditya'))

// const sayHello = (name) => {
//     return `Hey ${name}`
// }

// const sayHello = (name) => `Hey ${name}`
// console.log(sayHello('Aditya'))

const todos = [{
    title: 'Maths',
    isDone: true,
}, {
    title: 'Physics',
    isDone: false,
}, {
    title: 'Chemistry',
    isDone: false,
}, {
    title: 'Biology',
    isDone: true,
}, {
    title: 'English',
    isDone: true,
}, {
    title: 'C++',
    isDone: false,
}]

const tasksNotDone = todos.filter((todo) => todo.isDone === false)
tasksNotDone.forEach(todo => {
    console.log(todo.title)
});
