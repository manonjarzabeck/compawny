import express from "express";
import multer from "multer";
import ActionController from "../controller/action_controller";
import AuthorizationMiddleware from "../middleware/authorization_middleware";

class ActionRouter {
	// routeur express
	private router = express.Router();

	// multer permet de gérer le transfert de fichiers
	private multer = multer({ dest: `${process.env.PUBLIC_DIR}/img/action` });

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new ActionController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new ActionController().selectOne);

		// ajouter un enregistrement
		// utilisation du middleware multer
		this.router.post("/", this.multer.any(), new ActionController().insert);

		// mettre à jour un enregistrement
		// utilisation du middleware multer
		this.router.put(
			"/",
			this.multer.any(),
			new AuthorizationMiddleware().authorize(["admin"]),
			new ActionController().update,
		);

		// supprimer un enregistrement
		this.router.delete(
			"/",
			new AuthorizationMiddleware().authorize(["admin"]),
			new ActionController().delete,
		);

		// retourner le routeur
		return this.router;
	};
}
export default ActionRouter;
