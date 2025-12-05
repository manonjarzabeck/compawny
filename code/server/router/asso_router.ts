import express from "express";
import AssoController from "../controller/asso_controller";

class AssoRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new AssoController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new AssoController().selectOne);

		// retourner le routeur
		return this.router;
	};
}
export default AssoRouter;
