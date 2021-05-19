const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const message = document.getElementById('message')
const messageContainer = document.querySelector('.message-container')

let isValid = false
let passwordMatch = false

function formHandler(e) {
    e.preventDefault()
    validateForm()
}

function validateForm() {
    // Use HTML constraints API to check form validity
    isValid = form.checkValidity()

    if (!isValid) {
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        message.textContent = 'Please fill out all fields'
    }
    // Check to see if both password fields match
    if (password1El.value === password2El.value) {
        passwordMatch = true
        password1El.style.borderColor = 'green'
        password2El.style.borderColor = 'green'
    } else {
    // If they doesn't match, border color of input to red, change message
        password1El.style.borderColor = 'red'
        password2El.style.borderColor = 'red'
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        message.textContent = 'Make sure passwords match'
    }
    //  If form is valid and passwords match
    if (isValid && passwordMatch) {
        messageContainer.style.borderColor = 'green'
        message.style.color = 'green'
        message.textContent = 'Successfully registered!'
        storeFormData()
    }
}

// Save data user from Form
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value
    }
    // Do something with user data
    console.log(user)
}

form.addEventListener('submit', formHandler)