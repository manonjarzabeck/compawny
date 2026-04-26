"use client";

import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../../assets/css/delete.module.css";
import type { AdminAssociationsParams } from "../../../models/params/admin/admin_associations_params";
import AssociationApiService from "../../../services/association_api_service";
import SecurityService from "../../../services/security_service";

const AdminAssociationDelete = ({ params }: AdminAssociationsParams) => {
	// ID de l’association
	const { id } = params;

	// Permet de rediriger l’utilisateur après l’action
	const navigate = useNavigate();

	// État local pour désactiver les boutons pendant la suppression
	const [loading, setLoading] = useState(false);

	// Annulation : retour à la page de gestion des associations
	const handleCancel = () => {
		navigate("/admin/association-homepage");
	};

	// Confirmation de suppression
	const handleConfirmDelete = async () => {
		setLoading(true);

		try {
			// Appel à l’API pour supprimer l’association
			const result = await new AssociationApiService().delete(
				{ id },
				new SecurityService().getToken() as string,
			);

			// Si la suppression fonctionne, on redirige avec un message
			if ([200, 201].includes(result.status)) {
				navigate("/admin/association-homepage", {
					state: { message: "L'association a bien été supprimée." },
				});
				return;
			}

			// Sinon, on redirige avec un message d’erreur
			navigate("/admin/association-homepage", {
				state: { message: "Une erreur est survenue lors de la suppression." },
			});
		} catch (error) {
			console.error("Erreur lors de la suppression :", error);

			// Gestion d’erreur générique
			navigate("/admin/association-homepage", {
				state: { message: "Une erreur est survenue lors de la suppression." },
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
					Êtes-vous sûr de vouloir supprimer cette association ?
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

export default AdminAssociationDelete;
