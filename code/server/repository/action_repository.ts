import type { QueryResult } from "mysql2";
import type { Action } from "../../models/action";
import type { Association } from "../../models/association";
import MySQLService from "../service/mysql_service";
import AssociationRepository from "./association_repository";

class ActionRepository {
	// nom de la table SQL
	private table = "action";

	// méthode de sélection de tous les enregistrements
	public SelectAll = async (): Promise<Action[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		const sql = `
            SELECT ${this.table}.*
            FROM ${process.env.MYSQL_DATABASE}.${this.table};
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
				result.association = (await new AssociationRepository().SelectOne({
					id: result.association_id,
				})) as Association;
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
		const connection = await new MySQLService().connect();
		// requête SQL
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
			const result = (query as Action[]).shift() as Action;

			// clés étrangères
			result.association = (await new AssociationRepository().SelectOne({
				id: result.association_id,
			})) as Association;

			return result;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};

	// méthode d'insertion d'un enregistrement
	public insert = async (
		data: Partial<Action>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MySQLService().connect();
		// requête SQL
		// variable de requête : précédée d'un :, suivi du nom de la variable
		// requêtes préparées (utilisation des variables de requêtes) : la requête est exécutée si elle ne représente pas de risque de sécurité

		const sql = `
	INSERT INTO 
		${process.env.MYSQL_DATABASE}.${this.table}
	VALUE 
	(
		NULL,
		:name,
		:image,
		:description,
		:published,
		:is_active,
		:association_proposal,
		:source,
		:association_id
	)
	  ;
		`;

		try {
			// démarrer une transaction SQL
			connection.beginTransaction();

			// éxecution de la première requête
			const [query] = await connection.execute(sql, data);

			// valider la transaction SQL
			connection.commit();

			return query;
			// retourner les résultats
		} catch (error) {
			// annuler une transaction SQL
			connection.rollback();

			return error;
		}
	};

	// méthode de mise à jour d'un enregistrement
	public update = async (
		data: Partial<Action>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MySQLService().connect();

		// requête SQL
		const sql = `


	UPDATE 
		${process.env.MYSQL_DATABASE}.${this.table}
	SET

		name = :name,
		image = :image,
		description = :description,
		published = :published,
		is_active = :is_active,
		association_proposal = :association_proposal,
		association_id = :association_id

	WHERE
	${this.table}.id = :id
	  ;
		`;

		try {
			// démarrer une transaction SQL
			connection.beginTransaction();

			// éxecution de la première requête
			const [query] = await connection.execute(sql, data);

			// valider la transaction SQL
			connection.commit();

			return query;
			// retourner les résultats
		} catch (error) {
			// annuler une transaction SQL
			connection.rollback();

			return error;
		}
	};

	// méthode de supression d'un enregistrement
	public delete = async (
		data: Partial<Action>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MySQLService().connect();

		// requête SQL
		const sql = `

		
			DELETE FROM
			 ${process.env.MYSQL_DATABASE}.${this.table}
			WHERE
			 ${this.table}.id = :id
			;
		
		`;

		try {
			// démarrer une transaction SQL
			connection.beginTransaction();

			// éxecution de la première requête
			const [query] = await connection.execute(sql, data);

			// valider la transaction SQL
			connection.commit();

			return query;
			// retourner les résultats
		} catch (error) {
			// annuler une transaction SQL
			connection.rollback();

			return error;
		}
	};
}

export default ActionRepository;
