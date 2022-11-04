const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const {
        elements: { email, password },
    } = e.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    e.currentTarget.reset()
}

