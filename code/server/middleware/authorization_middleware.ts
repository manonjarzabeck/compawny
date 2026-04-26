import type { NextFunction, Request, Response } from "express";
import * as jose from "jose";
import type { JWTInvalid } from "jose/errors";
import type { User } from "../../models/user";

class AuthorizationMiddleware {
	// vérifier le JWT contenu dans l'en-tête HTTP Authorization
	public authorize = (roles: string[]) => {
		return async (req: Request, res: Response, next: NextFunction) => {
			const token = req.header("authorization")?.split("Bearer ")[1];

			// vérification de la validité du JWT
			try {
				const secret = new TextEncoder().encode(process.env.VITE_JWT_SECRET);
				await jose.jwtVerify(token as string, secret);
			} catch (error) {
				// si le token est invalide
				res.status(403).json({
					status: 403,
					message:
						process.env.NODE_ENV === "production"
							? "Error"
							: (error as JWTInvalid).code,
				});

				return;
			}

			// récupérer le payload concernant les données de l'utilisateur
			const payload = jose.decodeJwt(token as string) as User;

			// si le rôle n'est pas autorisé
			if (roles.indexOf(payload.role.name) === -1) {
				res.status(401).json({
					status: 401,
					message:
						process.env.NODE_ENV === "production"
							? "Error"
							: "Unauthorized - Role not authorized",
				});

				return;
			}

			// passer au middleware suivant
			next();
		};
	};
}

export default AuthorizationMiddleware;
