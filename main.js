
const form = document.getElementById('form')
const email = document.getElementById('mail')
const success = document.getElementById('success')
const dismiss = document.getElementById('dismiss')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(!email.validity.valid){
        console.log('invalid email address')
    }

    success.style.visibility = 'visible'
})

dismiss.addEventListener('click', () => {
    success.style.visibility = 'hidden'

})
