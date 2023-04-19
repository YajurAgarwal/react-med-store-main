// context API is used for the purpose of storing and serving the data
import axios from "axios";
import React, { Component } from "react";
import { Link} from "react-router-dom";
const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: {},
    cartsubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.modalProduct = product;
    axios
      .post(
        process.env.REACT_APP_BASE_URL+`users/me/cart/add`,
        {
          productId: product.id,
          count: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
        }
      )
      .then((res) => {
      })
      .catch((e) => {
      });
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  // since the objcets in javascripts are passed by refernece so change in product will reflect in data.js

  UNSAFE_componentWillMount() {
    let obj = JSON.parse(localStorage.getItem('user'));
    if(obj === null){
      return;
    }
    this.state.token = obj.token;
    axios
    .get(process.env.REACT_APP_BASE_URL + `products`)
    .then((res) => {
      const allProducts = res.data;
      this.setProducts(allProducts);
      axios
      .get(process.env.REACT_APP_BASE_URL + `users/me`, {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
          })
          .catch((e) => {
          });
        axios
          .get(process.env.REACT_APP_BASE_URL+`users/me/cart`, {
            headers: {
              Authorization: `Bearer ${this.state.token}`,
            },
          })
          .then((res) => {
            this.setCart(res.data);
          });
      })
      .catch((err) => console.log(err));
  }
  setCart = (cardIds) => {
    let temp = [];
    let cartsubtotal = 0; 
    cardIds.forEach((id) => {
      this.state.products.forEach((product) => {
        if (product.id === id.productId) {
          product.count = id.count;
          product.inCart = true;
          product.total = product.price * product.count;
          cartsubtotal += product.total;
          temp = [...temp, product];
        }
      });
    });
    this.setState(() => {
      this.state.cartsubTotal = cartsubtotal;
      this.state.tax = cartsubtotal * 0.1;
      this.state.cartTotal = cartsubtotal + (cartsubtotal* 0.1);
      return { cart: temp  };
    });
  };
  
  setProducts = (products) => {
    let temp = [];
    products.forEach((item) => {
      const singleitem = { ...item, inCart: false ,count : 0 ,total : 0};
      temp = [...temp, singleitem];
    });
    this.setState(() => {
      return { products: temp };
    });
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increament = (id) => {
    let tempcart = [...this.state.cart];
    const selectedproduct = tempcart.find((item) => item.id === id);
    let index = tempcart.indexOf(selectedproduct);
    const product = tempcart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;
    axios
      .post(
        process.env.REACT_APP_BASE_URL+`users/me/cart/update`,
        {
          productId: product.id,
          count: product.count,
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
        }
      )
      .then((res) => {
      })
      .catch((e) => {
      });
    this.setState(
      () => {
        return { cart: [...tempcart] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  decreament = (id) => {
    let tempcart = [...this.state.cart];
    const selectedproduct = tempcart.find((item) => item.id === id);
    let index = tempcart.indexOf(selectedproduct);
    const product = tempcart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      axios
        .post(
          process.env.REACT_APP_BASE_URL+`users/me/cart/delete`,
          {
            productId: product.id,
          },
          {
            headers: {
              Authorization: `Bearer ${this.state.token}`,
            },
          }
        )
        .then((res) => {
        })
        .catch((e) => {
        });
      this.removeItem(id);
    } else {
      product.total = product.price * product.count;
      axios
        .post(
          process.env.REACT_APP_BASE_URL+`users/me/cart/update`,
          {
            productId: product.id,
            count: product.count,
          },
          {
            headers: {
              Authorization: `Bearer ${this.state.token}`,
            },
          }
        )
        .then((res) => {
        })
        .catch((e) => {
        });
      this.setState(
        () => {
          return { cart: [...tempcart] };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempproduct = [...this.state.products];
    let tempcart = [...this.state.cart];
    tempcart = tempcart.filter((item) => item.id !== id);
    const index = tempproduct.indexOf(this.getItem(id));
    let removedproduct = tempproduct[index];
    removedproduct.inCart = false;
    removedproduct.count = 0;
    axios
        .post(
          process.env.REACT_APP_BASE_URL+`users/me/cart/delete`,
          {
            productId: removedproduct.id,
          },
          {
            headers: {
              Authorization: `Bearer ${this.state.token}`,
            },
          }
        )
        .then((res) => {
        })
        .catch((e) => {
        });
    this.setState(
      () => {
        return {
          cart: [...tempcart],
          products: [...tempproduct],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  clearCart = () => {
    this.state.cart.forEach( (product) =>{
      axios
        .post(
          process.env.REACT_APP_BASE_URL+`users/me/cart/delete`,
          {
            productId: product.id,
          },
          {
            headers: {
              Authorization: `Bearer ${this.state.token}`,
            },
          }
        )
        .then((res) => {
        })
        .catch((e) => {
        });
    })
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {       
          this.setProducts(this.state.products);
          this.addTotal();

      }
    );
    return <Link to="/product" />;
  };
  addTotal = () => {
    let subtotal = 0;
    this.state.cart.map((item) => (subtotal += item.count*item.price));
    const temptax = subtotal * 0.1;
    const tax = parseFloat(temptax.toFixed(2));
    const total = subtotal + tax;
    this.setState(() => {
      return {
        cartTax: tax,
        cartsubTotal: subtotal,
        cartTotal: total,
      };
    });
  };

  render() {
    
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increament: this.increament,
          decreament: this.decreament,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
