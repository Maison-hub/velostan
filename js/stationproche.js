"use strict";

let body = document.querySelector('body');

let roueParam = document.getElementById("param");

roueParam.addEventListener("click", ()=>{
    document.querySelector(".switchBox").classList.toggle('open');
})

const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let swich = document.querySelector('.switch');

let swichInput = document.querySelector('.switch input');

swichInput.addEventListener('change', ()=>{   
    body.classList.toggle('dark');
})

let data = `{"data":
{"stations":
[
    {"address":"au milieu du boulevard des Nations à Vandoeuvre dans le prolongement de l’arrêt de bus Nations devant le centre commercial","capacity":15,"lat":48.662356,"lon":6.173442,"name":"00030 - NATIONS (CB)","station_id":"30"},
    {"address":"Place du Vélodrome","capacity":24,"lat":48.666721193896,"lon":6.16661978303466,"name":"00029 - VELODROME (CB)","station_id":"29"},
    {"address":"Angle rue Pierre FOURIER et rue des Dominicains","capacity":25,"lat":48.6924654452072,"lon":6.18340055389445,"name":"00001 - DOMINICAINS - FOURIER (CB)","station_id":"1"},
    {"address":"9 rue Paul Déroulède","capacity":15,"lat":48.684954,"lon":6.154908,"name":"00033 - LAXOU MAIRIE (CB)","station_id":"33"},
    {"address":"2 rue Emilie du Châtelet","capacity":16,"lat":48.695420147586,"lon":6.19522861327582,"name":"00006 - LES 2 RIVES (CB)","station_id":"6"},
    {"address":"Angle rue Pierre CHALNOT et rue de la Commanderie","capacity":18,"lat":48.6869197241039,"lon":6.17234789239391,"name":"00019 - COMMANDERIE - CHALNOT","station_id":"19"},
    {"address":"Angle rue Henri BAZIN et quai Sainte-Catherine","capacity":16,"lat":48.6954870039528,"lon":6.1906794896667,"name":"00015 - PORT STE CATHERINE","station_id":"15"},
    {"address":"Boulevard d'Haussonville","capacity":15,"lat":48.67227619793021,"lon":6.165710709115886,"name":"00028 - MARCHÉ D'HAUSSONVILLE","station_id":"28"},{"address":"71 rue Saint-Nicolas","capacity":16,"lat":48.688015,"lon":6.187451,"name":"00013 - SAINT NICOLAS - CHARLES III","station_id":"13"},
    {"address":"Angle rue Saint-Dizier - Rue du Dr SCHMITT","capacity":18,"lat":48.6891733257851,"lon":6.18390463043762,"name":"00004 - MARCHE CENTRAL (CB)","station_id":"4"},{"address":"Angle rue Saint-Léon - Esplanade Saint-Léon","capacity":20,"lat":48.689560111075,"lon":6.17251545229862,"name":"00018 - GARE SAINT LEON (CB)","station_id":"18"},
    {"address":"Angle rue Saint-Thiebaut et rue du Grand Rabbin HAGUENAUER","capacity":22,"lat":48.6886141256403,"lon":6.17950010441818,"name":"00012 - ST SEBASTIEN - ST THIEBAUT (CB)","station_id":"12"},{"address":"Angle rue Molitor et rue Foller","capacity":16,"lat":48.6858574026886,"lon":6.19290171469907,"name":"00022 - HOPITAL ST JULIEN","station_id":"22"},
    {"address":"45 avenue du Maréchal de Lattre de Tassigny","capacity":20,"lat":48.6833502130976,"lon":6.19029660801914,"name":"00021 - HOPITAL CENTRAL (CB)","station_id":"21"},{"address":"Rue Drouin - Face au n°2","capacity":16,"lat":48.6921301,"lon":6.1872695,"name":"00005 - PLACE COLONEL DRIANT (CB)","station_id":"5"},{"address":"Boulevard Foch","capacity":28,"lat":48.6894760345252,"lon":6.17650546239553,"name":"00011 - MAZAGRAN - FOCH (CB)","station_id":"11"},
    {"address":"Place Godefroy de Bouillon","capacity":19,"lat":48.6928180794454,"lon":6.16860978784457,"name":"00014 - FAC DE LETTRES (CB)","station_id":"14"},{"address":"Angle rue du Haut Bourgeois et place des Bourgets","capacity":20,"lat":48.6984724451821,"lon":6.17798553705909,"name":"00016 - PORTE DE LA CRAFFE (CB)","station_id":"16"},
    {"address":"Place Barrois","capacity":17,"lat":48.69950232851108,"lon":6.204735639873545,"name":"00009 - PLACE BARROIS (CB)","station_id":"9"},
    {"address":"Square Waldstetten  en face du 6 rue Maurice Barrès MALZEVILLE","capacity":15,"lat":48.707187,"lon":6.185524,"name":"00034 - MALZEVILLE (CB)","station_id":"34"},
    {"address":"Rue Stanislas - Face au n°68","capacity":28,"lat":48.6919579483934,"lon":6.17851021950761,"name":"00003 - PLACE DE DOMBASLE (CB)","station_id":"3"},{"address":"Rue des 3 Epis Baudricourt","capacity":15,"lat":48.675248491826174,"lon":6.162844844269929,"name":"00026 - BAUDRICOURT HAUSSONVILLE","station_id":"26"},
    {"address":"rue du faubourg des 3 Maisons - Angle boulevard Charles V","capacity":23,"lat":48.701365,"lon":6.176824,"name":"00024 - 3 MAISONS - CHARLES V (CB)","station_id":"24"},{"address":"Promenade des Canaux","capacity":16,"lat":48.6927939742599,"lon":6.19628435757015,"name":"00023 - PROMENADE DES CANAUX","station_id":"23"},
    {"address":"Place du Colonel Fabien","capacity":20,"lat":48.6952351,"lon":6.1798109,"name":"00007 - PLACE ST EPVRE  (CB)","station_id":"7"},{"address":"en face du 1 Boulevard Charlemagne Nancy","capacity":15,"lat":48.685497,"lon":6.161015,"name":"00032 - MEDREVILLE (CB)","station_id":"32"},{"address":"Angle avenue du Général Leclerc et rue du Maréchal De Lattre de Tassigny","capacity":15,"lat":48.684781,"lon":6.187631,"name":"00020 - PLACE DES VOSGES","station_id":"20"},
    {"address":"en face du 119 rue du Sergent Blandan","capacity":15,"lat":48.674665,"lon":6.170655,"name":"00031 - ARTEM (CB)","station_id":"31"},{"address":"Angle rue Saint-Michel et cours Léopold","capacity":18,"lat":48.6956140662607,"lon":6.17676840786255,"name":"00008 - COURS LEOPOLD - SAINT MICHEL (CB)","station_id":"8"},{"address":"Rue Mazagran","capacity":30,"lat":48.69037,"lon":6.175677,"name":"00010 - GARE THIERS (CB)","station_id":"10"},
    {"address":"Angle Place de la Carrière et rue des Maréchaux","capacity":16,"lat":48.6945981637388,"lon":6.18229408637817,"name":"00002 - PLACE DE LA CARRIERE (CB)","station_id":"2"},
    {"address":"Place de la Commanderie - Face au n°13","capacity":18,"lat":48.6859179816784,"lon":6.1674218161464,"name":"00025 - PLACE COMMANDERIE","station_id":"25"},{"address":"27 rue Baron Louis - Angle quai Claude le Lorrain","capacity":15,"lat":48.6957176856775,"lon":6.17133838702303,"name":"00017 - CONSERVATOIRE - MANUFACTURE","station_id":"17"}]},"last_updated":1670926680,"ttl":60,"version":"1.1"}`

