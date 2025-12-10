import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

class RouterService {
	public getRouter = () => {
		return [
			{
				// identifiant unique de la route
				id: "root",

				// préxife des routes
				path: "/",

				// importation de la page
				lazy: () => import("../layouts/root_layout"),
				children: [
					{
						id: "public",
						path: "",
						lazy: () => import("../layouts/public_layout"),

						children: [
							{
								id: "home",
								index: true,
								path: "",
								lazy: () => import("../pages/index"),
							},
							{
								id: "contact",
								path: "contact",
								lazy: () => import("../pages/contact"),
							},
							{
								id: "connexion",
								path: "connexion",
								lazy: () => import("../pages/connexion"),
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;
