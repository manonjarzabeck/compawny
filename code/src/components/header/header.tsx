import Navigation from "../navigation/navigation";
import styles from "./header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.brand}>
				<img
					src="/img/pages/Logo.png"
					alt="Logo Compawny"
					className={styles.logo}
				/>

				<h1 className={styles.title}>Compawny</h1>
			</div>
			<Navigation />
		</header>
	);
};

export default Header;
