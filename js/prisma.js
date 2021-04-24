//Find me on map
function getLocation(){
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        document.getElementById("map").innerHTML = "Geolocation is not supported by this browser.";
      }
      function showPosition(position) {
     
        
        var location = {lat:position.coords.latitude , lng:position.coords.longitude };
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 20,
        center: location
    });
    var marker = new google.maps.Marker({
    position: location,
    map:map
})
}

}
//end of find me on map

//map implementation
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

function initMap() {
var location ={lat:27.69041308480009 , lng:85.34429478335618 };
var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: location
});
var marker =  new google.maps.Marker({
    position: location,
    map: map,
})
}
//watch

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM"

if (hour > 12) {
    hour -=12;
    am_pm = "PM";
}

if (hour == 0){
    hr = 12;
am_pm = "AM";
}

hour = hour < 10 ? "0" + hour:hour;
min = min <10 ? "0"  + mim:min;
sec = sec < 10? "0" +sec:sec;

let currentTime = hour + ":" +
min + ":" + sec + am_pm;
document.getElementById('clock').innerHTML = currentTime;
}
showTime();

//cookie
const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (ree, value) => {
        document.cookie = `${ree}=${value};`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'jdc_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {

    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
    }
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');
    acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
        }, 2000);
    }

};


//subscribe
const toggleModal = () => {
    document.querySelector('.modal').classList.toggle('hidden');
    document.querySelector('.overlay').classList.toggle('hidden');
}

document.querySelector('#change').addEventListener('click', toggleModal);
document.querySelector('.overlay').addEventListener('click', toggleModal);

document.querySelector('#suscribe-form')
  .addEventListener('click', (e) => {
  e.preventDefault();
  toggleModal();
  var email = document.getElementById('suscribe-email').value;
  alert("Congratulation! " + email + " you have been suscribed to our channel.");
});

document.querySelector('.modal-close span').addEventListener('click', toggleModal);
document.querySelector('.overlay').addEventListener('click', toggleModal);

//End of modal form pop up


 