import express from "express";
import multer from "multer";
import AssociationController from "../controller/association_controller";
import AuthorizationMiddleware from "../middleware/authorization_middleware";

class AssociationRouter {
	// routeur express
	private router = express.Router();

	// multer permet de gérer le transfert de fichiers
	private multer = multer({
		dest: `${process.env.PUBLIC_DIR}/img/association`,
	});

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new AssociationController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new AssociationController().selectOne);

		// insérer un enregistrement
		// utilisation du middleware multer
		this.router.post(
			"/",
			this.multer.any(),
			new AuthorizationMiddleware().authorize(["admin"]),
			new AssociationController().insert,
		);

		// mettre à jour un enregistrement
		// utilisation du middleware multer
		this.router.put(
			"/",
			this.multer.any(),
			new AuthorizationMiddleware().authorize(["admin"]),
			new AssociationController().update,
		);

		// supprimer un enregistrement
		this.router.delete(
			"/",
			new AuthorizationMiddleware().authorize(["admin"]),
			new AssociationController().delete,
		);

		// retourner le routeur
		return this.router;
	};
}
export default AssociationRouter;
