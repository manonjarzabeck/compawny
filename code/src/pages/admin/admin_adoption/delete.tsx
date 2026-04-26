"use client";

import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../../assets/css/delete.module.css";
import type { AdminAdoptionsParams } from "../../../models/params/admin/admin_adoptions_params";
import AdoptionApiService from "../../../services/adoption_api_service";
import SecurityService from "../../../services/security_service";

const AdminAdoptionDelete = ({ params }: AdminAdoptionsParams) => {
	// ID de l’adoption à supprimer
	const { id } = params;

	// Permet de rediriger l’utilisateur après l’action
	const navigate = useNavigate();

	// état de chargement (désactive boutons pendant suppression)
	const [loading, setLoading] = useState(false);

	// Annuler → retour à la page de gestion des adoptions
	const handleCancel = () => {
		navigate("/admin/adoption-homepage");
	};

	// Confirmer suppression
	const handleConfirmDelete = async () => {
		setLoading(true);

		try {
			// Appel à l’API pour supprimer l’adoption
			const result = await new AdoptionApiService().delete(
				{ id },
				new SecurityService().getToken() as string,
			);

			// Si la suppression fonctionne, on redirige avec un message
			if ([200, 201].includes(result.status)) {
				navigate("/admin/adoption-homepage", {
					state: { message: "L'adoption a bien été supprimée." },
				});
				return;
			}

			// Sinon, on redirige avec un message d’erreur
			navigate("/admin/adoption-hompegae", {
				state: { message: "Erreur lors de la suppression." },
			});
		} catch (error) {
			console.error("Erreur suppression adoption :", error);

			// Gestion d’erreur générique
			navigate("/admin/adoption-homepage", {
				state: { message: "Erreur lors de la suppression." },
			});
		}
	};

	return (
		/* 
			Fenêtre modale de confirmation :
			permet de demander à l’administrateur
			s’il veut vraiment supprimer l’action
		*/
		<section className={styles.overlay}>
			<div className={styles.modal}>
				<h1 className={styles.title}>Confirmer la suppression</h1>

				<p className={styles.text}>
					Êtes-vous sûr de vouloir supprimer cette adoption ?
				</p>

				<p className={styles.warning}>Cette opération est irréversible.</p>

				<div className={styles.actions}>
					<button
						type="button"
						className={`${styles.btn} ${styles.cancelBtn}`}
						onClick={handleCancel}
						disabled={loading}
					>
						Annuler
					</button>

					<button
						type="button"
						className={`${styles.btn} ${styles.deleteBtn}`}
						onClick={handleConfirmDelete}
						disabled={loading}
					>
						{loading ? "Suppression..." : "Confirmer la suppression"}
					</button>
				</div>
			</div>
		</section>
	);
};

export default AdminAdoptionDelete;
