"use client";

import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapProps } from "../../models/props/maplibre_props";

const MapLibre = ({
	latitude,
	longitude,
	zoom = 3,
	mapStyle = "https://tiles.openfreemap.org/styles/liberty",
	height = "400px",
}: MapProps) => {
	/* 
		Référence vers le conteneur HTML qui accueillera la carte.
		MapLibre a besoin d’un élément DOM réel pour s’initialiser.
	*/
	const mapContainer = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		/* 
			On vérifie que le conteneur est bien monté dans le DOM
			sinon MapLibre ne peut pas s'initialiser
		*/
		if (!mapContainer.current) return;

		/* 
			Initialisation de la carte MapLibre
			- container : élément HTML cible
			- style : style de la carte (tiles OpenStreetMap ici)
			- center : coordonnées [longitude, latitude]
			- zoom : niveau de zoom initial
		*/
		const map = new maplibregl.Map({
			container: mapContainer.current,
			style: mapStyle,
			center: [longitude, latitude],
			zoom: zoom,
		});

		/* 
			Ajout d'un marker sur la carte
			permet de localiser précisément l'association
		*/
		new maplibregl.Marker().setLngLat([longitude, latitude]).addTo(map);

		/* 
			Cleanup important :
			on supprime la carte lors du démontage du composant
			pour éviter les fuites mémoire
		*/
		return () => map.remove();
	}, [latitude, longitude, zoom, mapStyle]);

	return (
		/* 
			Conteneur de la carte :
			- width 100% → s’adapte au parent
			- height dynamique (prop)
			- borderRadius → cohérence visuelle avec le design du site
		*/
		<div
			ref={mapContainer}
			style={{ width: "100%", height, borderRadius: "12px" }}
		/>
	);
};

export default MapLibre;
