const apikey = "d6604ccbf92fd9b4d76b2031a0cbcad4";


// appel API pour la geoloc

navigator.geolocation.getCurrentPosition(function(position){
    let apiCall = function(){
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}&units=metric&lang=fr`;
        fetch(url).then((response) => 
            response.json().then((data) => {
                document.querySelector("#city").innerHTML = "<i class='far fa-dot-circle'></i>" + data.name + ", " + data.sys.country;
                    if(Math.round(data.main.temp) < 15){
                        document.querySelector("#temp").innerHTML =  "<i class='fas fa-temperature-low'></i>" + Math.round(data.main.temp) + "°c";
                    }
                    else{
                        document.querySelector("#temp").innerHTML =  "<i class='fas fa-temperature-high'></i>" + Math.round(data.main.temp) + "°c";
                    }
                document.querySelector("#humidity").innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + "%";
                document.querySelector("#wind").innerHTML = "<i class='fas fa-location-arrow'></i>" + data.wind.speed + " km/h";
                document.querySelector("#press").innerHTML = "<i class='fas fa-tachometer-alt'></i>" + data.main.pressure + " hPa";
                document.querySelector("#meteo").innerHTML = "" + data.weather[0].description;
                    
                // Gestion des icons par condition
                    if(data.weather[0].description == 'couvert'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'ciel dégagé'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-sun'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'nuageux'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'peu nuageux'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-sun'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'partiellement nuageux'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-sun'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'brume'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-smog'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'brouillard'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-smog'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'chutes de neige'){
                            document.querySelector("#meteo").innerHTML = "<i class='far fa-snowflake'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'légères chutes de neige'){
                            document.querySelector("#meteo").innerHTML = "<i class='far fa-snowflake'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'pluie très fine'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'pluie fine'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>" + data.weather[0].description;
                    }   else if(data.weather[0].description == 'pluie modérée'){
                            document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>" + data.weather[0].description;
                    }
                    else{
                        console.log("ERROR LOGO WEATHER"); 
                    }

                // Gestion du background par condition
                    if(data.weather[0].description == 'couvert'){
                        document.body.style.backgroundImage = "url(../images/nature.jpg)";
                    }   else if(data.weather[0].description == 'nuageux'){
                            document.body.style.backgroundImage = "url(../images/nature.jpg)";
                    }   else if(data.weather[0].description == 'ciel dégagé'){
                            document.body.style.backgroundImage = "url(../images/cieldegage.jpg)";
                    }   else if(data.weather[0].description == 'peu nuageux'){
                            document.body.style.backgroundImage = "url(../images/peunuageux.jpg)";
                    }   else if(data.weather[0].description == 'partiellement nuageux'){
                            document.body.style.backgroundImage = "url(../images/peunuageux.jpg)";
                    }   else if(data.weather[0].description == 'brume'){
                            document.body.style.backgroundImage = "url(../images/brume.jpg)";
                    }   else if(data.weather[0].description == 'brouillard'){
                            document.body.style.backgroundImage = "url(../images/brume.jpg)";
                    }   else if(data.weather[0].description == 'chutes de neige'){
                            document.body.style.backgroundImage = "url(../images/neige.jpg)";
                    }   else if(data.weather[0].description == 'légères chutes de neige'){
                            document.body.style.backgroundImage = "url(../images/neige.jpg)";
                    }   else if(data.weather[0].description == 'pluie très fine'){
                            document.body.style.backgroundImage = "url(../images/pluie.jpg)";
                    }   else if(data.weather[0].description == 'pluie fine'){
                            document.body.style.backgroundImage = "url(../images/pluie.jpg)";
                    }   else if(data.weather[0].description == 'pluie modérée'){
                        document.body.style.backgroundImage = "url(../images/pluie.jpg)";
                    }
                    else{
                        console.log("ERROR BACKGROUND IMAGE"); 
                    }
            })
        ).catch(err => alert("ERROR : Please active your location ! " + console.log(err)));
    }()
});

// appel API openweather avec Ville en paramètre de fonction

let apiCall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`;
    fetch(url).then((response) => 
        response.json().then((data) => {
            document.querySelector("#city").innerHTML = "<i class='fas fa-city'></i>" + data.name + ", " + data.sys.country;
                if(Math.round(data.main.temp) < 15){
                    document.querySelector("#temp").innerHTML =  "<i class='fas fa-temperature-low'></i>" + Math.round(data.main.temp) + "°c";
                }
                else{
                    document.querySelector("#temp").innerHTML =  "<i class='fas fa-temperature-high'></i>" + Math.round(data.main.temp) + "°c";
                }
            document.querySelector("#humidity").innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + "%";
            document.querySelector("#wind").innerHTML = "<i class='fas fa-location-arrow'></i>" + data.wind.speed + " km/h";
            document.querySelector("#press").innerHTML = "<i class='fas fa-tachometer-alt'></i>" + data.main.pressure + " hPa";
            document.querySelector("#meteo").innerHTML = "" + data.weather[0].description;

            // Gestion des icons par condition
                if(data.weather[0].description == 'couvert'){
                    document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'ciel dégagé'){
                        document.querySelector("#meteo").innerHTML = "<i class='fas fa-sun'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'nuageux'){
                        document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'peu nuageux'){
                        document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-sun'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'partiellement nuageux'){
                        document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-sun'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'brume'){
                        document.querySelector("#meteo").innerHTML = "<i class='fas fa-smog'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'brouillard'){
                        document.querySelector("#meteo").innerHTML = "<i class='fas fa-smog'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'chutes de neige'){
                        document.querySelector("#meteo").innerHTML = "<i class='far fa-snowflake'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'légères chutes de neige'){
                        document.querySelector("#meteo").innerHTML = "<i class='far fa-snowflake'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'pluie très fine'){
                        document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'pluie fine'){
                        document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>" + data.weather[0].description;
                }   else if(data.weather[0].description == 'pluie modérée'){
                        document.querySelector("#meteo").innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>" + data.weather[0].description;
                }
                else{
                console.log("ERROR LOGO WEATHER"); 
                }

            // Gestion du background par condition
                if(data.weather[0].description == 'couvert'){
                    document.body.style.backgroundImage = "url(../images/nature.jpg)";
                }   else if(data.weather[0].description == 'nuageux'){
                        document.body.style.backgroundImage = "url(../images/nature.jpg)";
                }   else if(data.weather[0].description == 'ciel dégagé'){
                        document.body.style.backgroundImage = "url(../images/cieldegage.jpg)";
                }   else if(data.weather[0].description == 'peu nuageux'){
                        document.body.style.backgroundImage = "url(../images/peunuageux.jpg)";
                }   else if(data.weather[0].description == 'partiellement nuageux'){
                        document.body.style.backgroundImage = "url(../images/peunuageux.jpg)";
                }   else if(data.weather[0].description == 'brume'){
                        document.body.style.backgroundImage = "url(../images/brume.jpg)";
                }   else if(data.weather[0].description == 'brouillard'){
                        document.body.style.backgroundImage = "url(../images/brume.jpg)";
                }   else if(data.weather[0].description == 'chutes de neige'){
                        document.body.style.backgroundImage = "url(../images/neige.jpg)";
                }   else if(data.weather[0].description == 'légères chutes de neige'){
                        document.body.style.backgroundImage = "url(../images/neige.jpg)";
                }   else if(data.weather[0].description == 'pluie très fine'){
                        document.body.style.backgroundImage = "url(../images/pluie.jpg)";
                }   else if(data.weather[0].description == 'pluie fine'){
                        document.body.style.backgroundImage = "url(../images/pluie.jpg)";
                }   else if(data.weather[0].description == 'pluie modérée'){
                    document.body.style.backgroundImage = "url(../images/pluie.jpg)";
                }
                else{
                    console.log("ERROR BACKGROUND IMAGE"); 
                }
        })
    ).catch(err => alert("Error : Please enter a valid city name ! " + console.log(err)));
};


// ecouteur d'evenement sur la soumission du formulaire

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    let ville = document.querySelector("#inputCity").value;
    apiCall(ville);
});


// Système d'autocomplétion pour les grandes métropoles

const base= ['Paris', 'New York', 'Londres', 'Berlin', 'Madrid', 'Amsterdam', 'Tokyo', 'Pékin', 'Los Angeles',
'Moscou', 'Rupt-sur-Moselle'];

function check(field){
  let name = field.value;
  let l = name.length;
  let idx = base.indexOf(name);
  if(idx == -1){
    var tempo = base.filter(function(x){
      return x.substr(0, l) == name;
    });
    if(tempo.length != 1) return;
    name = tempo[0];	
    field.value = name;
  }
};









