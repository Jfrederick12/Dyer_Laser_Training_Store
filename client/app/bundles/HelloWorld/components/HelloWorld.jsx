import PropTypes from 'prop-types';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import ProductContainer from './ProductContainer';
import Banner from './Banner';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import {Grid, Col, Row} from 'react-bootstrap'
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
        id: 0,
        name: {
          dvd: 'DVD 1',
          tagline: 'How to Use Your Diode Laser for Periodontal Therapy'
        },
        description: 
          [
            'Biologic basis for using diode lasers in periodontal therapy',
            'Consistent results with this protocol',
            'Leveraging lasers for dental implants',
            'Also accommodates orthodontic, restorative, and endodontic treatments, as well as oral surgery procedures and wound healing',
            'Guidelines for when to use the diode for periodontal treatment and how to use',
            'Periodontal therapy without shots!'
          ],
        tagline: '',
        chargeAmount: 9900,
        amount: 99,
        video: 'mwzN91Xh4As'
      },
      {
        id: 1,
        name: {
          dvd: 'DVD 2',
          tagline: 'Low Level Laser Therapy, Soft Tissue Grafting & Management of Peri-implantitis'
        },
        chargeAmount: 9900,
        amount: 99,
        description: 
        [
          'Reduce pain and swelling',
          'Analgesia and wound healing',
          'Maintain dental implant health, and treat infections',
          'Accelerate healing of extractions and other surgeries with LLLT',
          'Learn two different techniques for Soft Tissue Grafting',
          'Learn how to prevent and manage infections around dental implants'
        ],
        tagline: '',
        video: 'AUxCU2-lqLU'
      },
      {
        id: 2,
        name: {
          dvd: 'DVD 3',
          tagline: 'Laser Crown Lengthening and Lip Lowering Surgery'
        },
        chargeAmount: 9900,
        amount: 99,
        description: 
        [
          'Cosmetic contouring of bone and soft tissue',
          'Improve symmetry around new crowns and veneers',
          'Lip lowering surgery',
          'A step by step protocol for crown lengthening',
          'Minimal surgical approach with consistent results',
          'Your patients can see the result the same day',
          'Little to no bleeding or swelling'
        ],
        tagline: '',
        video: 'oBY3kavnjgU'
      },    
      {
        id: 3,
        name: {
          dvd: 'DVD 4',
          tagline: 'Periodontal Therapy with an Erbium Laser'
        },
        chargeAmount: 14900,
        amount: 149,
        description: 
        [
          'Laser new attachment',
          'Laser regeneration procedures',
          'Minimally Invasive Surgery for deep pockets'
        ],
        tagline: '',
        video: '2cOr1UV6ytw'
      }, 
      {
        id: 4,
        name: {
          dvd: "",
          tagline: 'Complete Video Series (Save $100)'
        },
        chargeAmount: 35000,
        amount: 350,
        description: ['DVD 1, How to Use Your Diode Laser for Periodontal Therapy', 'DVD 2, Low Level Laser Therapy, Soft Tissue Grafting & Management of Peri-implantitis', 'DVD 3, Laser Crown Lengthening & Lip Lowering Surgery', 'DVD 4, Periodontal Therapy with an Erbium Laser'],
        tagline: 'last-dvd',
        video: ''
      }        
    ]
    };

  }

  render() {
    return (
      <div id="top">
        < Navigation />
        < Banner />
        <div id="videos" className="main-container">
          <div className="product-info">
            <div className="info-box">
              <h3>Purchase Your Dental Laser Training Video Today</h3>
              <p>The steps are simple...</p>
              <p>Choose which series would best serve you and your practice</p>
              <p>Purchase the series through our secure checkout system</p>
              <p>Expect to recieve your video series in 8 to 10 business days.</p>
              <p><em>*There is a flat fee of $15.00 for UPS Ground Shipping*</em></p>        
            </div>
          </div>
          <div className="product-container">
            {this.state.products.map((product) => {
              return (
                <div id={product.tagline} key={product.id}>
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