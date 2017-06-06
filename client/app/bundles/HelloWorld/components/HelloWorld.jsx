import PropTypes from 'prop-types';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import ProductContainer from './ProductContainer';
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
        name: 'video one',
        amount: '100',
        description: 'this is video one',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },
      {
        name: 'video two',
        amount: '50',
        description: 'this is video two',
        video: 'https://www.youtube.com/embed/K-hfJkLqMLg'
      },
      {
        name: 'video three',
        amount: '150',
        description: 'this is video three',
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
      <div>
        {this.state.products.map((product) => {
          return < ProductContainer product={product} />
        })}

      </div>
    );
  }
}
