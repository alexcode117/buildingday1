const test = require('node:test');
const client = require('./client');

async function testCall() {
    try {
        const result = await client.database.call('get_dynamic_global_properties', []);
        console.log(result);
    } catch (error) {
        console.error('Error calling get_dynamic_global_properties:', error);
    }
};

testCall();
