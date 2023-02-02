import * as React from 'react';

import SignForm from 'components/common/SignForm';
import validation from 'utils/validation';
import auth from 'api/auth';
import storage from 'utils/storage';
import { useNavigate } from 'react-router-dom';

type FormState = {
	email: string;
	password: string;
};
const initialFormState = {
	email: '',
	password: '',
};
export default function SignIn() {
	const [formState, setFormState] = React.useState<FormState>(initialFormState);
	const [btnDisabled, setBtnDisabled] = React.useState(true);
	const navigate = useNavigate();

	const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};
	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		auth.signIn(
			formState,
			(accessToken) => {
				storage.storeAccessToken(accessToken);
				navigate('/todo');
			},
			(msg) => {
				alert(msg);
			}
		);
	};
	React.useEffect(() => {
		if (storage.checkAccessToken()) navigate('/todo');
	}, []);
	React.useEffect(() => {
		if (
			!validation.checkEmail(formState.email) ||
			!validation.checkPassword(formState.password)
		) {
			setBtnDisabled(true);
			return;
		}
		setBtnDisabled(false);
	}, [formState]);

	return (
		<SignForm onSubmit={onFormSubmit} noValidate>
			<h1>로그인</h1>
			<label htmlFor="email">
				<span>이메일</span>
				<input
					type="email"
					id="email"
					data-testid="email-input"
					value={formState.email}
					onChange={onFormInputChange}
				/>
			</label>
			<label htmlFor="password">
				<span>비밀번호</span>
				<input
					type="password"
					id="password"
					data-testid="password-input"
					value={formState.password}
					onChange={onFormInputChange}
				/>
			</label>
			<button type="submit" data-testid="signin-button" disabled={btnDisabled}>
				로그인
			</button>
		</SignForm>
	);
}
