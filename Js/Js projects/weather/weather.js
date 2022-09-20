const apikey = "f5efa0e2fe43b0f4afe99f914db615af";

let ampm = document.getElementById("ampm");
let time = document.getElementById("time");
let hourmin = document.getElementById("hourmin");
let day_date = document.getElementById("day_date");
let day_1 = document.getElementById("day1");
let day_2 = document.getElementById("day2");
let day_3 = document.getElementById("day3");
let day_4 = document.getElementById("day4");
let day_5 = document.getElementById("day5");
let day_6 = document.getElementById("day6");
let day_7 = document.getElementById("day7");
let country = document.getElementById("country");
let timezone = document.getElementById("timezone");
let date_container = document.getElementById("date_container");

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const hour = time.getHours();
  const date = time.getDate();
  const minutes = time.getMinutes();
  bgchanger(hour);
  if (hour > 12) {
    ampm.innerHTML = "PM";
  } 
  else {
    ampm.innerHTML = "AM";
  }
  if (hour > 12) {
    if (minutes < 10) {
      hourmin.innerHTML = hour - 12 + ":" + "0" + minutes;
    } else {
      hourmin.innerHTML = hour - 12 + ":" + minutes;
    }
  } else {
    if (minutes < 10) {
      hourmin.innerHTML = hour + ":" + "0" + minutes;
    } else {
      hourmin.innerHTML = hour + ":" + minutes;
    }
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  day_date.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);

function coordinates() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=f5efa0e2fe43b0f4afe99f914db615af`;

    let url2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=f5efa0e2fe43b0f4afe99f914db615af`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        displaydata(data);
      });

    fetch(url2)
      .then((response) => response.json())
      .then((info) => {
        console.log(info.list[2].weather[0].icon);
        displayforcast(info);
      });
  });
}

function displaydata(data) {

    country.innerHTML = `${data.coord.lat} N / ${data.coord.lon} E`;
    timezone.innerHTML = `${data.name}`;

  let { humidity, pressure, feels_like, temp } = data.main;
  others.innerHTML = 
  `<div class="currentdetails">
    <p>Humdity</p>
    <p>${humidity}%</p>
</div>
<div class="currentdetails"> 
    <p>Pressure</p>
    <p>${pressure}</p>
</div>
<div class="currentdetails"> 
    <p>Temp</p>
    <p>${temp} &#176;C</p>
</div>
<div class="currentdetails"> 
    <p>Feels Like</p>
    <p>${feels_like} &#176;C</p>
</div>`;
}

function displayforcast(info){
    for(let i = 2;i<9;i++){
        let {temp,humidity} = info.list[i].main;
        let dt_txt = info.list[i].dt_txt;
        let icon = info.list[i].weather[0].icon;
        if(i==2){
            day_1.innerHTML = `<div class="day">${dt_txt}</div>
            <img src = " http://openweathermap.org/img/wn/${icon}@2x.png" alt = 'weatherimage'>
            <div class="temp">Temp - ${temp} &#176;C</div>
            <div class="temp">Humidity - ${humidity}%</div>`
        }
        if(i==3){
            day_2.innerHTML = `<div class="day">${dt_txt}</div>
            <img src = " http://openweathermap.org/img/wn/${icon}@2x.png" alt = 'weatherimage'>
            <div class="temp">Temp - ${temp} &#176;C</div>
            <div class="temp">Humidity - ${humidity}%</div>`
        }
        if(i==4){
            day_3.innerHTML = `<div class="day">${dt_txt}</div>
            <img src = " http://openweathermap.org/img/wn/${icon}@2x.png" alt = 'weatherimage'>
            <div class="temp">Temp - ${temp} &#176;C</div>
            <div class="temp">Humidity - ${humidity}%</div>`
        }
        if(i==5){
            day_4.innerHTML = `<div class="day">${dt_txt}</div>
            <img src = " http://openweathermap.org/img/wn/${icon}@2x.png" alt = 'weatherimage'>
            <div class="temp">Temp - ${temp} &#176;C</div>
            <div class="temp">Humidity - ${humidity}%</div>`
        }
        if(i==6){
            day_5.innerHTML = `<div class="day">${dt_txt}</div>
            <img src = " http://openweathermap.org/img/wn/${icon}@2x.png" alt = 'weatherimage'>
            <div class="temp">Temp - ${temp} &#176;C</div>
            <div class="temp">Humidity - ${humidity}%</div>`
        }
        if(i==7){
            day_6.innerHTML = `<div class="day">${dt_txt}</div>
            <img src = " http://openweathermap.org/img/wn/${icon}@2x.png" alt = 'weatherimage'>
            <div class="temp">Temp - ${temp} &#176;C</div>
            <div class="temp">Humidity - ${humidity}%</div>`
        }
        if(i==8){
            day_7.innerHTML = `<div class="day">${dt_txt}</div>
            <img src = " http://openweathermap.org/img/wn/${icon}@2x.png" alt = 'weatherimage'>
            <div class="temp">Temp - ${temp} &#176;C</div>
            <div class="temp">Humidity - ${humidity}%</div>`
        }
    }
}

function bgchanger(hour){
    if(hour>=20){
        container.style.backgroundImage = `url('img/night.jpg')`;
        date_container.style.border = 'none';
        date_container.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
    else if(hour>=17 && hour<20){
        container.style.backgroundImage = `url('img/evening.jpg')`;
        date_container.style.border = 'none';
        date_container.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
    else{
        container.style.backgroundImage = `url('img/bgimage.jpg')`;
        date_container.style.border = '0px';
        date_container.style.borderRadius = '10px';
        date_container.style.backgroundColor = 'rgba(0, 0, 0, 0.48)';

    }
}

bgchanger();

coordinates();
