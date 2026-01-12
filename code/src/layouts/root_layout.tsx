import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<html lang="fr">
			<head>
				<meta charSet="UTF-8" />
				{/* <link rel="icon" type="image/svg+xml" href="/vite.svg" /> */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Nunito:wght@400;600;700&display=swap"
				/>
			</head>
			<body>
				{/* Outlet : zone remplie par un autre contenu */}
				<Outlet />
			</body>
		</html>
	);
};

export default RootLayout;
