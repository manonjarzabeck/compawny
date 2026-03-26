import type { User } from "../../models/user";
import type { ApiResponse } from "../models/api_response";

class SecurityApiService {
	// préfixe de l'API
	private prefix = "/api";

	public register = async (data: Partial<User>): Promise<ApiResponse<User>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/register`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			},
		);

		const response = await fetch(request);
		const results = await response.json();

		return results;
	};

	public login = async (data: Partial<User>): Promise<ApiResponse<User>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			},
		);

		const response = await fetch(request);
		const results = await response.json();

		return results;
	};
}

export default SecurityApiService;
