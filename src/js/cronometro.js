//Autor: Caique Sousa

// Cronometro São Carlos
let dataFinal = new Date("Sep 25, 2019 23:59:00").getTime();

let crono = setInterval(function() {

    let dataAtual = new Date().getTime();
    let distance = dataFinal - dataAtual;
    let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro").innerHTML = dias + "d " + horas + "h "
    // + minutos + "m ";
    
    if (distance < 0) {
        
    clearInterval(crono);
    document.getElementById("cronometrozero").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Ribeirão Preto
let dataFinal2 = new Date("Sep 25, 2019 23:59:00").getTime();

let crono2 = setInterval(function() {

    let dataAtual2 = new Date().getTime();
    let distance2 = dataFinal2 - dataAtual2;
    let dias2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    let horas2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro2").innerHTML = dias2 + "d " + horas2 + "h "
    // + minutos2 + "m ";

    if (distance2 < 0) {
    clearInterval(crono2);
    document.getElementById("cronometrozero2").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Franca
let dataFinal3 = new Date("Sep 26, 2019 23:59:00").getTime();

let crono3 = setInterval(function() {

    let dataAtual3 = new Date().getTime();
    let distance3 = dataFinal3 - dataAtual3;
    let dias3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    let horas3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro3").innerHTML = dias3 + "d " + horas3 + "h "
    // + minutos3 + "m ";

    if (distance3 < 0) {
    clearInterval(crono3);
    document.getElementById("cronometrozero3").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Barretos
let dataFinal4 = new Date("Oct 01, 2019 23:59:00").getTime();

let crono4 = setInterval(function() {

    let dataAtual4 = new Date().getTime();
    let distance4 = dataFinal4 - dataAtual4;
    
    let dias4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
    let horas4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro4").innerHTML = dias4 + "d " + horas4 + "h "
    // + minutos4 + "m ";
    
    if (distance4 < 0) {
    clearInterval(crono4);
    document.getElementById("cronometrozero4").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro S.J do Rio Preto
let dataFinal5 = new Date("Sep 29, 2019 23:59:00").getTime();

let crono5 = setInterval(function() {

    let dataAtual5 = new Date().getTime();
    let distance5 = dataFinal5 - dataAtual5;
    let dias5 = Math.floor(distance5 / (1000 * 60 * 60 * 24));
    let horas5 = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos5 = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro5").innerHTML = dias5 + "d " + horas5 + "h "
    // + minutos5 + "m ";
    
    if (distance5 < 0) {
    clearInterval(crono5);
    document.getElementById("cronometrozero5").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Araçatuba
let dataFinal6 = new Date("Oct 03, 2019 23:59:00").getTime();

let crono6 = setInterval(function() {

    let dataAtual6 = new Date().getTime();
    let distance6 = dataFinal6 - dataAtual6;
    let dias6 = Math.floor(distance6 / (1000 * 60 * 60 * 24));
    let horas6 = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos6 = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro6").innerHTML = dias6 + "d " + horas6 + "h "
    // + minutos6 + "m ";
    
    if (distance6 < 0) {
    clearInterval(crono6);
    document.getElementById("cronometrozero6").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Presidente Prudente
let dataFinal7 = new Date("Oct 03, 2019 23:59:00").getTime();

let crono7 = setInterval(function() {

    let dataAtual7 = new Date().getTime();
    let distance7 = dataFinal7 - dataAtual7;
    let dias7 = Math.floor(distance7 / (1000 * 60 * 60 * 24));
    let horas7 = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos7 = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro7").innerHTML = dias7 + "d " + horas7 + "h "
    // + minutos7 + "m ";
    
    if (distance7 < 0) {
    clearInterval(crono7);
    document.getElementById("cronometrozero7").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Marília
let dataFinal8 = new Date("Oct 03, 2019 23:59:00").getTime();

let crono8 = setInterval(function() {

    let dataAtual8 = new Date().getTime();
    let distance8 = dataFinal8 - dataAtual8;
    let dias8 = Math.floor(distance8 / (1000 * 60 * 60 * 24));
    let horas8 = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos8 = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro8").innerHTML = dias8 + "d " + horas8 + "h "
    // + minutos8 + "m ";
    
    if (distance8 < 0) {
    clearInterval(crono8);
    document.getElementById("cronometrozero8").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Bauru
let dataFinal9 = new Date("Oct 01, 2019 23:59:00").getTime();

let crono9 = setInterval(function() {

    let dataAtual9 = new Date().getTime();
    let distance9 = dataFinal9 - dataAtual9;
    let dias9 = Math.floor(distance9 / (1000 * 60 * 60 * 24));
    let horas9 = Math.floor((distance9 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos9 = Math.floor((distance9 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro9").innerHTML = dias9 + "d " + horas9 + "h "
    // + minutos9 + "m ";
    
    if (distance9 < 0) {
    clearInterval(crono9);
    document.getElementById("cronometrozero9").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Sorocaba
let dataFinal10 = new Date("Oct 03, 2019 23:59:00").getTime();

let crono10 = setInterval(function() {

    let dataAtual10 = new Date().getTime();
    let distance10 = dataFinal10 - dataAtual10;
    let dias10 = Math.floor(distance10 / (1000 * 60 * 60 * 24));
    let horas10 = Math.floor((distance10 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos10 = Math.floor((distance10 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro10").innerHTML = dias10 + "d " + horas10 + "h "
    // + minutos10 + "m ";

    if (distance10 < 0) {
    clearInterval(crono10);
    document.getElementById("cronometrozero10").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Campinas
let dataFinal11 = new Date("Oct 03, 2019 23:59:00").getTime();

let crono11 = setInterval(function() {

    let dataAtual11 = new Date().getTime();
    let distance11 = dataFinal11 - dataAtual11;
    let dias11 = Math.floor(distance11 / (1000 * 60 * 60 * 24));
    let horas11 = Math.floor((distance11 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos11 = Math.floor((distance11 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro11").innerHTML = dias11 + "d " + horas11 + "h "
    // + minutos11 + "m ";
    
    if (distance11 < 0) {
    clearInterval(crono11);
    document.getElementById("cronometrozero11").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Taubaté
let dataFinal12 = new Date("Oct 03, 2019 23:59:00").getTime();

let crono12 = setInterval(function() {

    let dataAtual12 = new Date().getTime();
    let distance12 = dataFinal12 - dataAtual12;
    let dias12 = Math.floor(distance12 / (1000 * 60 * 60 * 24));
    let horas12 = Math.floor((distance12 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos12 = Math.floor((distance12 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro12").innerHTML = dias12 + "d " + horas12 + "h "
    // + minutos12 + "m ";
    
    if (distance12 < 0) {
    clearInterval(crono12);
    document.getElementById("cronometrozero12").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Santos
let dataFinal13 = new Date("Oct 07, 2019 23:59:00").getTime();

let crono13 = setInterval(function() {

    let dataAtual13 = new Date().getTime();
    let distance13 = dataFinal13 - dataAtual13;
    let dias13 = Math.floor(distance13 / (1000 * 60 * 60 * 24));
    let horas13 = Math.floor((distance13 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos13 = Math.floor((distance13 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro13").innerHTML = dias13 + "d " + horas13 + "h "
    // + minutos13 + "m ";
    
    if (distance13 < 0) {
    clearInterval(crono13);
    document.getElementById("cronometrozero13").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro Registro
let dataFinal14 = new Date("Oct 07, 2019 23:59:00").getTime();

let crono14 = setInterval(function() {

    let dataAtual14 = new Date().getTime();
    let distance14 = dataFinal14 - dataAtual14;
    let dias14 = Math.floor(distance14 / (1000 * 60 * 60 * 24));
    let horas14 = Math.floor((distance14 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos14 = Math.floor((distance14 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro14").innerHTML = dias14 + "d " + horas14 + "h "
    // + minutos14 + "m ";
    
    if (distance14 < 0) {
    clearInterval(crono14);
    document.getElementById("cronometrozero14").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

// Cronometro São Bernardo
let dataFinal15 = new Date("Oct 07, 2019 23:59:00").getTime();

let crono15 = setInterval(function() {

    let dataAtual15 = new Date().getTime();
    let distance15 = dataFinal15 - dataAtual15;
    let dias15 = Math.floor(distance15 / (1000 * 60 * 60 * 24));
    let horas15 = Math.floor((distance15 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos15 = Math.floor((distance15 % (1000 * 60 * 60)) / (1000 * 60));
    
    // document.getElementById("cronometro15").innerHTML = dias15 + "d " + horas15 + "h "
    // + minutos15 + "m ";
    
    if (distance15 < 0) {
    clearInterval(crono15);
    document.getElementById("cronometrozero15").innerHTML = "Inscrições encerrada para sua Macrorregião";
    }
}, 1000);

