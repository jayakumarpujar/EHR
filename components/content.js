import React, { Component } from 'react';

import '../css/main.css';
import '../css/elements.css';
import '../css/elements_responsive.css';
import index_heroBG from '../images/index_hero.jpg';
import CTA1 from '../images/cta_1.jpg';
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




class Content extends Component {
  render() {
    const index_hero=  {
      backgroundImage: `url(${index_heroBG})`
	}
	const CTABG = {
		backgroundImage: `url(${CTA1})`
	}
    return (
<div >
<Menu/>
	
    <div className="banniere" style={index_hero}>
	<div className="home_container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="home_content">
							<div className="home_title">Medical Services that you can trust</div>
							<div className="home_text">We provide a lot of services and we take care of every individual data in our network.</div>
							<div className="button home_button"><a href="#"><span>read more</span><span>read more</span></a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	</div>

			
	<div className="info">
	
		<div className="container">

			<div className="row row-eq-height">

				
				<div className="col-lg-4 info_box_col">
					<div className="info_box">
						<div className="info_image"><img src={require("../images/info_1.jpg")} alt=""/></div>
						<div className="info_content">
							<div className="info_title">Free Consultations</div>
							<div className="info_text">This project is built on open-source tools so the services are free of cost.</div>
							<div className="button info_button"><a href="#"><span>read more</span><span>read more</span></a></div>
						</div>
					</div>
				</div>

				
				<div className="col-lg-4 info_box_col">
					<div className="info_box">
						<div className="info_image"><img src={require("../images/info_2.jpg")} alt=""/></div>
						<div className="info_content">
							<div className="info_title">Emergency Care</div>
							<div className="info_text">Easy to upgrade and portable.</div>
							<div className="button info_button"><a href="#"><span>read more</span><span>read more</span></a></div>
						</div>
					</div>
				</div>

				
				<div className="col-lg-4 info_box_col">
					<div className="info_form_container">
						<div className="info_form_title">Make an Appointment</div>
						<form action="#" className="info_form" id="info_form">
							<select name="info_form_dep" id="info_form_dep" className="info_form_dep info_input info_select">
								<option>Department</option>
								<option>Department</option>
								<option>Department</option>
							</select>
							<select name="info_form_doc" id="info_form_doc" className="info_form_doc info_input info_select">
								<option>Doctor</option>
								<option>Doctor</option>
								<option>Doctor</option>
							</select>
							<input type="text" className="info_input" placeholder="Name" required="required"/>
							<input type="text" className="info_input" placeholder="Phone No"/>
							<button className="info_form_button">make an appointment</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="cta">
	<div className="parallax_background parallax-window" data-parallax="scroll" style={CTABG} data-speed="0.8"></div>
	<div className="container">
		<div className="row">
			<div className="col">
				<div className="cta_container d-flex flex-xl-row flex-column align-items-xl-start align-items-center justify-content-xl-start justify-content-center">
					<div className="cta_content text-xl-left text-center">
						<div className="cta_title">Make an appointment with one of our professional Doctors.</div>
						<div className="cta_subtitle">Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas.</div>
					</div>
					<div className="button cta_button ml-xl-auto"><a href="#"><span>call now</span><span>call now</span></a></div>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="stuff">
		<div className="container">
			<div className="row">

				
				<div className="col-lg-7">
					<div className="faq">
						<div className="faq_title">Faq & Stuff</div>
						<div className="faq_subtitle">read all about it</div>
						<div className="elements_accordions">
							<div className="accordions">

								<div className="accordion_container">
									<div className="accordion d-flex flex-row align-items-center active"><div>Maecenas fermentum tortor id fringilla molestie.</div></div>
									<div className="accordion_panel">
										<div>
											<p>Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing.</p>
										</div>
									</div>
								</div>

								<div className="accordion_container">
									<div className="accordion d-flex flex-row align-items-center"><div>Duis quis lacinia elit. Etiam varius mi eget lacus ultricies elementum</div></div>
									<div className="accordion_panel">
										<div>
											<p>Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing.</p>
										</div>
									</div>
								</div>

								<div className="accordion_container">
									<div className="accordion d-flex flex-row align-items-center"><div>Maecenas fermentum tortor id fringilla molestie.</div></div>
									<div className="accordion_panel">
										<div>
											<p>Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing.</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

				
				<div className="col-lg-5">
					<div className="news">
						<div className="news_title">Latest News</div>
						<div className="news_subtitle">read all about it</div>
						<div className="news_container">

						
							<div className="latest d-flex flex-row align-items-start justify-content-start">
								<div><div className="latest_image"><img src={require("../images/latest_1.jpg")} alt=""/></div></div>
								<div className="latest_content">
									<div className="latest_title"><a href="news.html">A simple blog post</a></div>
									<div className="latest_info">
										<ul className="d-flex flex-row align-items-start justify-content-start">
											<li><a href="#">by Jane Smith</a></li>
											<li><a href="#">April 25, 2018</a></li>
										</ul>
									</div>
									<div className="latest_comments"><a href="#">2 Comments</a></div>
								</div>
							</div>

							
							<div className="latest d-flex flex-row align-items-start justify-content-start">
								<div><div className="latest_image"><img src={require("../images/latest_2.jpg")} alt=""/></div></div>
								<div className="latest_content">
									<div className="latest_title"><a href="news.html">A new way to see things in medicine</a></div>
									<div className="latest_info">
										<ul className="d-flex flex-row align-items-start justify-content-start">
											<li><a href="#">by Jane Smith</a></li>
											<li><a href="#">April 25, 2018</a></li>
										</ul>
									</div>
									<div className="latest_comments"><a href="#">2 Comments</a></div>
								</div>
							</div>

						
							<div className="latest d-flex flex-row align-items-start justify-content-start">
								<div><div className="latest_image"><img src={require("../images/latest_3.jpg")} alt=""/></div></div>
								<div className="latest_content">
									<div className="latest_title"><a href="news.html">Why is Pharma industry so big?</a></div>
									<div className="latest_info">
										<ul className="d-flex flex-row align-items-start justify-content-start">
											<li><a href="#">by Jane Smith</a></li>
											<li><a href="#">April 25, 2018</a></li>
										</ul>
									</div>
									<div className="latest_comments"><a href="#">2 Comments</a></div>
								</div>
							</div>

						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<Footer></Footer>
</div>

    );
  }
}

export default Content;