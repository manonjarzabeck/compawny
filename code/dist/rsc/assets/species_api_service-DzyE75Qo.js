class SpeciesApiService {
  // préfixe de l'API
  prefix = "/api/species";
  // selection de tous les enregistrements
  selectAll = async () => {
    const request = new Request(
      `${void 0}${this.prefix}`
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
  selectOne = async (id) => {
    const request = new Request(
      `${void 0}${this.prefix}/${id}`
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
}
export {
  SpeciesApiService as S
};
