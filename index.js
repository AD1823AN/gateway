const Server = require ("./server/server");

const PORT = process.env.PORT || 4000;
const server = new Server(PORT);

server.star()

