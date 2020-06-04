import React, { Component } from 'react';


import '../css/about.css';

import '../css/about_responsive.css';
import index_hero from '../images/index_hero.jpg';

import '../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../plugins/OwlCarousel2-2.2.1/animate.css';
import'../css/responsive.css';
import '../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';


import '../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../plugins/OwlCarousel2-2.2.1/animate.css';
import'../css/responsive.css';
import '../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import Menu from './Menu';
import Footer from './Footer';
class Doctors extends Component {
  render() {
    const index_heroBG=  {
      backgroundImage: `url(${index_hero})`
    }
    return (
      
    <div  >
    <div className="doctors">
				    <Menu></Menu>
		<div className="doctors_image"><img src={require("../images/doctors.jpg")} alt=""/></div>
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_title">Our Doctors</div>
					<div className="section_subtitle">to choose from</div>
				</div>
			</div>
			<div className="row doctors_row">
				
				
				<div className="col-xl-3 col-md-6">
					<div className="doctor">
						<div className="doctor_image"><img src={require("../images/doc_1.jpg")} alt=""/></div>
						<div className="doctor_content">
							<div className="doctor_name"><a href="#">Mohan Kanna</a></div>
							<div className="doctor_title">Surgeon</div>
							<div className="doctor_link"><a href="#">+</a></div>
						</div>
					</div>
				</div>

				
				<div className="col-xl-3 col-md-6">
					<div className="doctor">
						<div className="doctor_image"><img src={require("../images/doc_2.jpg")} alt=""/></div>
						<div className="doctor_content">
							<div className="doctor_name"><a href="#">Chris Jones</a></div>
							<div className="doctor_title">Surgeon</div>
							<div className="doctor_link"><a href="#">+</a></div>
						</div>
					</div>
				</div>

				
				<div className="col-xl-3 col-md-6">
					<div className="doctor">
						<div className="doctor_image"><img src={require("../images/doc_3.jpg")} alt=""/></div>
						<div className="doctor_content">
							<div className="doctor_name"><a href="#">Jessi </a></div>
							<div className="doctor_title">Surgeon</div>
							<div className="doctor_link"><a href="#">+</a></div>
						</div>
					</div>
				</div>

				
				<div className="col-xl-3 col-md-6">
					<div className="doctor">
						<div className="doctor_image"><img src={require("../images/doc_4.jpg")} alt=""/></div>
						<div className="doctor_content">
							<div className="doctor_name"><a href="#">Madde James</a></div>
							<div className="doctor_title">Surgeon</div>
							<div className="doctor_link"><a href="#">+</a></div>
						</div>
					</div>
				</div>

				
				<div className="col-xl-3 col-md-6">
					<div className="doctor">
						<div className="doctor_image"><img src={require("../images/doc_5.jpg")} alt=""/></div>
						<div className="doctor_content">
							<div className="doctor_name"><a href="#">Michael Smith</a></div>
							<div className="doctor_title">Surgeon</div>
							<div className="doctor_link"><a href="#">+</a></div>
						</div>
					</div>
				</div>

				
				<div className="col-xl-3 col-md-6">
					<div className="doctor">
						<div className="doctor_image"><img src={require("../images/doc_6.jpg")} alt=""/></div>
						<div className="doctor_content">
							<div className="doctor_name"><a href="#">Cherry Man</a></div>
							<div className="doctor_title">Laboratory</div>
							<div className="doctor_link"><a href="#">+</a></div>
						</div>
					</div>
				</div>

				
				<div className="col-xl-3 col-md-6">
					<div className="doctor">
						<div className="doctor_image"><img src={require("../images/doc_7.jpg")} alt=""/></div>
						<div className="doctor_content">
							<div className="doctor_name"><a href="#">Jonny Jin</a></div>
							<div className="doctor_title">Pediatrist</div>
							<div className="doctor_link"><a href="#">+</a></div>
						</div>
					</div>
				</div>

				
				<div className="col-xl-3 col-md-6">
					<div className="doctor">
						<div className="doctor_image"><img src={require("../images/doc_8.jpg")} alt=""/></div>
						<div className="doctor_content">
							<div className="doctor_name"><a href="#">Lote James</a></div>
							<div className="doctor_title">Eye Doctor</div>
							<div className="doctor_link"><a href="#">+</a></div>
						</div>
					</div>
				</div>

			</div>
			<div className="row">
				<div className="col">
					<div className="button doctors_button ml-auto mr-auto"><a href="#"><span>see all doctors</span><span>see all doctors</span></a></div>
				</div>
			</div>
		</div>

	</div>
	<Footer></Footer>
	</div>


	
    );
  }
}
export default Doctors;
