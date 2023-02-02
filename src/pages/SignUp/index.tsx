import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import SignForm from 'components/common/SignForm';
import validation from 'utils/validation';
import auth from 'api/auth';
import storage from 'utils/storage';

type FormState = {
	email: string;
	password: string;
};
const initialFormState = {
	email: '',
	password: '',
};
export default function SignUp() {
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
		auth.signUp(
			formState,
			() => navigate('/signin'),
			() => alert('회원가입에 실패했습니다. 다시 시도해주세요')
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
			<h1>회원가입</h1>
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
			<button type="submit" data-testid="signup-button" disabled={btnDisabled}>
				회원가입
			</button>
		</SignForm>
	);
}
