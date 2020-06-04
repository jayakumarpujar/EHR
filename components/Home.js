import React, { Component } from 'react';

import '../css/main.css';


import Content from '../components/content';
import AboutUs from '../components/AboutUs';
import about_Image from '../images/about.jpg';
import '../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../plugins/OwlCarousel2-2.2.1/animate.css';
import'../css/responsive.css';
import '../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Login from "../components/Login";
import '../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../plugins/OwlCarousel2-2.2.1/animate.css';
import'../css/responsive.css';
import '../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';


class Home extends Component {
  render() {
    const aboutBG=  {
      backgroundImage: `url(${about_Image})`
    }
    return (
		
<div class="home">
		<div class="background_image" style={aboutBG}></div> 
		<Header></Header>

		

		
	</div>


    );
  }
}

export default Home;
