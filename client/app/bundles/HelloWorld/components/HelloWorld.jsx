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
        description: 'Would you be interested to learn that you could predictably improve the pocket depths of your patients and never have to administer numbing shots? In dentistry, we’re always searching for new ways to provide the utmost comfort and reassurance to our patients who fear visiting the dentist. Knowing that shots won’t be necessary is one way to provide peace of mind to your patients.Dr. Dyer’s protocol for implementing the diode lasers for periodontal treatment addresses one of the main problems a lot of dentists have with using lasers: potentially inconsistent results. By applying the practices from this series, we can assure future consistency and confidence in your treatment.In this video, Dr. Dyer will provide you with the biologic basis for using diode lasers in periodontal therapy. He also describes when to use it and the results to expect. More importantly, he explains when not to use the diode laser as well. He reviews the practical considerations of how to implement the diode laser into your hygiene program and in your overall periodontal treatment. This guide will give you step-by-step instructions on the protocol. Dr. Dyer also includes settings for different types of diode lasers.This series also gives you the opportunity to learn how to use the diode around dental implants. From placement to recovery, you will gain a knowledgeable understanding of the process. Also, the diode laser is invaluable in shaping the soft tissue around both teeth and implants for impressions and seating restorations.Even more, you will find that your diode laser has many other applications for other types of treatment, including orthodontic treatment, periodontal treatment, restorative treatment, endodontic treatment, oral surgery procedure, and wound healing.Learning how to implement the diode laser in your practice opens up the types of treatment you offer and helps you to be at the forefront of current industry standards.',
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
        description: 'Low-level laser therapy may be the most important laser adjunct to your dental practice. Using this technology makes it possible to reduce pain and swelling in a surgery site and in yours patient’s TMJ.Did a procedure require your patient to hold their mouth open for an extended time? Now you can prevent or relieve the achiness and tenderness in their muscles and joint. Did a tooth extraction or periodontal surgery result in trauma at the surgical site? Now you can apply low-level laser therapy (LLLT) and reduce both swelling and pain. And at the same time, you are stimulating faster healing.LLLT is a photochemical effect similar to photosynthesis in plants whereby light energy is absorbed and exerts a chemical change. The primary effects lead to a cascade of indirect effects on cell signaling, such as exchange of calcium ions, secretion of growth factors, activation of enzymes, and other secondary messengers.This video provides step-by-step instructions on how to use your diode for both analgesia and improved wound healing. In addition, you will also see how to use your laser for trigger point therapy to relax muscles.This video also delves into how lasers can improve how you provide dental implants, which are a growing part of every dentist’s practice. Whether you place dental implants or restore dental implants, you will need to know how to keep dental implants healthy. Dr. Dyer provides instructions on site preparation with both soft and hard tissue grafting techniques. These are the steps, which prevent your patients from having problems with their implants down the road. Then, Dr. Dyer provides guidance on treating dental implant infections. Between 25% and 50% of the dental implants you see in your patients will develop some level of gum infection. With this instruction, you will be able to intercept early problems and deal effectively with more advanced infections.',
        tagline: 'Low-level laser therapy may be the most important laser adjunct to your dental practice. Using this technology makes it possible to reduce pain and swelling in a surgery site and in yours patient’s TMJ.',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },
      {
        name: {
          dvd: 'DVD 3',
          tagline: 'Technique For Laser Crown Lengthening And Lip Lowering Surgery'
        },
        amount: '150',
        description: 'Dr. Dyer literally wrote the paper on how to use the erbium laser for cosmetic contouring of the bone and soft tissue around teeth.Do you need to improve the appearance of a patient with a high lip line? How about symmetry around your new crowns and veneers? Some patients simply have short looking teeth. Fortunately, cosmetic recontouring can be performed in a systematic approach to address all of these needs.The challenge of avoiding rebound after crown lengthening is frustrating for both patients and their dentists. No dentist wants a patient to come back with red, inflamed gums just a few weeks after a crown lengthening procedure. As you’ll learn, the secret is to use the biologic zone to your advantage.Would you also like to understand the steps for lowering the level of your patient’s upper lip when they smile? Dr. Dyer will provide you with instructions on lip lowering surgeries, including the indications, diagnostics, and what to expect from lip lowering surgery.In this video, you are shown how to evaluate and maintain this zone for consistent results that do not change over time, a step-by-step protocol for each indication. Learn how to go from diagnosis to treatment planning. And then have the confidence to deliver a predictable outcome time after time.The approaches explained are minimally invasive. So what instrumentation and aids do you need? By following Dr. Dyer’s instruction, you will learn to recontour the soft tissue to frame the teeth ideally. The supporting bone will also need to be contoured to support the soft tissue. Learn how to easily manage bone contouring to create long lasting results. Is flap access needed? You will know the answers with these easy to understand guidelines.',
        tagline: 'Dr. Dyer literally wrote the paper on how to use the erbium laser for cosmetic contouring of the bone and soft tissue around teeth.Do you need to improve the appearance of a patient with a high lip line? How about symmetry around your new crowns and veneers?',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },    
      {
        name: {
          dvd: 'DVD 4',
          tagline: 'Periodontal Laser Therapy'
        },
        amount: '250',
        description: 'Dr. Dyer literally wrote the paper on how to use the erbium laser for cosmetic contouring of the bone and soft tissue around teeth.Do you need to improve the appearance of a patient with a high lip line? How about symmetry around your new crowns and veneers? Some patients simply have short looking teeth. Fortunately, cosmetic recontouring can be performed in a systematic approach to address all of these needs.The challenge of avoiding rebound after crown lengthening is frustrating for both patients and their dentists. No dentist wants a patient to come back with red, inflamed gums just a few weeks after a crown lengthening procedure. As you’ll learn, the secret is to use the biologic zone to your advantage.Would you also like to understand the steps for lowering the level of your patient’s upper lip when they smile? Dr. Dyer will provide you with instructions on lip lowering surgeries, including the indications, diagnostics, and what to expect from lip lowering surgery.In this video, you are shown how to evaluate and maintain this zone for consistent results that do not change over time, a step-by-step protocol for each indication. Learn how to go from diagnosis to treatment planning. And then have the confidence to deliver a predictable outcome time after time.The approaches explained are minimally invasive. So what instrumentation and aids do you need? By following Dr. Dyer’s instruction, you will learn to recontour the soft tissue to frame the teeth ideally. The supporting bone will also need to be contoured to support the soft tissue. Learn how to easily manage bone contouring to create long lasting results. Is flap access needed? You will know the answers with these easy to understand guidelines.',
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
