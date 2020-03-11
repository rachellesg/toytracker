import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import axios from 'axios';

class App extends React.Component {
  getInformation() {
    const url = '/products.json';
    axios
      .get(url)
      .then(response => {
        const data = response.data;

        const { searchQuery } = this.state;
        let filteredProducts = data.filter(product => {
          return product.name.toLowerCase().includes(searchQuery);
        });
        this.setState({ allProducts: response.data });
        this.setState({ products: filteredProducts });
        // this.setState({ posts: data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log(this.props.poo)
    return (
      <div>
        <Form />
        Welcome.
        {this.props.poo}
      </div>
    );
  }
}

export default hot(module)(App);
