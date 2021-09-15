const express = require('express');

function suma(req, res, next) {
    var n1 = parseFloat(req.params.n1);
    var n2 = parseFloat(req.params.n2);
    var result = n1+n2;
    res.send(`${n1} + ${n2} = ${result}`);
}

function resta(req, res, next) {
    var n1 = parseFloat(req.params.n1);
    var n2 = parseFloat(req.params.n2);
    var result = n1-n2;
    res.send(`${n1} - ${n2} = ${result}`);
}

function multiplicacion(req, res, next) {
    var n1 = parseFloat(req.body.n1);
    var n2 = parseFloat(req.body.n2);
    var result = n1*n2;
    res.send(`${n1} * ${n2} = ${result}`);
}

function division(req, res, next) {
    var n1 = parseFloat(req.body.n1);
    var n2 = parseFloat(req.body.n2);
    if(n2 == 0){
        res.send('División entre 0 no es valida');
    } else {
        let result = n1/n2;
        res.send(`${n1} / ${n2} = ${result}`);
    }
}

function potencia(req, res, next) {
    var n1 = parseFloat(req.body.n1);
    var n2 = parseFloat(req.body.n2);
    var result = Math.pow(n1, n2);
    res.send(`${n1} ^ ${n2} = ${result}`);
}

module.exports = {
    suma, resta, multiplicacion, division, potencia
}
