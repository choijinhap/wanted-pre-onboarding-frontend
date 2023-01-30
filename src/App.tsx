import React from 'react';
import './App.css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Btn = styled.button`
	background-color: yellow;
	padding: 5px;
`;
function App() {
	return (
		<div className="App">
			<Btn>asd</Btn>
			<header
				className="App-header"
				css={css`
					background-color: red;
				`}
			>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
