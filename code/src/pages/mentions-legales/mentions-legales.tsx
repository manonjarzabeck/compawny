import Btn from "../../components/btn/Btn";
import Seo from "../../components/seo/seo";
import styles from "./mentions-legales.module.css";

const MentionsLegales = () => {
	return (
		<>
			<Btn link="/">Retour</Btn>
			<Seo title="Mentions légales" description="Mentions légales" url="" />
			<section className={styles.wrapper}>
				<div className={styles.container}>
					<h1 className={styles.title}>Mentions légales</h1>

					<div className={styles.content}>
						<section className={styles.block}>
							<h2>Éditeur du site</h2>
							<p>
								Le site <strong>Compawny</strong> a été réalisé dans le cadre
								d’un projet pédagogique de formation en développement web.
							</p>
							<p>
								<strong>Éditrice :</strong> Manon Jarzabeck
							</p>
							<p>
								<strong>Statut :</strong> projet pédagogique non commercial
							</p>
							<p>
								<strong>Contact :</strong> via le formulaire du site
							</p>
						</section>

						<section className={styles.block}>
							<h2>Hébergement</h2>
							<p>
								Le site n’est actuellement pas hébergé publiquement. Les
								informations relatives à l’hébergement seront précisées lors de
								sa mise en ligne.
							</p>
						</section>

						<section className={styles.block}>
							<h2>Propriété intellectuelle</h2>
							<p>
								L’ensemble du contenu présent sur ce site (textes, structure,
								éléments graphiques, code source, maquettes et créations
								originales) est protégé par les règles relatives à la propriété
								intellectuelle.
							</p>
							<p>
								Toute reproduction, représentation, modification ou diffusion,
								totale ou partielle, sans autorisation préalable, est interdite,
								sauf usage strictement privé ou pédagogique dans les limites
								prévues par la loi.
							</p>
						</section>

						<section className={styles.block}>
							<h2>Crédits visuels</h2>
							<p>
								Certaines images utilisées sur ce site proviennent de banques
								d’images libres d’utilisation, notamment{" "}
								<strong>Unsplash</strong> et <strong>Freepik</strong>, ainsi que
								des sites officiels des associations présentées.
							</p>
							<p>
								Les visuels des associations sont utilisés à titre illustratif
								dans le cadre de ce projet pédagogique. En cas de mise en ligne
								publique du site, les autorisations nécessaires, crédits ou
								remplacements de visuels devront être vérifiés et complétés si
								besoin.
							</p>
						</section>

						<section className={styles.block}>
							<h2>Responsabilité</h2>
							<p>
								Compawny a pour objectif de mettre en avant des associations,
								des actions solidaires et des possibilités d’adoption en lien
								avec la protection animale.
							</p>
							<p>
								Les informations publiées sur le site sont fournies à titre
								informatif. Malgré le soin apporté à leur sélection et à leur
								mise à jour, l’éditrice ne peut garantir l’exactitude,
								l’exhaustivité ou l’actualité permanente de l’ensemble des
								contenus.
							</p>
							<p>
								Le site ne saurait être tenu responsable des actions, services,
								engagements, disponibilités ou conditions proposés par les
								associations et structures référencées.
							</p>
						</section>

						<section className={styles.block}>
							<h2>Données personnelles</h2>
							<p>
								Les informations éventuellement transmises via les formulaires
								du site sont utilisées uniquement dans le cadre du
								fonctionnement du projet et ne sont pas cédées à des tiers.
							</p>
							<p>
								Conformément à la réglementation applicable à la protection des
								données personnelles, toute personne peut demander des
								informations, une rectification ou une suppression des données
								la concernant via le formulaire de contact du site.
							</p>
						</section>
					</div>
				</div>
			</section>
		</>
	);
};

export default MentionsLegales;
