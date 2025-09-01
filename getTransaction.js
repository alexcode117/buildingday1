const client = require('./client');

async function getTransaction(txId) {
    try {
        const transaction = await client.database.getTransaction(txId);
        console.log(transaction);
    } catch (error) {
        console.error(error);
    }
}

getTransaction('b67312c60e3d5dbaf6924b0af09bbdc96109c00b'); // Reemplaza con el nombre de usuario real