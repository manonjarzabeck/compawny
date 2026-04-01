import React from "react";
import type { IntroPageProps } from "../../models/props/pages/intro_pages_props";
import Btn from "../btn/Btn";
import styles from "./intro-pages.module.css";

const IntroPage = ({ image, title, description, alt }: IntroPageProps) => {
	return (
		<section className={styles.section}>
			<div className={styles.backBtnWrapper}>
				<Btn link="/">Retour à l'accueil</Btn>
			</div>
			<div className={styles.container}>
				<img
					src={image}
					alt={alt || "Illustration de la section"}
					className={styles.image}
				/>

				<h3 className={styles.title}>{title}</h3>

				<p className={styles.text}>{description}</p>
			</div>
		</section>
	);
};

export default IntroPage;
