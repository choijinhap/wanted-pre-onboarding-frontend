const checkEmail = (email: string): boolean => {
	const validRegExp = /@/;
	return !!email.match(validRegExp);
};

const checkPassword = (password: string): boolean => {
	const validRegExp = /.{8,}/;
	return !!password.match(validRegExp);
};

export default { checkEmail, checkPassword };
