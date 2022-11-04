const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const {
        elements: { email, password },
    } = e.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Поля обовязкові для заповнення!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    e.currentTarget.reset()
}

