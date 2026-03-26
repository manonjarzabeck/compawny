import express from "express";
import UserActionController from "../controller/user_action_controller";
import AuthorizationMiddleware from "../middleware/authorization_middleware";

class UserActionRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// récupérer les favoris d'un utilisateur
		this.router.get(
			"/:user_id",
			new AuthorizationMiddleware().authorize(["user", "admin"]),
			new UserActionController().selectByUser,
		);

		// ajouter un favori
		this.router.post(
			"/",
			new AuthorizationMiddleware().authorize(["user", "admin"]),
			new UserActionController().insert,
		);

		// supprimer un favori
		this.router.delete(
			"/",
			new AuthorizationMiddleware().authorize(["user", "admin"]),
			new UserActionController().delete,
		);

		// retourner le routeur
		return this.router;
	};
}

export default UserActionRouter;
