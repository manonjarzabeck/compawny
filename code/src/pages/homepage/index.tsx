import ActionPropositionInformations from "../../components/homepage/action-proposition/proposition-informations/proposition-informations";
import GuideSection from "../../components/homepage/guide-section/guide-section";
import HeroSection from "../../components/homepage/hero-section/hero-section";
import Seo from "../../components/seo/seo";
import UserActionFormValidator from "../../validators/user_action_form_validator";

const HomePage = () => {
	return (
		<>
			{/* Référencement de la page d'accueil */}
			<Seo
				title="Accueil"
				description="Engagez-vous pour la protection animale avec Compawny : trouvez des actions locales, découvrez des associations internationales et adoptez des animaux qui attendent une seconde chance."
				url="/"
			/>

			{/* Première section visible à l'arrivée sur le site */}
			<HeroSection />

			{/* Section de présentation des 3 grandes catégories du site */}
			<GuideSection />

			{/* Section permettant aux visiteurs de proposer une action locale */}
			<ActionPropositionInformations
				validator={new UserActionFormValidator().validate}
			/>
		</>
	);
};

export default HomePage;
