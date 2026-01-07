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
								lazy: () => import("../pages/homepage/index"),
							},
							{
								id: "contact",
								path: "contact",
								lazy: () => import("../pages/contact/contact"),
							},
							{
								id: "authentification",
								path: "authentification",
								lazy: () =>
									import("../pages/authentification/authentification"),
							},
							{
								id: "action",
								path: "action",
								lazy: () => import("../pages/actions/action"),
							},
							{
								id: "action-detail",
								path: "actions/:id",
								lazy: () => import("../pages/action-details/action-details"),
							},
							{
								id: "mentions",
								path: "mentions",
								lazy: () => import("../pages/mentions/mentions"),
							},
							{
								id: "admin",
								path: "admin",
								lazy: () => import("../pages/admin/adminHomepage"),
							},
							{
								id: "admin/actions",
								path: "admin/actions",
								lazy: () => import("../pages/admin/actionsCrud"),
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;
