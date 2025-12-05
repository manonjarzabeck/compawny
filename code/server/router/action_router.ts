import express from "express";
import ActionController from "../controller/action_controller";

class ActionRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new ActionController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new ActionController().selectOne);

		// retourner le routeur
		return this.router;
	};
}
export default ActionRouter;
