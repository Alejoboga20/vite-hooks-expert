import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<NavLink className='navbar-brand' to='/'>
				useContext
			</NavLink>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to='/'>
						Home
					</NavLink>

					<NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to='/about'>
						About
					</NavLink>

					<NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to='/login'>
						Login
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};
