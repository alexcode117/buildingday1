const { Client } = require('@hiveio/dhive');

// Crea una instancia del cliente, conectándose a un nodo público.
const client = new Client('https://api.hive.blog');

module.exports = client;