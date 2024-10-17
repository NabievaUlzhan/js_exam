const accordion = document.querySelectorAll('.accordion')
const hidden = document.querySelectorAll('.hidden')

accordion.forEach((elem) =>{
    elem.addEventListener('click', ()=>{
        elem.classList.toggle('active')
    })
})


function openAuth(){
    window.open('http://127.0.0.1:5500/auth.html?')
}
document.querySelector('.header__top-submit').addEventListener('click', openAuth)
document.querySelector('.header__registration-submit').addEventListener('click', openAuth)