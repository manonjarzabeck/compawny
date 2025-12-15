import type { Asso } from "../../models/asso";
import type { Country } from "../../models/country";
import MySQLService from "../service/mysql_service";
import CountryRepository from "./country_repository";

class AssoRepository {
	// nom de la table SQL
	private table = "asso";

	// méthode de sélection de tous les enregistrements
	public SelectAll = async (): Promise<Asso[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// select species.* from coeurdecompagnon_dev.species;
		const sql = `
            SELECT ${this.table}.*
            FROM ${process.env.MYSQL_DATABASE}.${this.table};
       `;

		// try / catch : récupérer les résultats de la requête ou l'erreur
		try {
			// exécuter la requête SQL
			const [query] = await connection.execute(sql);

			// boucler sur les résultats pour récupérer les objets en relation (composition en POO)
			for (let i = 0; i < (query as Asso[]).length; i++) {
				// récupérer un résultat
				const result = (query as Asso[])[i] as Asso;

				// clés étrangères
				result.country = (await new CountryRepository().SelectOne({
					id: result.country_id,
				})) as Country;
			}

			return query;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};

	// méthode de sélection d'un enregistrement
	public SelectOne = async (data: Partial<Asso>): Promise<Asso | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect(); // requête SQL
		// variable de requête : précédée d'un :, suivi du nom de la variable
		// requêtes préparées (utilisation des variables de requêtes) : la requête est exécutée si elle ne représente pas de risque de sécurité
		const sql = `
            SELECT ${this.table}.*
            FROM ${process.env.MYSQL_DATABASE}.${this.table}
			WHERE ${this.table}.id = :id
			;
       `;
		// try / catch : récupérer les résultats de la requête ou l'erreur
		try {
			// exécuter la requête SQL
			// si la requête possède des variables, utiliser le paramètre de la méthode
			const [query] = await connection.execute(sql, data);

			// shift: récupérer le premier indice d'un array
			const result = (query as Asso[]).shift() as Asso;

			// clés étrangères
			result.country = (await new CountryRepository().SelectOne({
				id: result.country_id,
			})) as Country;

			return result;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};
}

export default AssoRepository;
