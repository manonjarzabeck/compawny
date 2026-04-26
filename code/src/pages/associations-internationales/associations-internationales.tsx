import AssoList from "../../components/association/association-list/association_list";
import BackToTop from "../../components/btn/backToTop/backToTop";
import IntroPage from "../../components/intro-pages/intro-pages";
import Seo from "../../components/seo/seo";

const AssoMondePage = () => {
	return (
		<>
			<Seo
				title="Associations internationales"
				description="Liste des associations internationales pour la protection des animaux"
				url="/associations"
			/>
			<IntroPage
				image="/img/pages/Association.png"
				alt="Dessin bénévoles animaliers de la section Associations Internationales"
				title="Parce que la solidarité n’a pas de frontières 🫶🏼"
				description="La protection animale est un combat mondial qui nécessite des
					engagements forts et solidaires. À travers différents pays, des
					associations agissent concrètement pour défendre les droits et la
					dignité des animaux. Tu peux les découvrir ici et soutenir celles qui
					résonnent avec tes valeurs."
			/>

			<AssoList />
			<BackToTop />
		</>
	);
};

export default AssoMondePage;
