// pages/actions/action_detail.tsx
import { use } from "react";
import type { Animal } from "../../../../models/animal";
import AdoptionDetailsContent from "../../../components/adoption-sos/adoption-details/adoption_details_content";
import Seo from "../../../components/seo/seo";
import type { AdoptionDetailsParams } from "../../../models/params/adoption_details_params";
import AdoptionApiService from "../../../services/adoption_api_service";

const AdoptionDetailPage = ({ params }: AdoptionDetailsParams) => {
	const { id } = params;
	// récuperer les données
	const result = use(new AdoptionApiService().selectOne(id));

	return (
		<>
			<Seo
				title="Adoptions"
				description="Détails des Adoptions SOS"
				url="/adoptions/:id"
			/>
			<AdoptionDetailsContent data={result.data as Animal} />
		</>
	);
};
export default AdoptionDetailPage;
