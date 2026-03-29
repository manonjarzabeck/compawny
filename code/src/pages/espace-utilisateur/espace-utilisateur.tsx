import UserEspace from "../../components/espace-utilisateur/user-espace";
import Seo from "../../components/seo/seo";

const UserSpacePage = () => {
	return (
		<>
			<Seo
				title="Espace utilisateur"
				description="Espace utilisateur - Dashboard favoris"
				url=""
			/>
			<UserEspace />
		</>
	);
};

export default UserSpacePage;
