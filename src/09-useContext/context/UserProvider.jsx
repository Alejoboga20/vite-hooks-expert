import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const handleLoginUser = () => {
		setUser({
			id: new Date().getTime(),
			name: 'Alejo',
			email: 'alejo@email.com',
		});
	};

	return <UserContext.Provider value={{ user, handleLoginUser }}>{children}</UserContext.Provider>;
};
