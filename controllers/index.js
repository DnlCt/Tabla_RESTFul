const express = require('express');

function home(req, res, next) {
    res.send('Menú de la caluladora:  GET = Suma | POST = Resta | PUT = Multiplicación | PATCH = División | DELETE = Potencia');
}

module.exports = {
    home
}