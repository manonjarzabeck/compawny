import Server from "./core/server";

const server = new Server().start();

// démarrer le serveur 
// pprocess.env.VAR : accéder aux variables d'environnement
server.listen( process.env.PORT);