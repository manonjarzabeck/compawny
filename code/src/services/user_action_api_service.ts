import type { Action } from "../../models/action";
import type { UserAction } from "../../models/user_action";
import type { ApiResponse } from "../models/api_response";

class UserActionApiService {
	private prefix = "/api/user-action";

	public selectByUser = async (
		userId: number,
		token: string,
	): Promise<ApiResponse<Action[]>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/${userId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		const response = await fetch(request);
		const results = await response.json();

		return results;
	};

	public insert = async (
		data: Partial<UserAction>,
		token: string,
	): Promise<ApiResponse<UserAction>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(data),
			},
		);

		const response = await fetch(request);
		const results = await response.json();

		return results;
	};

	public delete = async (
		data: Partial<UserAction>,
		token: string,
	): Promise<ApiResponse<UserAction>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "delete",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(data),
			},
		);

		const response = await fetch(request);
		const results = await response.json();

		return results;
	};
}

export default UserActionApiService;
