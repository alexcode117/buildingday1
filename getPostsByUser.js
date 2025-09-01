const client = require('./client');

async function getPostsByUser(username) {
    try {
        // Get blog posts
        const discussions = await client.database.call("get_discussions_by_blog", [
        { tag: username, limit: 5 },
    ]);
    console.log(discussions); 
    } catch (error) {
        console.error('Error al obtener los posts del usuario:', error);
        return;
    }
       
};

getPostsByUser('joheredia21');