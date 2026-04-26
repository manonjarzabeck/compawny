import { FILE } from "node:dns";
import fs from "node:fs/promises";
import { fileTypeFromFile } from "file-type/node";

class FileService {
	// renommer le fichier transféré en ajoutant l'extension
	// doit retourner le nom complet du fichier
	public rename = async (file: Express.Multer.File) => {
		// ajouter l'exasync tension au fichier
		const fullname = `${file.filename}.${(await fileTypeFromFile(file.path))?.ext}`;

		// renommer le fichier avec le nom complet
		await fs.rename(file.path, `${file.destination}/${fullname}`);

		// retourner le nom complet
		return fullname;
	};
}

export default FileService;
