import type { QueryResult } from "mysql2";
import type { Action } from "../../models/action";
import type { UserAction } from "../../models/user_action";
import MySQLService from "../service/mysql_service";

class UserActionRepository {
	// nom de la table SQL
	private table = "user_action";

	// méthode de sélection des favoris d'un utilisateur
	public SelectByUser = async (
		data: Partial<UserAction>,
	): Promise<Action[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		const sql = `
            SELECT action.*
            FROM ${process.env.MYSQL_DATABASE}.${this.table}
            JOIN ${process.env.MYSQL_DATABASE}.action
            ON action.id = ${this.table}.action_id
            WHERE ${this.table}.user_id = :user_id
            ;
       `;

		try {
			const [query] = await connection.execute(sql, data);

			// comme on récupère déjà action.*, pas besoin de refaire
			// un SelectOne sur ActionRepository ici
			return query as Action[];
		} catch (error) {
			return error;
		}
	};

	// méthode d'insertion d'un favori
	public insert = async (
		data: Partial<UserAction>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MySQLService().connect();

		const sql = `
            INSERT INTO
                ${process.env.MYSQL_DATABASE}.${this.table}
            VALUE
            (
                :user_id,
                :action_id
            )
            ;
        `;

		try {
			connection.beginTransaction();

			const [query] = await connection.execute(sql, data);

			connection.commit();

			return query;
		} catch (error) {
			connection.rollback();

			return error;
		}
	};

	// méthode de suppression d'un favori
	public delete = async (
		data: Partial<UserAction>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur MYSQL
		const connection = await new MySQLService().connect();

		const sql = `
            DELETE FROM
                ${process.env.MYSQL_DATABASE}.${this.table}
            WHERE
                ${this.table}.user_id = :user_id
            AND
                ${this.table}.action_id = :action_id
            ;
        `;

		try {
			connection.beginTransaction();

			const [query] = await connection.execute(sql, data);

			connection.commit();

			return query;
		} catch (error) {
			connection.rollback();

			return error;
		}
	};
}

export default UserActionRepository;
