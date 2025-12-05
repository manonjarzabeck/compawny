import express from "express";
import RoleController from "../controller/role_controller";

class RoleRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new RoleController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new RoleController().selectOne);

		// retourner le routeur
		return this.router;
	};
}
export default RoleRouter;
