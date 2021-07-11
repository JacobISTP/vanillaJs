function onGeoSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const API_KEY = "cb4d0856a2396ac73e311d051a8d03be";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric `;
    fetch(url).then(response => response.json()).then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${Math.floor(data.main.temp * 10) / 10}ºC`;
    });
}

function onGeoError(position) {
    alert("위치를 찾을 수 없어 날씨정보를 불러오지 못했습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);