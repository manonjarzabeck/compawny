class ContactApiService {
  prefix = "/api/contact";
  selectAll = async () => {
    const request = new Request(
      `${void 0}${this.prefix}`
    );
    const response = await fetch(request);
    const results = await response.json();
    return results;
  };
  insert = async (data) => {
    const request = new Request(
      `${void 0}${this.prefix}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json"
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
  ContactApiService as C
};
