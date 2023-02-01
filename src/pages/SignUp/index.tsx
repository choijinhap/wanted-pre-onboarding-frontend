import styled from '@emotion/styled';
import * as React from 'react';

type FormState = {
	email: string;
	password: string;
};
const initialFormState = {
	email: '',
	password: '',
};
const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 500px;
	justify-content: center;
	align-items: center;
`;
export default function SignUp() {
	const [formState, setFormState] = React.useState<FormState>(initialFormState);
	const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};
	const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<Form onSubmit={onFormSubmit}>
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
			<button type="submit" data-testid="signup-button">
				회원가입
			</button>
		</Form>
	);
}
