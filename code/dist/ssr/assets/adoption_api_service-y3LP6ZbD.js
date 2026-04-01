class AdoptionApiService {
  // préfixe de l'API
  prefix = "/api/animal";
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
  // insertion d'un enregistrement
  insert = async (data, token) => {
    const request = new Request(
      `${void 0}${this.prefix}`,
      {
        method: "post",
        /*
        si le formulaire contient un champ de fichier
        la propriété body renvoie un objet formData
        si le formulaire ne contient pas de champ de fichier
        la propriété body renvoie du JSON : JSON.stringify(...)
        ajouter l'en tête Content-Type: application/json
        */
        body: data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
  update = async (data, token) => {
    const request = new Request(
      `${void 0}${this.prefix}`,
      {
        method: "put",
        /* si le formulaire contient un champ de fichier, la propriété body renvoie un objet formData. 
        Si le formulaire ne contient pas de champ de fichier, la propriété renvoie du JSON (JSON stringify)... ajouter l'en-tête Content-Type:  */
        body: data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
  delete = async (data, token) => {
    const request = new Request(
      `${void 0}${this.prefix}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
}
export {
  AdoptionApiService as A
};
