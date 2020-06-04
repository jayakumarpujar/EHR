import React, { Component } from 'react';

import '../css/services.css';
import '../css/main.css';
import '../css/services_responsive.css';
import index_hero from '../images/index_hero.jpg';


import '../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../plugins/OwlCarousel2-2.2.1/animate.css';
import'../css/responsive.css';
import '../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import Menu from './Menu';
import Footer from './Footer';



class Services extends Component {
  render() {
    const index_heroBG=  {
      backgroundImage: `url(${index_hero})`
    }
    return (
    <div>
        <div className="services">
        <Menu></Menu>
		    <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="section_title">Our Services</div>
                        <div className="section_subtitle">to choose from</div>
                    </div>
                </div>
                <div className="row icon_boxes_row">
                    
                    
                    <div className="col-xl-4 col-lg-6">
                        <div className="icon_box">
                            <div className="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
                                <div className="icon_box_icon"><img src={require("../images/icon_1.svg")} alt=""/></div>
                                <div className="icon_box_title">Cardiology</div>
                            </div>
                            <div className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
                        </div>
                    </div>

                   
                    <div className="col-xl-4 col-lg-6">
                        <div className="icon_box">
                            <div className="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
                                <div className="icon_box_icon"><img src={require("../images/icon_2.svg")} alt=""/></div>
                                <div className="icon_box_title">Gastroenterology</div>
                            </div>
                            <div className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
                        </div>
                    </div>

                    
                    <div className="col-xl-4 col-lg-6">
                        <div className="icon_box">
                            <div className="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
                                <div className="icon_box_icon"><img src={require("../images/icon_3.svg")} alt=""/></div>
                                <div className="icon_box_title">Medical Lab</div>
                            </div>
                            <div className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
                        </div>
                    </div>

                    
                    <div className="col-xl-4 col-lg-6">
                        <div className="icon_box">
                            <div className="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
                                <div className="icon_box_icon"><img src={require("../images/icon_4.svg")} alt=""/></div>
                                <div className="icon_box_title">Dental Care</div>
                            </div>
                            <div className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
                        </div>
                    </div>

                    
                    <div className="col-xl-4 col-lg-6">
                        <div className="icon_box">
                            <div className="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
                                <div className="icon_box_icon"><img src={require("../images/icon_5.svg")} alt=""/></div>
                                <div className="icon_box_title">Surgery</div>
                            </div>
                            <div className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
                        </div>
                    </div>

                    
                    <div className="col-xl-4 col-lg-6">
                        <div className="icon_box">
                            <div className="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
                                <div className="icon_box_icon"><img src={require("../images/icon_6.svg")} alt=""/></div>
                                <div className="icon_box_title">Neurology</div>
                            </div>
                            <div className="icon_box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris.</div>
                        </div>
                    </div>

			    </div>
                <div className="row">
                    <div className="col">
                        <div className="button services_button ml-auto mr-auto"><a href="#"><span>read more</span><span>read more</span></a></div>
                    </div>
                </div>
		    </div>
	    </div>
        
        <Footer></Footer>  
        
    </div>  

	


    );
  }
}
export default Services;

