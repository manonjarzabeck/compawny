import cors from "cors";
import express from "express";
import ActionRouter from "../router/action_router";
import AnimalRouter from "../router/animal_router";
import AssociationRouter from "../router/association_router";
import CountryRouter from "../router/country_router";
import DepartmentRouter from "../router/department_router";
import HomepageRouter from "../router/homepage_router";
import RoleRouter from "../router/role_router";
import SpeciesRouter from "../router/species_router";
import UserRouter from "../router/user_router";

class Server {
	// propriétés
	private app = express();
	private router = express.Router();

	// constructeur
	constructor() {
		// intégrer le middleware express JSON qui permet de récupérer la propriété body de la requête HTTP en JSON
		this.app.use(express.json());

		// intégrer le middleware CORS - Cross Origin Resource Sharing - qui permet d'autoriser l'accès aux ressources à des origines différentes (protocole, port, sous-domaine)
		this.app.use(
			cors({
				origin: process.env.ORIGINS?.split(","),
			}),
		);

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
		this.router.use("/api/action", new ActionRouter().getRoutes());
		this.router.use("/api/animal", new AnimalRouter().getRoutes());
		this.router.use("/api/association", new AssociationRouter().getRoutes());
		this.router.use("/api/role", new RoleRouter().getRoutes());
		this.router.use("/api/user", new UserRouter().getRoutes());
		this.router.use("/api/country", new CountryRouter().getRoutes());
		this.router.use("/api/department", new DepartmentRouter().getRoutes());
	};

	// démarrer le serveur
	public start = () => {
		return this.app;
	};
}

export default Server;
