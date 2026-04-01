import { r as reactExports, j as jsxRuntimeExports } from "../index.js";
import maplibregl from "maplibre-gl";
const MapLibre = ({
  latitude,
  longitude,
  zoom = 3,
  mapStyle = "https://tiles.openfreemap.org/styles/liberty",
  height = "400px"
}) => {
  const mapContainer = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!mapContainer.current) return;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [longitude, latitude],
      zoom
    });
    new maplibregl.Marker().setLngLat([longitude, latitude]).addTo(map);
    return () => map.remove();
  }, [latitude, longitude, zoom, mapStyle]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: mapContainer,
      style: { width: "100%", height, borderRadius: "12px" }
    }
  );
};
export {
  MapLibre as M
};
