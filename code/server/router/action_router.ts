import express from "express";
import multer from "multer";
import ActionController from "../controller/action_controller";

class ActionRouter {
	// routeur express
	private router = express.Router();

	// multer permet de gérer le transfert de fichiers
	private multer = multer({ dest: "public" });

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new ActionController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new ActionController().selectOne);

		// utilisation du middleware multer
		this.router.post("/", this.multer.any(), new ActionController().insert);

		// retourner le routeur
		return this.router;
	};
}
export default ActionRouter;
