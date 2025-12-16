import type { Action } from "../../models/action";
import type { Asso } from "../../models/asso";
import type { User } from "../../models/user";
import MySQLService from "../service/mysql_service";
import AssoRepository from "./asso_repository";
import UserRepository from "./user_repository";

class ActionRepository {
	// nom de la table SQL
	private table = "action";

	// méthode de sélection de tous les enregistrements
	public SelectAll = async (): Promise<Action[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		const sql = `
            SELECT 
			${this.table}.*,
			GROUP_CONCAT(user.id) AS user_ids
            FROM 
			${process.env.MYSQL_DATABASE}.${this.table}
			JOIN 
			${process.env.MYSQL_DATABASE}.user_action
			ON
			user_action.action_id = action.id
			JOIN 
			${process.env.MYSQL_DATABASE}.user
			ON
			user.id = user_action.user_id
			GROUP BY
			${this.table}.id
			;
       `;

		// try / catch : récupérer les résultats de la requête ou l'erreur
		try {
			// exécuter la requête SQL
			const [query] = await connection.execute(sql);
			// boucler sur les résultats pour récupérer les objets en relation (composition en POO)
			for (let i = 0; i < (query as Action[]).length; i++) {
				// récupérer un résultat
				const result = (query as Action[])[i] as Action;

				// clés étrangères
				result.asso = (await new AssoRepository().SelectOne({
					id: result.asso_id,
				})) as Asso;

				// table de jointure
				result.users = (await new UserRepository().SelectInlist(
					result.user_ids,
				)) as User[];
			}

			return query;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};

	// méthode de sélection d'un enregistrement
	public SelectOne = async (
		data: Partial<Action>,
	): Promise<Action | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect(); // requête SQL
		// variable de requête : précédée d'un :, suivi du nom de la variable
		// requêtes préparées (utilisation des variables de requêtes) : la requête est exécutée si elle ne représente pas de risque de sécurité
		const sql = `
            SELECT 
			${this.table}.*,
			GROUP_CONCAT(user.id) AS user_ids
            FROM 
			${process.env.MYSQL_DATABASE}.${this.table}
			JOIN 
			${process.env.MYSQL_DATABASE}.user_action
			ON
			user_action.action_id = action.id
			JOIN 
			${process.env.MYSQL_DATABASE}.user
			ON
			user.id = user_action.user_id
			WHERE ${this.table}.id = :id
			GROUP BY
			${this.table}.id
			;
       `;

		// try / catch : récupérer les résultats de la requête ou l'erreur
		try {
			// exécuter la requête SQL
			// si la requête possède des variables, utiliser le paramètre de la méthode
			const [query] = await connection.execute(sql, data);

			// shift: récupérer le premier indice d'un array
			const result = (query as Action[]).shift() as Action;

			// clés étrangères
			result.asso = (await new AssoRepository().SelectOne({
				id: result.asso_id,
			})) as Asso;

			result.users = (await new UserRepository().SelectInlist(
				result.user_ids,
			)) as User[];

			return result;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};
}

export default ActionRepository;
