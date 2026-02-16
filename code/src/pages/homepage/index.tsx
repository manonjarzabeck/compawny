import GuideSection from "../../components/guide-section/guide-section";
import HeroSection from "../../components/hero-section/hero-section";
import Seo from "../../components/seo/seo";

const HomePage = () => {
	return (
		<>
			<Seo title="Accueil" description="Page d'accueil" url="" />
			<HeroSection />
			<GuideSection />
		</>
	);
};

export default HomePage;
