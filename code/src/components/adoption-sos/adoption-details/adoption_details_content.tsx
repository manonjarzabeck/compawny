"use client";

import { formatDateFR } from "../../../models/outils/date";
import type { AdoptionDetailsContentProps } from "../../../models/props/details_content/adoption_details_content_props";
import AssociationDetailsContent from "../../association/association-details/association_details_content";

import BackBtn from "../../btn/backBtn";
import style from "./adoption_details_content.module.css";

// récupération de la props data envoyée par le parent
const AdoptionDetailsContent = ({ data }: AdoptionDetailsContentProps) => {
	return (
		<>
			<BackBtn fallbackLink="/adoptions" />
			<section className={style.container}>
				<div className={style.grid}>
					<div className={`${style.card} ${style.cardPrimary}`}>
						<div className={style.cardInner}>
							<div className={style.imageWrapper}>
								<img src={`/img/adoption/${data.image}`} alt={data.name} />
							</div>

							<h2 className={style.title}>🤎 {data.name} 🤎</h2>

							<p className={style.description}>{data.description}</p>

							<p className={style.date}>
								Cet adorable compagnon attend sa famille au sein de
								l’association <strong>{data.association.name}</strong> depuis le{" "}
								{formatDateFR(data.arrival)} 🫶🏼
							</p>
						</div>
					</div>

					<div className={style.associationWrapper}>
						<AssociationDetailsContent
							data={data.association}
							zoom={10}
							mapStyle="https://tiles.openfreemap.org/styles/bright"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default AdoptionDetailsContent;
