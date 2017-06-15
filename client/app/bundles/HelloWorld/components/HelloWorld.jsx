import PropTypes from 'prop-types';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import ProductContainer from './ProductContainer';
import Banner from './Banner';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import {Grid, Col, Row, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import React from 'react';



export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { 
      products: [
      {
        name: {
          dvd: 'DVD 1',
          tagline: 'Technique For Laser Crown Lengthening And Lip Lowering Surgery'
        },
        description: ['Improve pocket depths of patients without numbing shots', 'Provide comfort to patients who are shy', 'Eliminate the necessity of shots'],
        tagline: 'Would you be interested to learn that you could predictably improve the pocket depths of your patients and never have to administer numbing shots? In dentistry, we’re always searching for new ways to provide the utmost comfort and reassurance to our patients who fear visiting the dentist. Knowing that shots won’t be necessary is one way to provide peace of mind to your patients.',
        chargeAmount: 20000,
        amount: 200,
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },
      {
        name: {
          dvd: 'DVD 2',
          tagline: 'Technique For Laser Crown Lengthening And Lip Lowering Surgery'
        },
        chargeAmount: 20000,
        amount: 200,
        description: ['Improve pocket depths of patients without numbing shots', 'Provide comfort to patients who are shy', 'Eliminate the necessity of shots'],
        tagline: 'Low-level laser therapy may be the most important laser adjunct to your dental practice. Using this technology makes it possible to reduce pain and swelling in a surgery site and in yours patient’s TMJ.',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },
      {
        name: {
          dvd: 'DVD 3',
          tagline: 'Technique For Laser Crown Lengthening And Lip Lowering Surgery'
        },
        chargeAmount: 20000,
        amount: 200,
        description: ['Improve pocket depths of patients without numbing shots', 'Provide comfort to patients who are shy', 'Eliminate the necessity of shots'],
        tagline: 'Dr. Dyer literally wrote the paper on how to use the erbium laser for cosmetic contouring of the bone and soft tissue around teeth.Do you need to improve the appearance of a patient with a high lip line? How about symmetry around your new crowns and veneers?',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },    
      {
        name: {
          dvd: 'DVD 4',
          tagline: 'Periodontal Laser Therapy'
        },
        chargeAmount: 20000,
        amount: 200,
        description: ['Improve pocket depths of patients without numbing shots', 'Provide comfort to patients who are shy', 'Eliminate the necessity of shots'],
        tagline: 'Dr. Dyer literally wrote the paper on how to use the erbium laser for cosmetic contouring of the bone and soft tissue around teeth.Do you need to improve the appearance of a patient with a high lip line? How about symmetry around your new crowns and veneers?',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },         
    ]
    };

  }

  render() {
    return (
      <div>

        < Navigation />
        <a id="videos"></a>
        < Banner />
        <div className="main-container">
          <div className="product-info">
            <div className="info-box">
              <h3>Purchase Your Dental Laser Training Video Today</h3>
              <p><em>The steps are simple...</em></p>
              <p>Choose which series would best serve you and your practice</p>
              <p>Purchase the series through our secure checkout system</p>
              <p>Expect to recieve your video series in 8 to 10 business days.</p>
              <p><em>*There is a flat fee of $15.00 for UPS Ground Shipping*</em></p>        
            </div>
          </div>
          <div className="product-container">
            {this.state.products.map((product) => {
              return (
                <div key={product.name.dvd}>
                  < ProductContainer product={product} />
                </div>
              )
            })}
          </div>
        </div>
        < About />
        < Contact />
      </div>
    );
  }
}