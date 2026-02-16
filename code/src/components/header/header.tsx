import { NavLink } from "react-router";
import Navigation from "../navigation/navigation";
import AuthButton from "./authBtn/authButton";
import styles from "./header.module.css";

const Header = () => {
	return (
		<header className={styles.publicHeader}>
			<div className={styles.headerInner}>
				<div className={styles.publicBrand}>
					<NavLink to={"/"} className={styles.logoLink}>
						<img
							src="/img/pages/Logo-logo.png"
							alt="Logo Compawny"
							className={styles.publicLogo}
						/>
						<h1 className={styles.publicTitle}>Compawny</h1>
					</NavLink>
				</div>
				<AuthButton />
			</div>
			<Navigation />
		</header>
	);
};

export default Header;
