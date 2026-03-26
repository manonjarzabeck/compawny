"use client";

import React from "react";
import { useNavigate } from "react-router";
import { formatDateFR } from "../../../models/outils/date";
import type { ActionDetailsContentProps } from "../../../models/props/details_content/action_details_content_props";
import AssociationDetailsContent from "../../association/association-details/association_details_content";
import Btn from "../../btn/Btn";
import style from "./action_details_content.module.css";

const ActionDetailsContent = ({ data }: ActionDetailsContentProps) => {
	const navigate = useNavigate();
	return (
		<>
			<div>
				<Btn
					onClick={() => {
						if (window.history.length > 1) {
							navigate(-1);
						} else {
							navigate("/actions");
						}
					}}
				>
					Retour
				</Btn>
			</div>
			<section className={style.container}>
				<div className={style.grid}>
					<div className={`${style.card} ${style.cardPrimary}`}>
						<div className={style.cardInner}>
							<div className={style.imageWrapper}>
								<img src={`/img/action/${data.image}`} alt={data.name} />
							</div>

							<h2 className={style.title}>{data.name}</h2>

							<p className={style.description}>{data.description}</p>

							<p className={style.date}>
								Publié le {formatDateFR(data.published)}
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

export default ActionDetailsContent;
