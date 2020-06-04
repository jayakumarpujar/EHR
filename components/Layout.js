import React, { Component } from 'react';

import '../css/main.css';
import index_hero from '../images/index_hero.jpg';


import Menu from './Menu';
import Footer from './Footer';
import Content from './content';
import '../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../plugins/OwlCarousel2-2.2.1/animate.css';
import'../css/responsive.css';
import '../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';




class Layout extends Component {
  render() {
   
    return (
					<div className="super_container">	
					    <Menu></Menu>
						
						<div>{this.props.children}</div>
							
         					 <Footer></Footer>
			
					</div>


	


    );
  }
}
export default Layout;

