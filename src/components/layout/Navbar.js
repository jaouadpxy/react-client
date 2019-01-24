import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-success mb-4">
				<div className="container">
					<a className="navbar-brand" href="home.html">
						Home
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="profiles.html">
									{' '}
									Services
								</a>
							</li>
						</ul>

						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link" href="register.html">
									Contact
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="login.html">
									Quote
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
export default Navbar;
