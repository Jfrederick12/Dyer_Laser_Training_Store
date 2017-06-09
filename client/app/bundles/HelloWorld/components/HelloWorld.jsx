import PropTypes from 'prop-types';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import ProductContainer from './ProductContainer';
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
        name: {
          dvd: 'DVD 1',
          tagline: 'Technique For Laser Crown Lengthening And Lip Lowering Surgery'
        },
        description: ['Improve pocket depths of patients without numbing shots', 'Provide comfort to patients who are shy', 'Eliminate the necessity of shots'],
        tagline: 'Would you be interested to learn that you could predictably improve the pocket depths of your patients and never have to administer numbing shots? In dentistry, we’re always searching for new ways to provide the utmost comfort and reassurance to our patients who fear visiting the dentist. Knowing that shots won’t be necessary is one way to provide peace of mind to your patients.',
        amount: '100',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },
      {
        name: {
          dvd: 'DVD 2',
          tagline: 'Technique For Laser Crown Lengthening And Lip Lowering Surgery'
        },
        amount: '50',
        description: ['Improve pocket depths of patients without numbing shots', 'Provide comfort to patients who are shy', 'Eliminate the necessity of shots'],
        tagline: 'Low-level laser therapy may be the most important laser adjunct to your dental practice. Using this technology makes it possible to reduce pain and swelling in a surgery site and in yours patient’s TMJ.',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },
      {
        name: {
          dvd: 'DVD 3',
          tagline: 'Technique For Laser Crown Lengthening And Lip Lowering Surgery'
        },
        amount: '150',
        description: ['Improve pocket depths of patients without numbing shots', 'Provide comfort to patients who are shy', 'Eliminate the necessity of shots'],
        tagline: 'Dr. Dyer literally wrote the paper on how to use the erbium laser for cosmetic contouring of the bone and soft tissue around teeth.Do you need to improve the appearance of a patient with a high lip line? How about symmetry around your new crowns and veneers?',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },    
      {
        name: {
          dvd: 'DVD 4',
          tagline: 'Periodontal Laser Therapy'
        },
        amount: '250',
        description: ['Improve pocket depths of patients without numbing shots', 'Provide comfort to patients who are shy', 'Eliminate the necessity of shots'],
        tagline: 'Dr. Dyer literally wrote the paper on how to use the erbium laser for cosmetic contouring of the bone and soft tissue around teeth.Do you need to improve the appearance of a patient with a high lip line? How about symmetry around your new crowns and veneers?',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },         
    ]
      // posts: []
    };

  }

  
  // componentDidMount() {
  //   axios.get('/posts.json')
  //     .then((response) => {
  //       this.setState({ posts: response.data })
  //       console.log(this.state.posts)
  //     })   
  // }

  // onToken(token) {
  //   fetch('/charges', {
  //     method: 'POST',
  //     card: JSON.stringify(token),
  //   }).then(token => {
  //     alert(`We are in business, ${token.email}`);
  //   });
  //   console.log(token)
  //   console.log(JSON.stringify(token))
  // }

  // onToken(token) {
  //   console.log(token)
  //   console.log(JSON.stringify(token))
  //   axios.post('/charges', {
  //     card: token.id,
  //     amount: 50,
  //     description: 'test charge for testing sake'
  //   })
  // }      

  // newPost() {
  //   const post = {name: 'this is a new one'}
  //   axios.post('/posts', post)
  //     .then((response) => {
  //       console.log(response)
  //       console.log(data)
  //     })
  // }

  render() {
    return (
      <div className="main-container">
        <div className="product-info">
          <div className="info-box">
            <h3>Purchase Your Dental Laser Training Video Today</h3>
            <p><em>The steps are simple...</em></p>
            <p>Choose which series would best serve you and your practice</p>
            <p>Purchase the sereies through our secure checkout system</p>
            <p>Expect to recieve your video series in 8 to 10 business days.</p>        
          </div>
        </div>
        <div className="product-container">
          {this.state.products.map((product) => {
            return < ProductContainer product={product} />
          })}
        </div>
      </div>
    );
  }
}

    // <Grid style={productStyles.gridContainer}>
    //   <div style={productStyles.mainContainer}>
    //     <Col style={productStyles.productInfo}md={5}>
    //       <h1>Dr Dyers Crazy Lasers are the perfect lasers for every need.</h1>
    //     </Col>
    //     <Col style={productStyles.productContainer}md={6}>
    //       {this.state.products.map((product) => {
    //         return < ProductContainer product={product} />
    //       })}
    //     </Col>
    //   </div>
    // </Grid>
