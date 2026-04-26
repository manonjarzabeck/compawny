import type { QueryResult } from "mysql2";
import type { Association } from "../../models/association";
import type { Country } from "../../models/country";
import type { Department } from "../../models/department";
import MySQLService from "../service/mysql_service";
import CountryRepository from "./country_repository";
import DepartmentRepository from "./department_repository";

class AssociationRepository {
	// nom de la table SQL
	private table = "association";

	// méthode de sélection de tous les enregistrements
	public SelectAll = async (): Promise<Association[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		const sql = `
            SELECT ${this.table}.*
            FROM ${process.env.MYSQL_DATABASE}.${this.table};
       `;

		// try / catch : récupérer les résultats de la requête ou l'erreur
		try {
			// exécuter la requête SQL
			const [query] = await connection.execute(sql);

			// boucler sur les résultats pour récupérer les objets en relation (composition en POO)
			for (let i = 0; i < (query as Association[]).length; i++) {
				// récupérer un résultat
				const result = (query as Association[])[i] as Association;

				// clés étrangères
				result.country = (await new CountryRepository().SelectOne({
					id: result.country_id,
				})) as Country;

				result.department = (await new DepartmentRepository().SelectOne({
					id: result.department_id,
				})) as Department;
			}

			return query;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};

	// méthode de sélection d'un enregistrement
	public SelectOne = async (
		data: Partial<Association>,
	): Promise<Association | unknown> => {
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
			const result = (query as Association[]).shift() as Association;

			// clés étrangères
			result.country = (await new CountryRepository().SelectOne({
				id: result.country_id,
			})) as Country;

			result.department = (await new DepartmentRepository().SelectOne({
				id: result.department_id,
			})) as Department;

			return result;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};

	// méthode d'insertion d'un enregistrement
	public insert = async (
		data: Partial<Association>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MySQLService().connect();

		// requête SQL
		const sql = `

	INSERT INTO 
		${process.env.MYSQL_DATABASE}.${this.table}
	VALUE 
	(
		NULL,
		:name,
		:image,
		:introduction,
		:description,
		:website,
		:address,
		:email,
		:is_international,
		:latitude,
		:longitude,
		:country_id,
		:department_id
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
		data: Partial<Association>,
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
		introduction = :introduction,
		description = :description,
		website = :website,
		address = :address,
		email = :email,
		is_international = :is_international,
		latitude = :latitude,
		longitude = :longitude,
		country_id = :country_id,
		department_id = :department_id

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
		data: Partial<Association>,
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

export default AssociationRepository;
