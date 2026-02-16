import type { Association } from "../../models/association";
import type { ApiResponse } from "../models/api_response";

class AssociationApiService {
	// préfixe de l'API
	private prefix = "/api/association";

	// selection de tous les enregistrements
	public selectAll = async (): Promise<ApiResponse<Association[]>> => {
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

	public selectOne = async (id: number): Promise<ApiResponse<Association>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/${id}`,
		);

		const response = await fetch(request);
		const results = await response.json();

		return results;
	};

	// insertion d'un enregistrement
	public insert = async (data: FormData): Promise<ApiResponse<Association>> => {
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

	public update = async (data: FormData): Promise<ApiResponse<Association>> => {
		// configurer la requête HTTP
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "put",
				/* si le formulaire contient un champ de fichier, la propriété body renvoie un objet formData. 
				Si le formulaire ne contient pas de champ de fichier, la propriété renvoie du JSON (JSON stringify)... ajouter l'en-tête Content-Type:  */
				body: data,
			},
		);

		// executer la requete HTTP
		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objets, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractères en données complexes : objets, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};

	public delete = async (
		data: Partial<Association>,
	): Promise<ApiResponse<Association>> => {
		// configurer la requête HTTP
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "delete",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			},
		);

		// executer la requete HTTP
		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes (objets, array) en chaine de caractères
		// désérialiser : convertir une chaine de caractères en données complexes : objets, array...
		const results = await response.json();

		// retourner les résultats
		return results;
	};
}

export default AssociationApiService;
