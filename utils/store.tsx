import { createContext, Dispatch } from 'react';

interface UserContextInterface {
    user?: any;
    setUser: Dispatch<any>;
}

const userContext = createContext<UserContextInterface>({
    user: null,
    setUser: (user: any) => {},
});

export default userContext;
