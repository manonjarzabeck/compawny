"use client";

import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../../assets/css/delete.module.css";
import type { AdminActionsParams } from "../../../models/params/admin/admin_actions_params";
import ActionApiService from "../../../services/action_api_service";
import SecurityService from "../../../services/security_service";

const AdminActionDelete = ({ params }: AdminActionsParams) => {
	const { id } = params;
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleCancel = () => {
		navigate("/admin/action-homepage");
	};

	const handleConfirmDelete = async () => {
		setLoading(true);

		try {
			const result = await new ActionApiService().delete(
				{ id: id },
				new SecurityService().getToken() as string,
			);

			if ([200, 201].includes(result.status)) {
				navigate("/admin/action-homepage", {
					state: { message: "L'action a bien été supprimée." },
				});
				return;
			}

			navigate("/admin/action-homepage", {
				state: { message: "Une erreur est survenue lors de la suppression." },
			});
		} catch (error) {
			console.error("Erreur lors de la suppression :", error);

			navigate("/admin/action-homepage", {
				state: { message: "Une erreur est survenue lors de la suppression." },
			});
		}
	};

	return (
		<section className={styles.overlay}>
			<div className={styles.modal}>
				<h1 className={styles.title}>Confirmer la suppression</h1>

				<p className={styles.text}>
					Êtes-vous sûr de vouloir supprimer cette action ?
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

export default AdminActionDelete;