let station =JSON.parse(data);
let stas = station.data.stations;

let url="https://transport.data.gouv.fr/gbfs/nancy/station_status.json"


var marker;

fetch(url)
    .then(response => response.json())
    .then((data2) => { 
        var infostas = data2.data.stations;
        var markerPlan = L.icon({
            iconUrl: "./images/icon/marker.svg",
            iconSize: [40, 40],
            iconAnchor: [22, 55],
            popupAnchor: [-3, -50],
        });
        for(let i = 0; i<stations.length; i++) {
            marker = L.marker([stations[i][1], stations[i][2]],{ icon: markerPlan } ).addTo(macarte); 
            marker.bindPopup("<strong>" + stations[i][0] + "</strong><br></br>" + infostas[i].num_docks_available + " places disponibles<br></br>" + infostas[i].num_bikes_available + " vélos disponibles");
        } 
    })


var macarte = null;
	
// Nous initialisons une liste de marqueurs




var stations = [];


for (let i = 0; i < stas.length; i++){
        stations.push([stas[i].name,stas[i].lat,stas[i].lon]);
        }

// Fonction d'initialisation de la carte
function initMap() {
        // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
        macarte = L.map('map').setView([48.682797,6.175], 13);
        // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            // Il est toujours bien de laisser le lien vers la source des données
            attribution: 'données © OpenStreetMap/ODbL - rendu OSM France',
            minZoom: 1,
            maxZoom: 20
        }).addTo(macarte);
    }


