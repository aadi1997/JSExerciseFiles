// alert('File is attached')
// console.log(document.title)
// document.title = 'Changed Title'

//console.log(document.getElementById('id1'))
// const search = document.querySelectorAll('p')
// console.log(search[1])

// console.log(document.URL)

const myPElements = document.querySelectorAll('p')
myPElements.forEach((p) => p.textContent = 'I am being changed using loop')

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was created using JS'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event) => event.target.textContent = 'I was clicked')

//Track input form
document.querySelector('#myform').addEventListener('input', (event) => console.log(event.target.value))