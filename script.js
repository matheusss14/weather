const key = "3e0b4a5133fdd66bed8406cbeef60ae4"

function update(dados) {
    console.log(dados)
    
    document.querySelector("#cidade").innerHTML = dados.name + ", "
    document.querySelector("#pais").innerHTML = dados.sys.country

    document.querySelector("#image").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + "@4x.png"
    document.querySelector("#desc").innerHTML = dados.weather[0].description


    document.querySelector("#main").innerHTML = Math.round(dados.main.temp) 

    document.querySelector("#min").innerHTML = Math.round(dados.main.temp_min)
    document.querySelector("#max").innerHTML = Math.round(dados.main.temp_max)

    document.querySelector("#feelInfo").innerHTML = Math.round(dados.main.feels_like) + '°C'
    document.querySelector("#humidityInfo").innerHTML = Math.round(dados.main.humidity)  + '%'
    document.querySelector("#windInfo").innerHTML = dados.wind.speed + "km/h"
}

async function weathersearch(city){
    clear()

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    key + 
    "&lang=pt_br" +
    "&units=metric"
    )

    .then(resposta => resposta.json())

    console.log(dados)

    update(dados)
}

function search() {
    let city = document.querySelector(".input").value
    
    weathersearch(city)

    let card = document.getElementById("card");
    card.classList.remove("hidden");
}

function clear() {
    document.getElementById('writecity').value = ""
}