import type { UserActionsFormContentProps } from "../../../../models/props/user_action_form_content_props";
import UserActionForm from "../action-proposition-form";
import styles from "./proposition-informations.module.css";

const ActionPropositionInformations = ({
	validator,
}: UserActionsFormContentProps) => {
	return (
		/* 
			Dernière grande section de la homepage
			→ permet aux visiteurs de proposer une action locale
		*/
		<section className={styles.container}>
			<p className={styles.sectionTag}>Et pour aller plus loin…</p>

			<div className={styles.contentGrid}>
				{/* Colonne de gauche : texte + image */}
				<div className={styles.textContent}>
					<h2 className={styles.title}>
						Vous connaissez une belle initiative locale, une action solidaire ou
						un événement en faveur des animaux ?
					</h2>

					<img
						className={styles.image}
						src="/img/pages/IllustrationFormulaire.png"
						alt="Bénévoles et animaux"
					/>

					<p className={styles.bodyText}>
						Remplissez simplement le formulaire avec les informations dont vous
						disposez. Notre équipe de modération se chargera ensuite de
						vérifier, compléter et mettre en forme votre proposition avant
						publication.
					</p>

					<p className={styles.highlightText}>
						Chaque proposition peut aider d'autres bénévoles à découvrir de
						nouvelles façons d'agir près de chez eux 🤎
					</p>
				</div>

				{/* Colonne de droite : texte d'introduction + formulaire */}
				<div className={styles.formColumn}>
					<p className={styles.introText}>
						Vous pouvez la partager ici en quelques clics 🐾
					</p>

					<div className={styles.formWrapper}>
						<UserActionForm validator={validator} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ActionPropositionInformations;
