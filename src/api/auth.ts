import api from 'api';

const authApi = api('auth/');

const signUp = async (
	body: { email: string; password: string },
	successCallback: () => void,
	failureCallback: () => void
) => {
	const res = await authApi.post('signup', body);
	if (res.status === 201) successCallback();
	else failureCallback();
};

export default { signUp };
