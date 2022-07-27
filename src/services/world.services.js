import service from './service';

const URL = '/world';


const addNewWorldService = (newWorld) => {
	return service.post(`${URL}/`, newWorld);
};

const getAllProjectsService = () => {
	return service.get(`${URL}/`);
};


export { getAllProjectsService, addNewWorldService, };
