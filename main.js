let movies = document.querySelector('.header__movies')
let searchBtn = document.querySelector('.header__select-search')
let type = document.querySelector('.type')
let genre = document.querySelector('.genre')
let age = document.querySelector('.age')
let searchName = document.querySelector('#search__name')
let url = 'https://api.kinopoisk.dev/v1.4/movie?limit=250'
fetch(url,{
    method: 'GET',
    headers:{
        'X-API-KEY': '19T9RMV-RYN46FC-PEBS1RE-FGSBRPY',
        'Content-type': 'application/json'
    }
})
.then(response => response.json())
.then(res => {console.log(res)

    res.docs.forEach(element => {
    
    movies.innerHTML += `
    <div class="header__movies-one">
    <img class="header__movies-poster" src="${element.poster.url}" alt=""> 
    
    <p class="header__movies-plus">Add My List</p>
    </div>`

    searchBtn.addEventListener('click', ()=>{
        if(type.value == element.type && genre.value == element.genres[0].name && age.value == element.ageRating){
            movies.innerHTML = ''
            movies.innerHTML += `<img class="header__movies-one" src="${element.poster.url}" alt="">`
        }
        else{
            movies.innerHTML = ''
            movies.innerHTML = `<p class="margin"> Nothing found </p>`
        }
    })
    document.querySelector('#search__link').addEventListener('click', ()=>{
        if(searchName.value == element.name || searchName.value == element.alternativeName){
            movies.innerHTML = ''
            movies.innerHTML = `<img class="header__movies-one" src="${element.poster.previewUrl}" alt="">`
        }
        else{
            movies.innerHTML = ''
            movies.innerHTML = `<p class="margin"> Nothing found </p>`
        }
    })
    document.querySelector('.header__movies-plus').addEventListener('click', ()=>{
        document.querySelector('.header__mylist').innerHTML += `<img class="header__movies-one" src="${element.poster.url}" alt="">`
    })
})
})
.catch(error => console.error(error))

document.querySelector('.header__logo').addEventListener('click', ()=>{
    window.open('http://127.0.0.1:5500/index.html')
})
