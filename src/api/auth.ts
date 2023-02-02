import api from 'api';
import { AxiosError } from 'axios';

const authApi = api('auth/');

const signUp = async (
	body: { email: string; password: string },
	successCallback: () => void,
	failureCallback: (msg: string) => void
) => {
	try {
		const res = await authApi.post('signup', body);
		if (res.status === 201) successCallback();
	} catch (err) {
		const msg = (err as AxiosError<{ message: string }>).response?.data.message;
		failureCallback(msg || '회원가입 처리중 에러가 발생했습니다.');
	}
};

const signIn = async (
	body: { email: string; password: string },
	successCallback: (accessToken: string) => void,
	failureCallback: (msg: string) => void
) => {
	try {
		const res = await authApi.post('signin', body);
		if (res.status === 200) {
			const accessToken = res.data.access_token;
			successCallback(accessToken);
		}
	} catch (err) {
		const msg = (err as AxiosError<{ message: string }>).response?.data.message;
		failureCallback(msg || '로그인 처리중 에러가 발생했습니다.');
	}
};

export default { signUp, signIn };
