import type { Request, Response } from "express";
import UserActionRepository from "../repository/user_action_repository";

class UserActionController {
	// récupérer les favoris d'un utilisateur
	public selectByUser = async (req: Request, res: Response) => {
		// récupération des résultats de la requête
		const results = await new UserActionRepository().SelectByUser(req.params);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});

			return;
		}

		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "ok",
			data: results,
		});
	};

	// ajouter un favori
	public insert = async (req: Request, res: Response) => {
		// récupération des résultats de la requête
		const results = await new UserActionRepository().insert(req.body);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});

			return;
		}

		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		res.status(201).json({
			status: 201,
			message: "Created",
			data: results,
		});
	};

	// supprimer un favori
	public delete = async (req: Request, res: Response) => {
		// récupération des résultats de la requête
		const results = await new UserActionRepository().delete(req.body);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});

			return;
		}

		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "Deleted",
			data: results,
		});
	};
}

export default UserActionController;
