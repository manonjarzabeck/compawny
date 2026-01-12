import Navigation from "../navigation/navigation";
import AuthButton from "./authBtn/authButton";
import styles from "./header.module.css";

const Header = () => {
	return (
		<header className={styles.publicHeader}>
			<div className={styles.publicBrand}>
				<img
					src="/img/Logo1.png"
					alt="Logo Compawny"
					className={styles.publicLogo}
				/>
				<h1 className={styles.publicTitle}>Compawny</h1>
				<AuthButton />
			</div>
			<Navigation />
		</header>
	);
};

export default Header;
