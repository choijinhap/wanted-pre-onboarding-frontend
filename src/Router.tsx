import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<div>main</div>} />
			<Route path="/signup" element={<div>signup</div>} />
			<Route path="/signin" element={<div>signin</div>} />
		</Routes>
	);
}
