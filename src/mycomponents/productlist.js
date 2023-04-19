import React, { Component } from 'react';
import Product from './product.js';
import Title  from "./title.js";
import {ProductConsumer} from './context';
class Productlist extends Component {
    
    render() {
        return (
            <>
            <React.Fragment>
                <div className="py-5">
                    <div className="Container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                    return value.products.map((product)=>{
                                        return <Product  key={product.id} product={product}/>;
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            </>
        );
    }
}

export default Productlist;
