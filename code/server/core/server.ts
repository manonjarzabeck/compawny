import express from "express";
import HomepageRouter from "../router/homepage_router";
import SpeciesRouter from "../router/species_router";

class Server {
	// propriétés
	private app = express();
	private router = express.Router();

	// constructeur
	constructor() {
		// relier le routeur à l'application
		this.app.use(this.router);
		// appel des routeurs
		this.routersList();
	}
	// méthodes
	// liste des routeurs
	private routersList = () => {
		// créer un préfixe à toutes les routes inclues dans un routeur
		this.router.use("/api", new HomepageRouter().getRoutes());
		this.router.use("/api/species", new SpeciesRouter().getRoutes());
	};

	// démarrer le serveur
	public start = () => {
		return this.app;
	};
}

export default Server;
