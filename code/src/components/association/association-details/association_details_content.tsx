import type { AssociationDetailsContentProps } from "../../../models/props/details_content/association_details_content_props";
import Btn from "../../btn/Btn";
import MapLibre from "../../maplibre/maplibre";
import styles from "./association_details_content.module.css";

const AssociationDetailsContent = ({
	data,
	zoom = 4,
	mapStyle,
}: AssociationDetailsContentProps) => {
	return (
		<>
			{/* <div>
				<Btn link="/associations">Retour</Btn>
			</div> */}

			<section className={styles.card}>
				<div className={styles.topSection}>
					<div className={styles.infos}>
						<h2 className={styles.name}>{data.name}</h2>

						{data.introduction && (
							<p className={styles.introduction}>{data.introduction}</p>
						)}

						<p className={styles.description}>{data.description}</p>

						<div className={styles.contact}>
							<p>
								<strong>Email :</strong> {data.email}
							</p>

							<p>
								<strong>Site :</strong>{" "}
								<a href={data.website} target="_blank" rel="noreferrer">
									{data.website}
								</a>
							</p>
						</div>
					</div>

					<div className={styles.imageWrapper}>
						<img
							src={`/img/association/${data.image}`}
							alt={data.name}
							className={styles.image}
						/>
					</div>
				</div>

				<div className={styles.mapContainer}>
					<MapLibre
						latitude={data.latitude}
						longitude={data.longitude}
						zoom={zoom}
						mapStyle={mapStyle}
						height="320px"
					/>
				</div>
			</section>
		</>
	);
};

export default AssociationDetailsContent;
