import type { Role } from "../../models/role";
import type { User } from "../../models/user";
import MySQLService from "../service/mysql_service";
import RoleRepository from "./role_repository";

class UserRepository {
	// nom de la table SQL
	private table = "user";

	// méthode de sélection de tous les enregistrements
	public SelectAll = async (): Promise<User[] | unknown> => {
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
			for (let i = 0; i < (query as User[]).length; i++) {
				// récupérer un résultat
				const result = (query as User[])[i] as User;

				// clés étrangères
				result.role = (await new RoleRepository().SelectOne({
					id: result.role_id,
				})) as Role;
			}

			return query;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};

	// méthode de sélection d'un enregistrement
	public SelectOne = async (data: Partial<User>): Promise<User | unknown> => {
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

		// selectionner plusieurs enregistrements dans une liste

		// try / catch : récupérer les résultats de la requête ou l'erreur
		try {
			// exécuter la requête SQL
			// si la requête possède des variables, utiliser le paramètre de la méthode
			const [query] = await connection.execute(sql, data);

			// shift: récupérer le premier indice d'un array
			const result = (query as User[]).shift() as User;

			result.role = (await new RoleRepository().SelectOne({
				id: result.role_id,
			})) as Role;

			return result;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};

	// selectionner plusieurs enregistrements dans une liste
	public SelectInlist = async (list: string): Promise<User | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		const sql = `
            SELECT ${this.table}.*
            FROM ${process.env.MYSQL_DATABASE}.${this.table}
			WHERE ${this.table}.id IN (${list})
			;
       `;

		// try / catch : récupérer les résultats de la requête ou l'erreur
		try {
			// exécuter la requête SQL
			// si la requête possède des variables, utiliser le paramètre de la méthode
			const [query] = await connection.execute(sql);

			// boucler sur les résultats pour récupérer les objets en relation (composition en POO)
			for (let i = 0; i < (query as User[]).length; i++) {
				// récupérer un résultat
				const result = (query as User[])[i] as User;

				// clés étrangères
				result.role = (await new RoleRepository().SelectOne({
					id: result.role_id,
				})) as Role;
			}

			return query;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};
}

export default UserRepository;
