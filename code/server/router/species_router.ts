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

		// retourner le routeur
		return this.router;
	};
}
export default SpeciesRouter;