import type { Request, Response } from "express";
import RoleRepository from "../repository/role_repository";

class RoleController {
	// méthode reliée à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// récupération des données via le repository
		const results = await new RoleRepository().SelectAll();

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

	public selectOne = async (_req: Request, res: Response) => {
		// récupération des résultats de la requête
		const results = await new RoleRepository().SelectOne({ id: 1 });

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
}

export default RoleController;
