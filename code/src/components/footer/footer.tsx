import { NavLink } from "react-router";
import styles from "../footer/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.brand}>Ⓒ Compawny -</div>
			<NavLink to={"/mentions"} className={styles.legal}>
				Mentions légales
			</NavLink>
			<p>-</p>
			<NavLink to={"/admin"} className={styles.legal}>
				Espace Admin 🔐
			</NavLink>
		</footer>
	);
};

export default Footer;
