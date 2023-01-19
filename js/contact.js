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

window.onload =  ()=>{
    if(userPrefersDark){
        swichInput.checked = true
        body.classList.toggle('dark');
    }
}

