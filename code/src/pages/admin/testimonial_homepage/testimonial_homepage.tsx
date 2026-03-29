"use client";

import { useEffect, useState } from "react";
import type { Contact } from "../../../../models/contact";
import Btn from "../../../components/btn/Btn";
import type { ApiResponse } from "../../../models/api_response";
import ContactApiService from "../../../services/contact_api_service";
import styles from "./testimonial_homepage.module.css";

const TestimonialHomepage = () => {
	const [testimonials, setTestimonials] = useState<Contact[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchTestimonials = async () => {
		try {
			const results: ApiResponse<Contact[]> =
				await new ContactApiService().selectAll();

			if (results.data) {
				setTestimonials(results.data);
			}
		} catch (error) {
			console.error(
				"Erreur lors du chargement des retours d'expérience :",
				error,
			);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchTestimonials();
	}, []);

	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<Btn link="/admin">Retour au tableau de bord</Btn>

				<div className={styles.intro}>
					<h1 className={styles.title}>Retours d’expérience</h1>
					<p className={styles.subtitle}>
						Consultez ici les témoignages envoyés depuis le formulaire public.
					</p>
				</div>
			</div>

			{loading ? (
				<p className={styles.message}>Chargement des témoignages...</p>
			) : testimonials.length > 0 ? (
				<div className={styles.grid}>
					{testimonials.map((testimonial) => (
						<article key={testimonial._id} className={styles.card}>
							<div className={styles.cardHeader}>
								<h2 className={styles.name}>{testimonial.name}</h2>
								<p className={styles.email}>{testimonial.email}</p>
							</div>

							<p className={styles.content}>“ {testimonial.message} ”</p>

							{testimonial.date && (
								<p className={styles.date}>
									Envoyé le{" "}
									{new Date(testimonial.date).toLocaleDateString("fr-FR")}
								</p>
							)}
						</article>
					))}
				</div>
			) : (
				<p className={styles.message}>
					Aucun retour d’expérience pour le moment.
				</p>
			)}
		</section>
	);
};

export default TestimonialHomepage;
