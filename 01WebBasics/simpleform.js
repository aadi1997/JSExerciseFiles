const para = document.createElement('p')
para.textContent = 'Password and Re-type password do not match'

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault()
    let pass1 = event.target.password.value
    let pass2 = event.target.password2.value
    if(pass1 != pass2) {
        console.log('Wrong')
        document.querySelector('body').appendChild(para)
    } 
})
