import type { Request, Response } from "express";
import ContactRepository from "../repository/contact_repository";

class ContactController {
	// méthode reliée à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// récupération des données via le repository
		const results = await new ContactRepository().SelectAll();

		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "ok",
			data: results,
		});
	};

	// méthode reliée à la route en GET située dans le routeur
	public insert = async (req: Request, res: Response) => {
		// INSERTION
		const results = await new ContactRepository().insert({
			...req.body,
			date: new Date(),
		});

		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		res.status(201).json({
			status: 201,
			message: "created",
			data: results,
		});
	};
}

export default ContactController;
