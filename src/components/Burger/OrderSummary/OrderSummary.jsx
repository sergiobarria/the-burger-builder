import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';

class OrderSummary extends Component {
  // this could be a functional component
  componentWillUpdate() {
    console.log('[ORDER SUMMARY] WillUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <header className={classes.TitleContainer}>
          <h3 className={classes.Title}>Your Order</h3>
        </header>
        <div className={classes.Content}>
          <p>A delicious burger with the following ingredients:</p>
          <ul>{ingredientSummary}</ul>
          <p>
            <strong>Total Price:{this.props.price.toFixed(2)} </strong>
          </p>
          <p>Continue to Checkout?</p>
          <Button btnType='Danger' clicked={this.props.purchaseCancelled}>
            CANCEL
          </Button>
          <Button btnType='Success' clicked={this.props.purchaseContinued}>
            CONTINUE
          </Button>
        </div>
      </Aux>
    );
  }
}

export default OrderSummary;
