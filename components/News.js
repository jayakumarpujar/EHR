import React, { Component } from 'react';


import '../css/news.css';

import '../css/news_responsive.css';
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
class News extends Component {
  render() {
    const index_heroBG=  {
      backgroundImage: `url(${index_hero})`
    }
    return (
      
        <div >
        <div className="news">
						    <Menu></Menu>
		<div className="container">
			<div className="row">
				
				
				<div className="col-lg-8">
					<div className="news_posts">
						
						
						<div className="news_post">
							<div className="news_post_image"><img src={require("../images/news_1.jpg")} alt=""/></div>
							<div className="news_post_content">
								<div className="news_post_date"><a href="#">17 April, 2018</a></div>
								<div className="news_post_title"><a href="#">10 Tips on how to live a healthy life</a></div>
								<div className="news_post_info">
									<ul className="d-flex flex-row align-items-center justify-content-start">
										<li><a href="#">by Jane Smith</a></li>
										<li><a href="#">April 25, 2018</a></li>
									</ul>
								</div>
								<div className="news_post_text">
									<p>DDue to COVID-19 no news are published.</p>
								</div>
								<div className="button news_post_button"><a href="#"><span>read more</span><span>read more</span></a></div>
							</div>
						</div>

						
						<div className="news_post">
							<div className="news_post_image"><img src={require("../images/news_2.jpg")} alt=""/></div>
							<div className="news_post_content">
								<div className="news_post_date"><a href="#">17 April, 2018</a></div>
								<div className="news_post_title"><a href="#">New lab tests that could save your life</a></div>
								<div className="news_post_info">
									<ul className="d-flex flex-row align-items-center justify-content-start">
										<li><a href="#">by Jane Smith</a></li>
										<li><a href="#">April 25, 2018</a></li>
									</ul>
								</div>
								<div className="news_post_text">
									<p>New lab test are going on, they found the anti-dote to the virus.</p>
								</div>
								<div className="button news_post_button"><a href="#"><span>read more</span><span>read more</span></a></div>
							</div>
						</div>

						
						<div className="news_post">
							<div className="news_post_image"><img src={require("../images/news_3.jpg")} alt=""/></div>
							<div className="news_post_content">
								<div className="news_post_date"><a href="#">17 April, 2018</a></div>
								<div className="news_post_title"><a href="#">Maternity can be a wonderful thing</a></div>
								<div className="news_post_info">
									<ul className="d-flex flex-row align-items-center justify-content-start">
										<li><a href="#">by Jane Smith</a></li>
										<li><a href="#">April 25, 2018</a></li>
									</ul>
								</div>
								<div className="news_post_text">
									<p>Donec lorem maximus malesuada lorem max imus mauris. Proin vitae tortor nec risus tristiq ue efficitur. Aliquam luctus est urna, id aliqu am orci tempus sed. Aenean sit amet leo id enim dapibus eleifend. Phasellus ut erat dapibus, tempor sapien non, porta urna. Cras quis ante nibh. Proin tincidunt gravida interdum. Proin sed urna mauris.</p>
								</div>
								<div className="button news_post_button"><a href="#"><span>read more</span><span>read more</span></a></div>
							</div>
						</div>
						
						<div className="pagination">
							<ul className="d-flex flex-row align-items-center justify-content-start">
								<li className="active"><a href="#">01.</a></li>
								<li><a href="#">02.</a></li>
								<li><a href="#">03.</a></li>
							</ul>
						</div>
					</div>
				</div>

				
				<div className="col-lg-4">
					<div className="news_sidebar">

						
						<div className="sidebar_search">
							<form action="#" id="sidebar_search" className="sidebar_search">
								<input type="text" className="sidebar_search_input" placeholder="Search" required="required"/>
								<button className="sidebar_search_button"><i className="fa fa-search" aria-hidden="true"></i></button>
							</form>
						</div>

						
						<div className="sidebar_latest">
							<div className="sidebar_title">Latest News</div>
							<div className="sidebar_latest_container">

								
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
										<div className="latest_title"><a href="news.html">A new way to see things</a></div>
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

						
						<div className="sidebar_categories">
							<div className="sidebar_title">Categories</div>
							<div className="categories">
								<ul>
									<li><a href="#"><div className="d-flex flex-row align-items-center justify-content-start">
										<div>Medicine</div>
										<div className="ml-auto">(11)</div>
									</div></a></li>
									<li><a href="#"><div className="d-flex flex-row align-items-center justify-content-start">
										<div>Pharmacy</div>
										<div className="ml-auto">(23)</div>
									</div></a></li>
									<li><a href="#"><div className="d-flex flex-row align-items-center justify-content-start">
										<div>Uncategorized</div>
										<div className="ml-auto">(6)</div>
									</div></a></li>
									<li><a href="#"><div className="d-flex flex-row align-items-center justify-content-start">
										<div>Doctors</div>
										<div className="ml-auto">(9)</div>
									</div></a></li>
									<li><a href="#"><div className="d-flex flex-row align-items-center justify-content-start">
										<div>Innovations</div>
										<div className="ml-auto">(15)</div>
									</div></a></li>
								</ul>
							</div>
						</div>

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
	
	</div>
	<Footer></Footer>
	</div>
	
    );
  }
}
export default News;
