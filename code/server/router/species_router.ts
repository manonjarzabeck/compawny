import express from "express";
import SpeciesController from "../controller/species_controller";

class SpeciesRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new SpeciesController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new SpeciesController().selectOne);

		// retourner le routeur
		return this.router;
	};
}
export default SpeciesRouter;
