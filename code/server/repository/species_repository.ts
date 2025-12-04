import type Species from "../../models/species";
import MySQLService from "../service/mysql_service";

class SpeciesRepository {
	// nom de la table SQL
	private table = "species";

	// méthode de sélection de tous les enregistrements
	public SelectAll = async (): Promise<Species[] | unknown> => {
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
			return query;
			// retourner les résultats
		} catch (error) {
			return error;
		}
	};
}

export default SpeciesRepository;
