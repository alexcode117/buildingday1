const dhive = require('@hiveio/dhive');

const client = new dhive.Client(['https://api.hive.blog']); // o tu nodo preferido
const postingKey = dhive.PrivateKey.fromString('5KfYLgeDxW4bq5n2sEbc9ZWETponhgPu6F4wnvTEdvih34ZTv6b'); // POSTING key

const author = 'testdevshive'; // tu usuario
const permlink = 'mi-primer-post-desde-codigo'; // debe ser único
const title = 'Hola Hive desde código';
const body = `# ¡Hola Mundo en Hive! 🚀

Este es mi primer post creado y publicado directamente desde código utilizando la librería **dhive**.

## ¿Qué es dhive?

\`dhive\` es una librería de JavaScript que nos permite interactuar con la blockchain de Hive. Podemos hacer cosas como:

*   Leer posts
*   Publicar contenido
*   Transferir tokens
*   Votar

---

### Ejemplo de código

\`\`\`javascript
const dhive = require('@hiveio/dhive');
const client = new dhive.Client(['https://api.hive.blog']);

// ... resto del código
\`\`\`

> Esta es una forma increíble de automatizar tareas y construir aplicaciones sobre Hive.

¡Espero que les guste este experimento! Saludos a toda la comunidad.`;

const json_metadata = {
  app: 'miapp/1.0',
  format: 'markdown',
  tags: ['programacion', 'hive'],
  // Para comunidades puedes incluir: community: 'hive-123456'
};

// 1) Operación principal: `comment`
const commentOp = [
  'comment',
  {
    parent_author: '',                // vacío para post raíz
    parent_permlink: 'programacion',  // o 'hive-123456' si publicas en comunidad
    author,
    permlink,
    title,
    body,
    json_metadata: JSON.stringify(json_metadata),
  },
];


// 3) Broadcast (envío) firmado con la posting key
(async () => {
  try {
    const result = await client.broadcast.sendOperations(
      [commentOp],
      postingKey
    );
    console.log('Publicado! TX:', result);
  } catch (e) {
    console.error('Error al publicar:', e);
  }
})();
