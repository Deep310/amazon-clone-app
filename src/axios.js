import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-clone-app-2b5b3.cloudfunctions.net/api',
	//'http://localhost:5001/clone-app-2b5b3/us-central1/api',
});

export default instance;
