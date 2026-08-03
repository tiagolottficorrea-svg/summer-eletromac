const festa = new Date("August 8, 2026 20:00:00").getTime();


setInterval(function(){


let agora = new Date().getTime();


let distancia = festa - agora;



let dias = Math.floor(distancia/(1000*60*60*24));

let horas = Math.floor(
(distancia%(1000*60*60*24))/(1000*60*60)
);


let minutos = Math.floor(
(distancia%(1000*60*60))/(1000*60)
);


let segundos = Math.floor(
(distancia%(1000*60))/1000
);



document.getElementById("days").innerHTML=dias;

document.getElementById("hours").innerHTML=horas;

document.getElementById("minutes").innerHTML=minutos;

document.getElementById("seconds").innerHTML=segundos;



},1000);
