import axios from 'axios';

const api = (domain: string) =>
	axios.create({
		baseURL: `https://pre-onboarding-selection-task.shop/${domain}`,
	});

export default api;
