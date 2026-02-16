// pages/actions/action_detail.tsx
import { use } from "react";
import type { Association } from "../../../../models/association";
import AssociationDetailsContent from "../../../components/association/association-details/association_details_content";
import Seo from "../../../components/seo/seo";
import type { AssociationDetailsParams } from "../../../models/params/association_details_params";
import AssociationApiService from "../../../services/association_api_service";

const AssociationDetailPage = ({ params }: AssociationDetailsParams) => {
	const { id } = params;
	// récuperer les données
	const result = use(new AssociationApiService().selectOne(id));

	// console.log(result);

	return (
		<>
			<Seo
				title="Associations"
				description="Détails des Associations internationales"
				url=""
			/>
			<AssociationDetailsContent data={result.data as Association} />
		</>
	);
};
export default AssociationDetailPage;
