import express from "express";
import multer from "multer";
import AnimalController from "../controller/animal_controller";

class AnimalRouter {
	// routeur express
	private router = express.Router();

	// multer permet de gérer le transfert de fichiers
	private multer = multer({ dest: "public" });

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new AnimalController().index);

		// variable de route : précédée par un :, suivie du nom de la variable
		this.router.get("/:id", new AnimalController().selectOne);

		// insérer un enregistrement
		// utilisation du middleware multer
		this.router.post("/", this.multer.any(), new AnimalController().insert);

		// retourner le routeur
		return this.router;
	};
}
export default AnimalRouter;
