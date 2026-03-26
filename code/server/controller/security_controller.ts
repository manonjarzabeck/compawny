import argon2 from "argon2";
import type { Request, Response } from "express";
import type { User } from "../../models/user";
import SecurityRepository from "../repository/security_repository";

class SecurityController {
	// enregistrer un utilisateur
	public register = async (req: Request, res: Response) => {
		// récupération des données via le repository
		const results = await new SecurityRepository().register({
			...req.body,
			password: await argon2.hash(req.body.password),
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
	};

	public login = async (req: Request, res: Response) => {
		// récupération des données via le repository
		let results = await new SecurityRepository().isEmailUserExists(req.body);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});

			return;
		}

		// si l'email n'existe pas
		if (!results) {
			res.status(403).json({
				status: 403,
				message:
					process.env.NODE_ENV === "production"
						? "Error"
						: "Forbidden - User email does not exist",
			});

			return;
		}

		// récupérer l'utilisateur par son email
		results = await new SecurityRepository().SelectOneByEmail(req.body);

		// vérifier le mot de passe
		const passwordIsValid = await argon2.verify(
			(results as User).password,
			req.body.password,
		);

		if (!passwordIsValid) {
			res.status(401).json({
				status: 401,
				message:
					process.env.NODE_ENV === "production"
						? "Error"
						: "Unauthorized - Invalid password",
			});
			return;
		}

		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "OK",
			data: results,
		});
	};
}

export default SecurityController;
