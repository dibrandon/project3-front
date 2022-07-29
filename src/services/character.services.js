import service from './service';

const URL = '/character';

const getAllCharactersService = () => {
	return service.get(`${URL}/`);
};
const getCharacterDetailsService = (id) => {
	return service.get(`${URL}/${id}`);
};

const addNewCharacterService = (newCharacter) => {
	return service.post(`${URL}/`, newCharacter);
};

export { getAllCharactersService, addNewCharacterService, getCharacterDetailsService };