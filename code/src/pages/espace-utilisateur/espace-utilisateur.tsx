import UserFavorites from "../../components/espace-utilisateur/user-favorites";
import UserInfos from "../../components/espace-utilisateur/user-infos";

const UserSpacePage = () => {
	return (
		<>
			<UserInfos />
			<UserFavorites />
		</>
	);
};

export default UserSpacePage;
