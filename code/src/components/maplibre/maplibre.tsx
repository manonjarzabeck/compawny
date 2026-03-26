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
	const mapContainer = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!mapContainer.current) return;

		const map = new maplibregl.Map({
			container: mapContainer.current,
			style: mapStyle,
			center: [longitude, latitude],
			zoom: zoom,
		});

		new maplibregl.Marker().setLngLat([longitude, latitude]).addTo(map);

		return () => map.remove();
	}, [latitude, longitude, zoom, mapStyle]);

	return (
		<div
			ref={mapContainer}
			style={{ width: "100%", height, borderRadius: "12px" }}
		/>
	);
};

export default MapLibre;
