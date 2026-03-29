import express from "express";
import ContactController from "../controller/contact_controller";

class ContactRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route en GET
		// le préfixe des routes est dans le serveur
		this.router.get("/", new ContactController().index);

		// le préfixe des routes est dans le serveur
		this.router.post("/", new ContactController().insert);

		// retourner le routeur
		return this.router;
	};
}
export default ContactRouter;
