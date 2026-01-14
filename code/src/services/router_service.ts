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
								lazy: () =>
									import("../pages/actions/action-details/action-details"),
							},
							{
								id: "animal",
								path: "animal",
								lazy: () => import("../pages/adoptions-sos/adoption-sos"),
							},
							{
								id: "asso",
								path: "asso",
								lazy: () => import("../pages/asso-monde/asso-monde"),
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
								id: "admin/action-form",
								path: "admin/action-form/:id?",
								lazy: () =>
									import("../pages/admin/admin_action/actionsCrudForm"),
							},
							{
								id: "admin/action-form-delete",
								path: "admin/action-form-delete/:id?",
								lazy: () => import("../pages/admin/admin_action/delete"),
							},
							{
								id: "admin/asso-form",
								path: "admin/asso-form",
								lazy: () => import("../pages/admin/admin_asso/assoCrudForm"),
							},
							{
								id: "admin/adoption-form",
								path: "admin/adoption-form",
								lazy: () =>
									import("../pages/admin/admin_adoption/adoptionCrudForm"),
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;
