import type { Action } from "../../models/action";
import type { ApiResponse } from "../models/api_response";

class ActionApiService {
	// préfixe de l'API
	private prefix = "/api/action";

	// selection de tous les enregistrements
	public selectAll = async (): Promise<ApiResponse<Action[]>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
		);

		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objet, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractère en données complexe : objet, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};

	// séléction d'un enregistrement
	public selectOne = async (id: number): Promise<ApiResponse<Action>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/${id}`,
		);

		const response = await fetch(request);
		const results = await response.json();

		return results;
	};

	// insertion d'un enregistrement
	public insert = async (data: FormData): Promise<ApiResponse<Action>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "post",
				/*
				si le formulaire contient un champ de fichier
				la propriété body renvoie un objet formData
				si le formulaire ne contient pas de champ de fichier
				la propriété body renvoie du JSON : JSON.stringify(...)
				ajouter l'en tête Content-Type: application/json
				*/
				body: data,
			},
		);

		const response = await fetch(request);
		const results = await response.json();

		return results;
	};
}

export default ActionApiService;
