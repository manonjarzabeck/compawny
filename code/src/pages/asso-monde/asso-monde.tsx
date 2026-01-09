import AssoList from "../../components/asso/asso_list";
import Seo from "../../components/seo/seo";

const AssoMondePage = () => {
	return (
		<>
			<Seo
				title="Associations mondiales"
				description="Associations dans le monde"
				url=""
			/>
			<h2>Associations mondiales</h2>
			<AssoList />
		</>
	);
};

export default AssoMondePage;
