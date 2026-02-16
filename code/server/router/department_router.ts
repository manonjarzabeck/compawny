import express from "express";
import DepartmentController from "../controller/department_controller";

class DepartmentRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new DepartmentController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new DepartmentController().selectOne);

		// retourner le routeur
		return this.router;
	};
}
export default DepartmentRouter;
