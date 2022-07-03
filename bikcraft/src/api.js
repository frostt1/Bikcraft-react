const BASE_URL = "http://localhost:3000/bicicletas";

export const api = {
    getItems: async () => {
        const response = await fetch(`${BASE_URL}`);
        const json = await response.json();

        return json;
    },
};
