const client = require('./client');

async function getFollowCounter(user) {
    try {
        const res = await client.database.call('get_follow_count', [user]);
        console.log(`El usuario ${user} tiene ${res.follower_count} seguidores y ${res.following_count} seguidos.`);
    } catch (error) {
        console.error('Error al obtener el contador de seguidores:', error);
    }
};

getFollowCounter('joheredia21'); // Reemplaza con el nombre de usuario