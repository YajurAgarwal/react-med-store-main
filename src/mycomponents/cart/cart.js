import React, { Component } from "react";
import Title from "../title";
import CartColumns from "./cartcolumns";
import Emptycart from "./emptycart";
import { ProductConsumer } from "../context";
import CartList from './cartlist.js'
import CartTotal from './carttotal.js';
class Cart extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {value => {
              const {cart} = value;
              if(cart.length>0){
             return (
                 <>
                 <Title name="your" title="cart"></Title>
                 <CartColumns></CartColumns>
                 <CartList value={value}></CartList>
                 <CartTotal value={value}></CartTotal>
                 </>
             );     
            }
            else{
                return (
                    <Emptycart></Emptycart>
                );
            }
          }}
        </ProductConsumer>
      </>
    );
  }
}

export default Cart;
