import express from "express";
import CountryController from "../controller/country_controller";

class CountryRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new CountryController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new CountryController().selectOne);

		// retourner le routeur
		return this.router;
	};
}
export default CountryRouter;
