const client = require('./client');

async function readPostData(author, permlink) {
    try {
        console.log(`Buscando el post de ${author} con permlink: ${permlink}`);
        
        // Llamada al método RPC `get_content`.
        const post = await client.database.call('get_content', [author, permlink])

        // Verificamos si el post existe. Si no, devuelve un objeto vacío.
        if (!post.author) {
            console.log('El post no fue encontrado.');
            return null;
        }

        console.log('--- Post encontrado ---');
        console.log('Título:', post.title);
        console.log('Cuerpo (primeras 200 letras):', post.body.substring(0, 200) + '...');
        console.log('URL:', post.url);
        console.log('Valor pendiente de pago:', post.pending_payout_value);
        console.log('Número de votos:', post.active_votes.length);
        console.log('Metadatos (etiquetas, etc.):', post.json_metadata);

        // Retornamos el objeto completo para su uso posterior.
        return post;

    } catch (error) {
        console.error('Error al leer el post:', error);
        return null;
    }
}

// Reemplaza con los datos de un post real que quieras leer
const postAuthor = 'joheredia21';
const postPermlink = 'esen-lo-que-para-m-representa-el-partido-arsenal-vs-real-madrid-h9k';

// Llama a la función y procesa la respuesta
readPostData(postAuthor, postPermlink).then(post => {
    if (post) {
        // En este punto, 'post' es un objeto JSON que contiene todos los datos.
        // Aquí puedes usar estos datos para mostrar el post en una página web.
        console.log('\n¡El post ha sido procesado con éxito!');
        //console.log(post);
    }
});