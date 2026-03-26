// T représente un type générique : type variable
export type ApiResponse<T> = {
	status: number;
	message: string;
	// ? : optionnel
	data?: T;
};
