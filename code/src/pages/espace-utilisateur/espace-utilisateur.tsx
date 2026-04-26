import UserEspace from "../../components/espace-utilisateur/user-espace";
import Seo from "../../components/seo/seo";

const UserSpacePage = () => {
	return (
		<>
			<Seo
				title="Espace utilisateur"
				description="Espace utilisateur - Dashboard favoris"
				url="/espace-utilisateur"
			/>
			<UserEspace />
		</>
	);
};

export default UserSpacePage;
