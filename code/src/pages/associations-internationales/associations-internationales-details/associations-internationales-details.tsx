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

	return (
		<>
			<Seo
				title="Associations"
				description="Détails des Associations internationales"
				url="/associations/:id"
			/>
			<AssociationDetailsContent
				data={result.data as Association}
				showBackButton={true}
				tabletLayout="column"
				size="default"
			/>
		</>
	);
};
export default AssociationDetailPage;
