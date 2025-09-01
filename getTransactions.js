const client = require('./client');

async function getTransactions(username) {
    try {
        // Llamada al método RPC `get_account_history` para obtener transacciones
        const history = await client.database.call('get_account_history', [username, -1, 100]);

        if (!history || history.length === 0) {
            console.log(`No se encontraron transacciones para el usuario: ${username}`);
            return [];
        }

        console.log(`Transacciones encontradas para ${username}:`);
        history.forEach(tx => {
            console.log(`- ID: ${tx[0]}, Fecha: ${new Date(tx[1].timestamp).toLocaleString()}, Tipo: ${tx[1].op[0]}`);
        });

        return history;

    } catch (error) {
        console.error('Error al obtener las transacciones:', error);
        return [];
    }
}

const username = 'testdevshive'; // Reemplaza con el nombre de usuario real
getTransactions(username);