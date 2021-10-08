window.addEventListener('load', ()=>{
    let logitud;
    let latitude;
    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
    let ubicacion = document.getElementById('ubicacion');
    let iconoAnimated = document.getElementById('icono-animated');
    let vientoVelocidad = document.getElementById('viento-velocidad');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            //console.log(position);
            //console.log(position.coords.latitude);
            ApiKey = 'f81d42bb8bebbcf407e172ee78e61da0';
            logitud = position.coords.longitude;
            latitude = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${logitud}&units=metric&appid=${ApiKey}`;
            //console.log(url);
            fetch(url)
            .then( response => {
                return response.json()
            })
            .then( data => {
                //console.log(data.main.temp)
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp}°C`
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc
                ubicacion.textContent = data.name
                vientoVelocidad.textContent = `${data.wind.speed} m/s`
                clima = data.weather[0].main
                switch (clima) {
                    case 'Clear':
                        iconoAnimated.src = 'animated/day.svg'    
                    break;
                    case 'Clouds':
                        iconoAnimated.src = 'animated/cloudy-day-1.svg'    
                    break;
                    case 'Thunderstorm':
                        iconoAnimated.src = 'animated/thunder.svg'    
                    break;
                    case 'Drizzle':
                        iconoAnimated.src = 'animated/rainy-2.svg'    
                    break;
                    case 'Rain':
                        iconoAnimated.src = 'animated/rainy-7.svg'    
                    break;
                    case 'Snow':
                        iconoAnimated.src = 'animated/snowy-6.svg'    
                    break;
                    case 'Atmosphere':
                        iconoAnimated.src = 'animated/weather.svg'    
                    break;
                    default:
                        iconoAnimated.src = 'animated/cloudy-day-1.svg'
                    break;
                }

            })
            .catch( error => {
                console.log(error)
            })
        });
    }
});


window.addEventListener('load', ()=>{
    let horaHTML = document.getElementById('hora');
    let minutosHTML = document.getElementById('minutos');
    let segundosHTML = document.getElementById('segundos');

    const mostrarHora = ()=>{
        let fecha = new Date;
        let hora = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        horaHTML.textContent = String(hora).padStart(2,"0");
        minutosHTML.textContent = String(minutos).padStart(2,"0");
        segundosHTML.textContent = String(segundos).padStart(2,"0");

        setTimeout(mostrarHora,1000);
    }

    mostrarHora();
});