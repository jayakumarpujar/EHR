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
class AboutUs extends Component {
  render() {
    const index_heroBG=  {
      backgroundImage: `url(${index_hero})`
    }
    return (
      
      <div >
      <div className="about">
      					    <Menu></Menu>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title">A few words about us</div>
            <div className="section_subtitle">too choose from</div>
          </div>
        </div>
        <div className="row about_row row-eq-height">
          <div className="col-lg-4">
            <div className="logo">
              <a href="#">health<span>+</span></a>	
            </div>
            <div className="about_text_highlight">Hey people, this project is developed to protect EHR.</div>
            <div className="about_text">
              <p>The guide is very clear about the project that the blockchain is the best choice.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about_text_2">
              <p>Ehr contains highly sensitive data like patient healthe records, physical and mental conditions of the patient. It also consists of the patient personal information,,,.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about_image"><img src={require("../images/about_1.jpg")} alt=""/></div>
          </div>
        </div>
        
      </div>
      
    </div>
    <Footer></Footer>
    </div>
  

	
    );
  }
}
export default AboutUs;