window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap(); 
    if(userPrefersDark){
        swichInput.checked = true
        body.classList.toggle('dark');
    }
    let heroSection = document.querySelector(".heroSection");
    let headerSize = document.querySelector("header").clientHeight;
    heroSection.style.height = `calc(100vh - ${headerSize}px)`;
    document.getElementById("map").style.height= `calc(100vh - ${headerSize}px)`;
};

window.onresize = function(){
    let heroSection = document.querySelector(".heroSection");
    let headerSize = document.querySelector("header").clientHeight;
    heroSection.style.height = `calc(100vh - ${headerSize}px)`;
    document.getElementById("map").style.height= `calc(100vh - ${headerSize}px)`;
}



    
var lat ;
var lon ;
var marker2;
let boutton= document.getElementById("boutloc");

boutton.addEventListener("click", ()=>{
    if(marker2) marker2.remove();
    function maPosition(position) {
        lat +=position.coords.latitude;
        lon +=position.coords.longitude;
        document.getElementById("longitude").value = position.coords.longitude;
        document.getElementById("latitude").value = position.coords.latitude;
        var myIcon = L.icon({
            iconUrl: "./images/icon/markerMoi.svg",
            iconSize: [40, 40],
            iconAnchor: [22, 55],
            popupAnchor: [-3, -50],
        });
        marker2 = L.marker([position.coords.latitude, position.coords.longitude], { icon: myIcon }).addTo(macarte);
        marker2.bindPopup("<strong>Moi</strong>");
        macarte.setView([position.coords.latitude, position.coords.longitude], 16);
        statplusproche();
      }
      
    if(navigator.geolocation);
        navigator.geolocation.getCurrentPosition(maPosition);
        
})

let input = document.querySelectorAll(".coo");

input.forEach(truc=>{
    truc.addEventListener("click", eventHandler);
    truc.addEventListener("keyup", eventHandler);
});

function eventHandler() {
    if(marker2) marker2.remove();
    var myIcon = L.icon({
        iconUrl: "./images/icon/markerMoi.svg",
        iconSize: [40, 40],
        iconAnchor: [22, 55],
        popupAnchor: [-3, -50],
    });
    lat = parseFloat(document.getElementById("latitude").value);
    lon = parseFloat(document.getElementById("longitude").value);
    marker2 = L.marker([lat,lon], { icon: myIcon}).addTo(macarte);
    marker2.bindPopup("<strong>Moi</strong>");
    macarte.setView([lat, lon], 16);
    statplusproche();
}


function statplusproche(){
    var malat = parseFloat(document.getElementById("latitude").value);
    var malon = parseFloat(document.getElementById("longitude").value);
    var comparestation = (stations[0][1] - malat)**2+(stations[0][2] - malon)**2;
    var stationlaplusproche = stations[0][0];
    for (let y = 1; y<stations.length; y++){
        if ((stations[y][1] - malat)**2 + (stations[y][2] - malon)**2 < comparestation){
            comparestation = (stations[y][1] - malat)**2 + (stations[y][2] - malon)**2;
            stationlaplusproche = stations[y][0];
        }
    }
    document.getElementById("stationproche").innerHTML = stationlaplusproche.slice(8, stationlaplusproche.length);
    document.querySelector(".bottomSide").classList.add("open");
}