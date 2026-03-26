import express from "express";
import SecurityController from "../controller/security_controller";

class SecurityRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// le préfixe des routes est dans le serveur
		this.router.post("/register", new SecurityController().register);
		this.router.post("/login", new SecurityController().login);

		// retourner le routeur
		return this.router;
	};
}
export default SecurityRouter;
