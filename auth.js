let email = document.querySelector('#email')
let password = document.querySelector('#password')
let submit = document.querySelector('#submit')

submit.addEventListener('click', ()=>{
    let values = Object.values(localStorage)
    let keys = Object.keys(localStorage)
    for (const value of values) {
        for (const key of keys) {
            if(key == email.value && value == password.value){
                window.open('http://127.0.0.1:5500/main.html')
            }
        }    
    }
})

let learnMoreLink = document.querySelector('.link__two')
learnMoreLink.addEventListener('click', ()=>{
    learnMoreLink.classList.toggle('hide')
    let beforeMoreInfo = document.createElement('br')
    learnMoreLink.after(beforeMoreInfo)
    let moreInfo = document.createElement('p')
    moreInfo.innerHTML = `The information collected by Google reCAPTCHA is subject to the Google <a class="link__two" href="https://policies.google.com/privacy"> Privacy Policy </a> and <a class="link__two" href="https://policies.google.com/terms"> Terms of Service </a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).`
    beforeMoreInfo.after(moreInfo)
})

let logo = document.querySelector('.header__logo')
logo.addEventListener('click', ()=>{
    window.open('http://127.0.0.1:5500/index.html')
})

let signUpLink = document.querySelector('#link__one')
signUpLink.addEventListener('click', ()=>{
    document.querySelector('.header__registration-title').textContent = `Sign Up`
    submit.value = 'Sign Up'
    signUpLink.classList.add('hide')
    document.querySelector('.header__registration-new').classList.add('hide')
    submit.addEventListener('click', ()=>{
        localStorage.setItem(email.value, password.value)
    })
})
