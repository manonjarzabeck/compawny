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
							// {
							// 	id: "proposition",
							// 	path: "proposition",
							// 	lazy: () => import("../pages/proposition/proposition"),
							// },
							{
								id: "actions",
								path: "actions",
								lazy: () => import("../pages/actions/action"),
							},
							{
								id: "action-detail",
								path: "actions/:id",
								lazy: () =>
									import("../pages/actions/action-details/action-details"),
							},
							{
								id: "adoptions",
								path: "adoptions",
								lazy: () => import("../pages/adoptions-sos/adoptions-sos"),
							},
							{
								id: "adoption-detail",
								path: "adoptions/:id",
								lazy: () =>
									import(
										"../pages/adoptions-sos/adoptions_sos-details/adoption_sos-details"
									),
							},
							{
								id: "associations",
								path: "associations",
								lazy: () =>
									import(
										"../pages/associations-internationales/associations-internationales"
									),
							},
							{
								id: "association-detail",
								path: "associations/:id",
								lazy: () =>
									import(
										"../pages/associations-internationales/associations-internationales-details/associations-internationales-details"
									),
							},
							{
								id: "mentions",
								path: "mentions",
								lazy: () => import("../pages/mentions/mentions"),
							},
						],
					},
					{
						id: "admin",
						path: "admin",
						lazy: () => import("../layouts/admin_layout"),

						children: [
							{
								id: "admin-homepage",
								index: true,
								lazy: () => import("../pages/admin/adminHomepage"),
							},
							{
								id: "admin-action-homepage",
								path: "action-homepage",
								lazy: () =>
									import(
										"../pages/admin/admin_action/action_homepage/action_homepage"
									),
							},
							{
								id: "admin-action-form",
								path: "action-form/:id?",
								lazy: () =>
									import("../pages/admin/admin_action/actionsCrudForm"),
							},
							{
								id: "admin-action-form-delete",
								path: "action-form-delete/:id?",
								lazy: () => import("../pages/admin/admin_action/delete"),
							},
							{
								id: "admin-association-homepage",
								path: "association-homepage",
								lazy: () =>
									import(
										"../pages/admin/admin_association/association_homepage/association_homepage"
									),
							},
							{
								id: "admin-association-form",
								path: "association-form/:id?",
								lazy: () =>
									import(
										"../pages/admin/admin_association/associationCrudForm"
									),
							},
							{
								id: "admin-association-form-delete",
								path: "association-form-delete/:id?",
								lazy: () => import("../pages/admin/admin_association/delete"),
							},
							{
								id: "admin-adoption-homepage",
								path: "adoption-homepage",
								lazy: () =>
									import(
										"../pages/admin/admin_adoption/adoption_homepage/adoption_homepage"
									),
							},
							{
								id: "admin-adoption-form",
								path: "adoption-form/:id?",
								lazy: () =>
									import("../pages/admin/admin_adoption/adoptionCrudForm"),
							},
							{
								id: "admin-adoption-form-delete",
								path: "adoption-form-delete/:id?",
								lazy: () => import("../pages/admin/admin_adoption/delete"),
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;
