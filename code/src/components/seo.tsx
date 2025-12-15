import React from "react";
import type { SeoProps } from "../models/props/seo_props";

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
			<meta
				property="og:image"
				content="https://compawny.com/img/og_banner.png"
			/>
			<meta property="og:description" content={` Compawny - ${description}`} />

			{/* Twitter Cards */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content="" />
			<meta
				name="twitter:description"
				content="A compelling description that makes people want to click."
			/>
			<meta name="twitter:image" content="https://yoursite.com/image.jpg" />
		</>
	);
};

export default Seo;
