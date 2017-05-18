import PropTypes from 'prop-types';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import React from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { 
      name: this.props.name,
      posts: []
    };
  }
  
  componentDidMount() {
    axios.get('/posts.json')
      .then((response) => {
        this.setState({ posts: response.data })
        console.log(this.state.posts)
      })   
  }

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

  onToken(token) {
    // fetch('/product_charges', {
    //   method: 'POST',
    //   card: JSON.stringify(token),
    // }).then(token => {
    //   alert(`We are in business, ${token.email}`);
    // });
    console.log(token)
    console.log(JSON.stringify(token))
    axios.post('/charges', {
      card: token.id,
      amount: 50,
      description: 'test charge for testing sake'
    })
  }      

  newPost() {
    const post = {name: 'this is a new one'}
    axios.post('/posts', post)
      .then((response) => {
        console.log(response)
        console.log(data)
      })
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_rpoW1XqBjFA2qFKKh2RgCPH1"
        />

        <button onClick={this.newPost}>make it</button>

        { this.state.posts.map((post) => {
          return <h1>{post.name}</h1>
        })}

      </div>
    );
  }
}
