const storeAccessToken = (accessToken: string) => {
	localStorage.setItem('access_token', accessToken);
};

export default { storeAccessToken };
