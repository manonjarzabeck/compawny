import type { Contact } from "../../models/contact";
import type { ApiResponse } from "../models/api_response";

class ContactApiService {
	private prefix = "/api/contact";

	public selectAll = async (): Promise<ApiResponse<Contact[]>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
		);

		const response = await fetch(request);
		const results = await response.json();

		return results;
	};

	public insert = async (
		data: Partial<Contact>,
	): Promise<ApiResponse<Contact>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "post",
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

export default ContactApiService;
