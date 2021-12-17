import api from './axios';

async function AUTHregister(
    name: string,
    email: string,
    password: string,
    passwordConfirm: string,
    firstName: string,
    lastName: string
) {
    if (password !== passwordConfirm) {
        throw new Error('Passwords do not match');
    }
    const res = await api.post('/auth/register', {
        name,
        email,
        password,
        firstName,
        lastName,
    });
    return res.data;
}

async function AUTHlogin(email: string, password: string) {
    const res = await api.post('/auth/login', {
        email,
        password,
    });
    return res.data;
}

async function AUTHlogout() {
    const res = await api.post('/auth/logout');
    return res.data;
}

export { AUTHregister, AUTHlogin, AUTHlogout };
