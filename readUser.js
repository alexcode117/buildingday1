const client = require('./client');

const usernames = ['joheredia21'];

async function printAccountInfo() {
    try {
        const accounts = await client.database.getAccounts(usernames);
        for (const account of accounts) {
            console.log(account)
            //console.log(`--- Cuenta: ${account.name} ---`);
            //console.log(`Balance HIVE: ${account.balance}`);
            //console.log(`Reputación: ${account.reputation}`);
            // Nota: Para obtener el HP, necesitas usar un método de utilidad del cliente.
        }
    } catch (error) {
        console.error(error);
    }
}

printAccountInfo();