import React, { Component } from 'react';

import CustomButton from '../../../components/UI/CustomButton/CustomButton.component';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner.component';

import { ContactDataContainer, UserInputs } from './ContactData.styles';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price, //not a setup you would use on a real app, you would want to recalculate the price
      customer: {
        name: 'Jeff Davisson',
        address: {
          street: 'Test Street',
          zipcode: '77777',
          country: 'USA',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
    alert('You continue!');
  };

  render() {
    let form = (
      <form>
        <UserInputs type="text" name="name" placeholder="Your Name" />
        <UserInputs type="text" name="email" placeholder="Your Email" />
        <UserInputs type="text" name="street" placeholder="Street" />
        <UserInputs type="text" name="postal" placeholder="Postal Code" />
        <CustomButton btnType="success" clicked={this.orderHandler}>
          ORDER
        </CustomButton>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <ContactDataContainer>
        <h4>Enter your contact information</h4>
        {form}
      </ContactDataContainer>
    );
  }
}

export default ContactData;
