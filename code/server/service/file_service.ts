import { FILE } from "node:dns";
import fs from "node:fs/promises";
import { fileTypeFromFile } from "file-type/node";

// {
//     fieldname: 'image',
//     originalname: 'CateÌ\x81gorieAsso.jpg',
//     encoding: '7bit',
//     mimetype: 'image/jpeg',
//     destination: 'public/img/action',
//     filename: '5007e2931c137facdea9504493a483ac',
//     path: 'public/img/action/5007e2931c137facdea9504493a483ac',
//     size: 409159
//   }

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
