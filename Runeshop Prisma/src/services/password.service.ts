import bcrypt from 'bcrypt';

const SALT_Rounds: number = 10;

export const hashPassword = async (
	contraseña: string,
): Promise<string> => {
	return await bcrypt.hash(contraseña, SALT_Rounds);
};

export const comparePasswords = async (
	contraseña: string,
	hash: string,
): Promise<boolean> => {
	return await bcrypt.compare(contraseña, hash);
};
