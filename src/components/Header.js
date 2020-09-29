import React from 'react';

function Header() {
	return (
		<header>
			<img className='logo' src='logo192.png' alt='logo' />
			<h2>Comments App</h2>
			<div className='right-content'>
				User name
				{/* <button>Logout</button> */}
			</div>
		</header>
	);
}

export default Header;
