import * as bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export function comparePassword(inputPassword: string, hash: string) { 
    return bcrypt.compare(inputPassword, hash);
}