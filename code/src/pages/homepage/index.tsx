import ActionPropositionInformations from "../../components/homepage/action-proposition/proposition-informations/proposition-informations";
import GuideSection from "../../components/homepage/guide-section/guide-section";
import HeroSection from "../../components/homepage/hero-section/hero-section";
import Seo from "../../components/seo/seo";
import UserActionFormValidator from "../../validators/user_action_form_validator";

const HomePage = () => {
	return (
		<>
			<Seo title="Accueil" description="Page d'accueil" url="" />
			<HeroSection />
			<GuideSection />
			<ActionPropositionInformations
				validator={new UserActionFormValidator().validate}
			/>
		</>
	);
};

export default HomePage;
