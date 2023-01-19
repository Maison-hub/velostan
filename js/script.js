"use strict";

let body = document.querySelector('body');
let arrowDown = document.querySelector(".arrowDown");

document.addEventListener('scroll', ()=>{
    arrowDown.classList.add("hide");
})

function convertStampDate(unixtimestamp){
    // Cette fonction permet de convertir un "timestamp" 
    // (voir l'attribut correspondant dans les fichiers JSON)
    // en une chaîne de caractères lisible 
    
    var months_arr = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    // Convert timestamp to milliseconds:
    var date = new Date(unixtimestamp*1000);
    // Year:
    var year = date.getFullYear();
    // Month:
    var month = months_arr[date.getMonth()];
    // Day:
    var day = date.getDate();
    // Hours:
    var hours = date.getHours();
    // Minutes:
    var minutes = "0" + date.getMinutes();
    // Seconds:
    var seconds = "0" + date.getSeconds();
    // String for displaying date and time in dd-MM-yyyy h:m:s format:
    var fulldate = day+' '+month+' '+year+' - '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return fulldate;
}

let url1="https://transport.data.gouv.fr/gbfs/nancy/station_information.json";
let url2="https://transport.data.gouv.fr/gbfs/nancy/station_status.json";

Promise.all([
    fetch(url1).then(response =>{
        if(! response.ok){
            alert("Service indiponnible veillez recharger la page")
            return "erreur"
        }
        return response.json()
    }),
    fetch(url2).then(response =>{
        if(! response.ok){
            alert("Service indiponnible veillez recharger la page")
            return "erreur"
        }
        return response.json()
    })
    ]).then((data) => {

        // c'est ici que vous accédez aux informations données par les deux JSON
      
        // data 1: objet contenant les informations de url1
        let stas=data[0].data.stations;
        // data 2: objet contenant les informations de url2
        let placeStations=data[1].data.stations;

        let selectOptions = document.querySelector(".mainSection .card .select .options") 

        for (let i =0; i < stas.length; i++){
            selectOptions.innerHTML += `<div class="selectOption" data-name="${stas[i].name}">${stas[i].name.slice(8, stas[i].name.length)}</div>`
        }

        // selectOptions.style.maxHeight = `${(document.querySelector('.selectOption').offsetHeight)}px`

        let totalDispo = 0;
        let totalLibre = 0 ; 
        
        for(let i =0; i<placeStations.length; i++){
            totalDispo += placeStations[i].num_bikes_available;
            totalLibre += placeStations[i].num_docks_available;
        }
        document.getElementById("totalLibre").innerHTML = totalLibre;
        document.getElementById("totalDispo").innerHTML = totalDispo;

        let total = document.getElementById("total");
        let libre = document.getElementById("libre");
        let dispo = document.getElementById("dispo");

        let address = document.getElementById('adress');

        let date = document.getElementById('dateMaj');

        let allOptions = document.querySelectorAll('.options div');

        let inputSelect = document.querySelector(".select .choice");
        let options = document.querySelector(".options");

        inputSelect.addEventListener("click", ()=>{
            options.classList.toggle("active");
            inputSelect.classList.toggle("open");
            window.scrollTo(0, inputSelect.offsetTop - 100);

        })

        body.addEventListener("click", event =>{
            let choix = event.target
            if(choix.classList.contains("choice") === false){
                options.classList.remove("active");
                inputSelect.classList.remove("open");
            }
            if (choix.classList.contains("selectOption") === false){
                return
            }
            options.classList.add("active");
            inputSelect.classList.add("open");
            inputSelect.value = choix.innerHTML;
            options.classList.remove("active");
            inputSelect.classList.remove("open");

            for (let i =0; i < stas.length; i++){
                if (choix.dataset.name === stas[i].name){
                    total.innerHTML = stas[i].capacity;
                    address.innerHTML = stas[i].address;
                    date.innerHTML = convertStampDate(data[1].last_updated);
                    lat = stas[i].lat;
                    lon = stas [i].lon;
                    macarte.setView([lat, lon], 17);
                    var marker = L.marker([lat, lon],{ icon: myIcon }).addTo(macarte);
                    marker.bindPopup(stas[i].name);
                    let stationId = stas[i].station_id;
                    for(let x = 0; x<placeStations.length; x++){
                        if (placeStations[x].station_id === stationId){
                            setColor(placeStations[x].num_docks_available, libre);
                            setColor(placeStations[x].num_bikes_available,dispo);
                        }
                    }
                }
            }
        })

        let optionsComplete = options.innerHTML;
        let choixIndex = 0;
        inputSelect.addEventListener('keyup', function(e){
            options.classList.add("active");
            inputSelect.classList.add("open");
            if(e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 13){
                choixIndex = 0;
            }
            let entree = inputSelect.value;
            let optionArray = Array.prototype.slice.call(allOptions);
            let result  = optionArray.filter(item => item.innerHTML.toLocaleLowerCase().includes(entree.toLocaleLowerCase()));
            let suggest = '';
            if (entree != ''){
                result.forEach((resultItem) =>{
                    suggest += `<div class="selectOption" data-name="${resultItem.dataset.name}">${resultItem.innerHTML}</div>`
                })
                options.innerHTML = suggest;
            }
            if(entree === ''){
                options.innerHTML = optionsComplete;
            }
            if(e.keyCode === 40){
                if (choixIndex <= allOptions.length-1){
                    choixIndex += 1;
                    selectArrow(choixIndex);
                }
            }
            if(e.keyCode === 38){
                if (choixIndex > 1){
                    choixIndex -= 1;
                    selectArrow(choixIndex);
                }
            }
            if(e.keyCode === 13){
                let arrowChoix = document.querySelector(`.mainSection .select .options div:nth-child(${choixIndex})`)
                options.classList.add("active");
                inputSelect.classList.add("open");
                inputSelect.value = arrowChoix.innerHTML;
                options.classList.remove("active");
                inputSelect.classList.remove("open");
    
                for (let i =0; i < stas.length; i++){
                    if (arrowChoix.dataset.name === stas[i].name){
                        total.innerHTML = stas[i].capacity;
                        address.innerHTML = stas[i].address;
                        lat = stas[i].lat;
                        lon = stas [i].lon;
                        macarte.setView([lat, lon], 17);
                        var marker = L.marker([lat, lon],{ icon: myIcon }).addTo(macarte);
                        marker.bindPopup(stas[i].name);
                        let stationId = stas[i].station_id;
                        for(let x = 0; x<placeStations.length; x++){
                            if (placeStations[x].station_id === stationId){
                                setColor(placeStations[x].num_docks_available, libre);
                                setColor(placeStations[x].num_bikes_available,dispo);
                            }
                        }
                    }
                }
                choixIndex = 0;
            }
        })

        function setColor(number, endroit){
            endroit.innerHTML = number;
            if(number <= 2){
                endroit.style.color = "#F02E2E";
                return
            }
            if( number > 2 && number <= 5){
                endroit.style.color = "#F08B2E";
                return
            }
            else{
                endroit.style.color = "#4FB19D";
                return
            }
        }


        function selectArrow(index){
            let selected = document.querySelector(`.mainSection .select .options div:nth-child(${index})`);
            selected.classList.add("selected");
            //const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
            selected.scrollIntoView({
            block: "nearest",
            inline: "start",
            behavior: "smooth"
            });
            //selected.focus({ preventScroll: true });
            return selected
        }
    });	

var myIcon = L.icon({
    iconUrl: "./images/icon/marker.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 0],
    popupAnchor: [0, 0],
});
// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 48.692054;
var lon = 6.184417;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 10);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    // Il est toujours bien de laisser le lien vers la source des données
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20,
    }).addTo(macarte);
}
//mode jour nuit
let roueParam = document.getElementById("param")

roueParam.addEventListener("click", ()=>{
    document.querySelector(".switchBox").classList.toggle('open');
})

const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let swich = document.querySelector('.switch');

let swichInput = document.querySelector('.switch input');

swichInput.addEventListener('change', ()=>{   
    body.classList.toggle('dark');
})

window.onload =  ()=>{
    if(userPrefersDark){
        swichInput.checked = true
        body.classList.toggle('dark');
    }
    initMap();
}
