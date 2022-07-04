import { UserContext } from './UserContext';

const user = {
	id: new Date().getTime(),
	name: 'Alejo',
	email: 'alejo@email.com',
};

export const UserProvider = ({ children }) => {
	return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
