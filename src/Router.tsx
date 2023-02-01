import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from 'pages/Main';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Todo from 'pages/Todo';
import Error from 'pages/Error';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/todo" element={<Todo />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}
