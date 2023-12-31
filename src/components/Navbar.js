import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import i18next from 'i18next';

const languages = [
	{ name: 'Español', country_code: 'es' },
	{ name: 'Deutsch', country_code: 'de' },
];

const sections = [
	{ label: 'Oficinas', to: '/offices' },
	{ label: 'Vacaciones', to: '/vacations' },
];

function Navbar(props) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoginStatus = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	const currentLngCode = Cookies.get('i18next') || 'es';

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light h-100 d-flex justify-content-between align-items-center'>
			<div className='navbar-left'>
				{/* LINKS */}
				<button
					className='navbar-brand navbar-toggler'
					type='button'
					data-mdb-toggle='collapse'
					data-mdb-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i className='fas fa-bars'></i>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						{/* SECTIONS */}
						{sections.map(({ label, to }, index) => {
							return (
								<li key={index} className='nav-item'>
									<Link key={index} className='nav-link' to={to}>
										{label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className='navbar-middle'>
				{/* BRAND */}
				<div className='navbar-middle d-flex align-items-center mx-auto'>
					<a href='/'>
						<img
							src='./images/logo.png'
							height='80'
							alt='H&D Logo'
							loading='lazy'
						/>
					</a>
				</div>
			</div>
			<div className='navbar-right'>
				<div className='container'>
					<div className='row d-flex align-items-center'>
						<div className='col'>
							{/* DARK MODE */}
							<div className='dropdown'>
								<a
									className='text-reset me-3'
									href='#'
									role='button'
									aria-expanded='false'
									onClick={() => {
										setIsDarkMode(!isDarkMode);
									}}>
									{isDarkMode ? (
										<i className='fas fa-moon' style={{ color: '#000000' }} />
									) : (
										<i className='fas fa-sun' style={{ color: '#000000' }} />
									)}
								</a>
							</div>
						</div>
						<div className='col'>
							{/* LANGUAGES */}
							<div className='dropdown'>
								<a
									className='text-reset me-3 dropdown-toggle hidden-arrow'
									href='#'
									id='navbarDropdownMenuLink'
									role='button'
									data-mdb-toggle='dropdown'
									aria-expanded='false'>
									<i className='fas fa-globe' style={{ color: '#000000' }}></i>
								</a>
								<ul
									className='dropdown-menu dropdown-menu-end'
									aria-labelledby='navbarDropdownMenuLink'>
									{languages.map(({ name, country_code }, index) => {
										return (
											<li key={index}>
												<button
													key={index}
													className='dropdown-item'
													onClick={() => {
														i18next.changeLanguage(country_code);
														window.location.reload();
													}}
													disabled={country_code === currentLngCode}>
													<span
														key={index}
														className={`fi fi-${country_code} fis mx-3`}
														style={{
															opacity:
																country_code === currentLngCode ? 0.5 : 1,
														}}
													/>

													{name}
												</button>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className='col'>
							<div className='d-grid gap-3'>
								{isLoggedIn ? (
									<div className='d-flex justify-content-between align-items-center'>
										<img
											src='./images/yvonne.jpeg'
											alt='Bootstrap'
											width='45'
											height='45'
										/>

										<button
											className='btn btn-danger'
											type='button'
											style={{ minWidth: '100px' }}
											onClick={() => {
												setIsLoggedIn(!isLoggedIn);
											}}>
											salir
										</button>
									</div>
								) : (
									<div>
										<button
											className='btn btn-primary'
											type='button'
											style={{ minWidth: '100px' }}
											onClick={() => {
												setIsLoggedIn(!isLoggedIn);
											}}>
											acceso
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
					{/* BUTTONS */}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
