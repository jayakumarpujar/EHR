import React, { Component } from 'react';

import '../css/main.css';
import '../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../plugins/OwlCarousel2-2.2.1/animate.css';
import'../css/responsive.css';
import '../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import '../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../plugins/OwlCarousel2-2.2.1/animate.css';
import'../css/responsive.css';
import '../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import {NavLink,Link } from "react-router-dom";
import logo from '../../src/assets/img/brand/myehr2.svg'
class Menu extends Component {
  render() {
	 
   
    return (

		
			<header className="header" id="header">
			<div>
				<div className="header_top">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="header_top_content d-flex flex-row align-items-center justify-content-start">
									<div className="logo">
										<img src={logo} width="120px"/>
									</div>
									<div className="header_top_extra d-flex flex-row align-items-center justify-content-start ml-auto">
										
										<div className="header_top_phone">
											
											<span><Link to="/login"  style={{ color:'#32C69A', fontWeight: 'bold'}}>Login</Link></span>
										</div>
									</div>
									<div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true"></i></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header_nav" id="header_nav_pin">
					<div className="header_nav_inner">
						<div className="header_nav_container">
							<div className="container">
								<div className="row">
									<div className="col">
										<div className="header_nav_content d-flex flex-row align-items-center justify-content-start">
											<nav className="main_nav">
												<ul className="d-flex flex-row align-items-center justify-content-start">
													<li className="active"><NavLink to="/home">Home</NavLink></li>
													<li><NavLink to="/about">About Us</NavLink></li>
													<li><NavLink to="/services">Services</NavLink></li>
													<li><NavLink to="/news">News</NavLink></li>
											
													<li><NavLink to="doctors">Doctors</NavLink></li>
												</ul>
											</nav>
										
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</header>

  

	
    );
  }
}
export default Menu;
