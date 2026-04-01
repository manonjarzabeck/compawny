import * as jose from "jose";
import supertest from "supertest";
import { describe, expect, it } from "vitest";
import type { Animal } from "../../../models/animal";
import type { User } from "../../../models/user";
import Server from "../../../server/core/server";

describe("adoptions controller tests suite", async () => {
	const apiRoute = "/api";
	const route = "/animal";

	// admin
	const admin: User = {
		id: 1,
		email: "admin@admin.fr",
		password:
			"$argon2i$v=19$m=16,t=2,p=1$SHhIaUptM256UXBtZjF3VA$0cfqFjyvBxio+CPnUL6wAg",
		role_id: 1,
		role: {
			id: 1,
			name: "admin",
		},
	};

	// token JWT
	const secret = new TextEncoder().encode(process.env.VITE_JWT_SECRET);
	const alg = "HS256";
	const token = await new jose.SignJWT(admin as User)
		.setProtectedHeader({ alg })
		.setExpirationTime("10h")
		.sign(secret);

	// fake data : fausses données
	const data: Partial<Animal> = {
		id: 1,
		name: `name - ${Math.random()}`,
		image: "charlie.jpg",
		arrival: "2026-01-05",
		description: "Ceci est un test, ceci est un test",
		is_adoptable: 1,
		association_id: 4,
		species_id: 1,
	};

	// tester le code 201 renvoyé par la route
	it("should returns a 201 status code", async () => {
		// arrange
		// expected : résultat attendu
		const expected = 201;
		// sut : system under test
		const sut = supertest(new Server().start());

		// act

		/*
		envoyer des données dans body :
		si une image est présente : 
		utiliser la méthode field pour chaque champ
		utiliser la méthode attach pour transférer une image
		*/

		const response = await sut
			.post(`${apiRoute}${route}`)
			// token JWT
			.auth(token, { type: "bearer" })
			// donnée du body
			.field("name", data.name as string)
			.attach("image", `${process.env.PUBLIC_DIR}/img/adoption/${data.image}`)
			.field("arrival", data.arrival as string)
			.field("description", data.description as string)
			.field("is_adoptable", data.is_adoptable as boolean)
			.field("association_id", data.association_id as number)
			.field("species_id", data.species_id as number);

		const actual = response.status;

		console.log(response);

		// assert
		expect(actual).toBe(expected);
	});
});
