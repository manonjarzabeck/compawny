import type { Request, Response } from "express";
import type { Action } from "../../models/action";
import ActionRepository from "../repository/action_repository";
import FileService from "../service/file_service";

class ActionController {
	// méthode reliée à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// récupération des données via le repository
		const results = await new ActionRepository().SelectAll();

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

	public selectOne = async (req: Request, res: Response) => {
		// récupération des résultats de la requête
		const results = await new ActionRepository().SelectOne(req.params);

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

	public insert = async (req: Request, res: Response) => {
		// Récupération des fichiers envoyés (si un fichier est présent)
		const files = req.files as Express.Multer.File[] | undefined;
		const file = files?.shift();

		let fullname: string | null = null;

		// Si une image est fournie, on la renomme et on récupère son nom final
		if (file) {
			const fileService = new FileService();
			fullname = await fileService.rename(file);
		}

		// Appel au repository pour insérer une nouvelle action en base
		const results = await new ActionRepository().insert({
			...req.body,

			// Ajout du nom de l’image si elle existe
			image: fullname,

			// Certains champs sont facultatifs :
			// s’ils ne sont pas fournis, ils sont enregistrés en null
			published: req.body.published ? req.body.published : null,
			association_id: req.body.association_id ? req.body.association_id : null,
			association_proposal: req.body.association_proposal
				? req.body.association_proposal
				: null,

			// Définition de la source :
			// par défaut "admin", mais peut être "visitor" via le formulaire utilisateur
			source: req.body.source ? req.body.source : "admin",
		});

		// Gestion des erreurs lors de l’insertion
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});

			return;
		}

		// Réponse en cas de succès
		res.status(201).json({
			status: 201,
			message: "Created",
			data: results,
		});
	};

	public update = async (req: Request, res: Response) => {
		// req.files permet de récupérer les fichiers transférés
		const files = req.files as Express.Multer.File[] | undefined;
		const file = files?.shift();

		// instancier le service de fichiers
		const fileService = new FileService();

		let fullname: string;

		if (file) {
			// renommer le fichier transféré et récupérer le nom complet
			fullname = await fileService.rename(file);
		} else {
			fullname = ((await new ActionRepository().SelectOne(req.body)) as Action)
				.image;
		}

		// récupération des résultats de la requête
		const results = await new ActionRepository().update({
			...req.body,
			image: fullname,
			published: req.body.published ? req.body.published : null,
			association_id: req.body.association_id ? req.body.association_id : null,
			association_proposal: req.body.association_proposal
				? req.body.association_proposal
				: null,
		});

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
			message: "Updated",
			data: results,
		});
	};

	public delete = async (req: Request, res: Response) => {
		// console.log(req.body);

		// récupération des résultats de la requête
		// req.body récupère
		const results = await new ActionRepository().delete(req.body);

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

export default ActionController;
