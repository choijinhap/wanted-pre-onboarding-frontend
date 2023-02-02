const storeAccessToken = (accessToken: string) => {
	localStorage.setItem('access_token', accessToken);
};

const checkAccessToken = () => !!localStorage.getItem('access_token');

export default { storeAccessToken, checkAccessToken };
