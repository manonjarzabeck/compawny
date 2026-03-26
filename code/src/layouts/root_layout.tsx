import "../assets/css/reset.css";
import "../assets/css/base.css";
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<html lang="fr">
			<head>
				<meta charSet="UTF-8" />
				{/* Lien vers les images Favicon */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/img/icons_logo/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/img/icons_logo/favicon-16x16.png"
				/>
				<link
					rel="apple-touch-icon"
					href="/img/icons_logo/favicon-180x180.png"
				/>
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
