import type { Request, Response } from "express";
import type { Animal } from "../../models/animal";
import AnimalRepository from "../repository/animal_repository";
import FileService from "../service/file_service";

class AnimalController {
	// méthode reliée à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// récupération des données via le repository
		const results = await new AnimalRepository().SelectAll();

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
		const results = await new AnimalRepository().SelectOne(req.params);

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
		//req.files permet de récupérer les fichiers transférés
		const file = (
			req.files as Express.Multer.File[]
		).shift() as Express.Multer.File;

		// instancier le service de fichiers
		const fileService = new FileService();

		// renommer le fichier transféré et récupérer le nom complet
		const fullname = await fileService.rename(file);

		// récupération des résultats de la requête
		// req.body récupère
		const results = await new AnimalRepository().insert({
			...req.body,
			image: fullname,
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
		res.status(201).json({
			status: 201,
			message: "Created",
			data: results,
		});

		console.log("CONTROLLER INSERT ANIMAL");
	};

	public update = async (req: Request, res: Response) => {
		// console.log(req.body);

		//req.files permet de récupérer les fichiers transférés
		const file = (
			req.files as Express.Multer.File[]
		).shift() as Express.Multer.File;

		// instancier le service de fichiers
		const fileService = new FileService();

		let fullname: string;

		if (file) {
			// renommer le fichier transféré et récupérer le nom complet
			fullname = await fileService.rename(file);
		} else {
			fullname = ((await new AnimalRepository().SelectOne(req.body)) as Animal)
				.image;
		}

		// récupération des résultats de la requête
		// req.body récupère
		const results = await new AnimalRepository().update({
			...req.body,
			image: fullname,
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
		// récupération des résultats de la requête
		// req.body récupère
		const results = await new AnimalRepository().delete(req.body);

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

export default AnimalController;
