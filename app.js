// Importer le module HTTP
const http = require('http');

// Configurer le serveur HTTP pour répondre aux requêtes avec "Hello, World!"
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Écouter le port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}/`);
});
