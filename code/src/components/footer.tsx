import { NavLink } from "react-router";
import styles from "../assets/css/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			Ⓒ Compawny - <NavLink to={"/mentions"}>Mentions légales</NavLink>
		</footer>
	);
};

export default Footer;
