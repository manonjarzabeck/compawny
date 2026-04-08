import React from "react";
import type { SeoProps } from "../../models/props/seo_props";

const Seo = ({ title, description, url }: SeoProps) => {
	return (
		<>
			{/* 50 caractères au maximum */}
			<title>{`Compawny - ${title}`}</title>

			{/*  150 caractères au maximum */}
			<meta name="description" content={` Compawny - ${description}`} />

			{/* Open Graph */}
			<meta property="og:title" content={`Compawny - ${title}`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://compawny.com${url} `} />
			{/* image : 1200x630px */}
			<meta property="og:image" content="/img/preview.png" />
			<meta property="og:description" content={` Compawny - ${description}`} />

			{/* Twitter Cards */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta
				name="twitter:title"
				content="Compawny - Agir concrètement pour les animaux 🤎"
			/>
			<meta
				name="twitter:description"
				content="Découvrez des actions solidaires autour de chez vous, partez en mission à l'autre bout du monde pour protéger les animaux menacés, offrez une seconde chance à des compagnons qui n'attendent que ça : engagez-vous pour la protection animale."
			/>
			<meta name="twitter:image" content="/img/preview.png" />
		</>
	);
};

export default Seo;
