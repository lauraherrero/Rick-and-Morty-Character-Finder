const CHARACTERS = "https://rickandmortyapi.com/api/character/";

const getDataFromApi = () => fetch(CHARACTERS).then(response => response.json());


export { getDataFromApi };