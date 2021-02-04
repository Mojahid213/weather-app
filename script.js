const searchbox = document.getElementById("serchBox");
const thebtn = document.getElementById("mrbutton");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const weatherStatus = document.getElementById("status");

const api = {
  key: "25c409b5305bbf2b2e042209aab594dc",
  base: "https://api.openweathermap.org/data/2.5/",
};

window.addEventListener('load',loadFucntion);
thebtn.addEventListener("click", getQuery);

function loadFucntion(){
    fetch(
        `${api.base}weather?q=` + searchbox.value + `&units=metric&appid=${api.key}`
      )
        .then((response) => response.json())
        .then((jsonn) => onloadApi(jsonn));
}

function getQuery() {
  fetch(
    `${api.base}weather?q=` + searchbox.value + `&units=metric&appid=${api.key}`
  )
    .then((response) => response.json())
    .then((data) => getTheApi(data));
}

function onloadApi(tata) {
    const cityName = tata.name;
    const country = tata.sys.country;
    const temprature = tata.main.temp;
    const status = tata.weather[0].main;
  
    city.innerText = cityName + " , " + country;
    temp.innerText = temprature;
    weatherStatus.innerText = status;
  
  }

function getTheApi(Data) {
  const cityName = Data.name;
  const country = Data.sys.country;
  const temprature = Data.main.temp;
  const status = Data.weather[0].main;

  city.innerText = cityName + " , " + country;
  temp.innerText = temprature;
  weatherStatus.innerText = status;

}
