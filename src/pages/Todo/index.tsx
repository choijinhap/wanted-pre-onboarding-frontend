import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'utils/storage';

export default function Todo() {
	const navigate = useNavigate();
	React.useEffect(() => {
		if (!storage.checkAccessToken()) navigate('/signin');
	}, []);
	return <div>Todo</div>;
}
