import React from "react";
import Navbar from "./Navbar.js";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Cart from "./cart.js";
import Footer from "./Footer.js";
import Navchange from "./Navchange.js";
import Navbar2 from "./Navbar2";
import Cart1 from "./Cart1";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "VIVO V20 (128GB ROM, 8GB RAM, MIDNIGHT JAZZ)",
          qty: 0,
          price: 24990.0,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_170,w_170/v1609762934/Croma%20Assets/Communication/Mobiles/Images/231594_xqjypi.png",
          id: 1
        },
        {
          title: "Apple iPhone 12 Pro Max (128GB ROM, 6GB RAM, Pacific Blue)",
          qty: 0,
          price: 124900.0,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_300,w_300/v1605262081/Croma%20Assets/Communication/Mobiles/Images/8999511621662.png",
          id: 6
        },
        {
          title: "APPLE IPHONE 12 (128GB ROM, 4GB RAM, BLUE)",
          qty: 0,
          price: 84900.0,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_170,w_170/v1605269941/Croma%20Assets/Communication/Mobiles/Images/8999510638622.png",
          id: 2
        },
        {
          title: "APPLE IPHONE 12 (128GB ROM, 4GB RAM, BLUE)",
          qty: 0,
          price: 84900.0,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_170,w_170/v1605269941/Croma%20Assets/Communication/Mobiles/Images/8999510638622.png",
          id: 2
        },
        {
          title: "REALME WATCH",
          qty: 0,
          price: 9999,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_380,w_380/v1605338825/Croma%20Assets/Communication/Wearable%20Devices/Images/8921639583774.png",
          id: 3
        },
        {
          title: "REALME WATCH",
          qty: 0,
          price: 9999,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_380,w_380/v1605338825/Croma%20Assets/Communication/Wearable%20Devices/Images/8921639583774.png",
          id: 3
        },
        {
          title: "XIAOMI REDMI 9I (4 GB RAM, 64 GB ROM, MIDNIGHT BLACK)",
          qty: 0,
          price: 8599.0,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_170,w_170/v1605264632/Croma%20Assets/Communication/Mobiles/Images/8998984974366.png",
          id: 4
        },
        {
          title: "SAMSUNG GALAXY M01 (BLACK, 32 GB, 3 GB RAM)",
          qty: 0,
          price: 7499.0,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_170,w_170/v1605340415/Croma%20Assets/Communication/Mobiles/Images/8943211315230.png",
          id: 5
        },
        {
          title: "VIVO V20 (128GB ROM, 8GB RAM, MIDNIGHT JAZZ)",
          qty: 0,
          price: 24990.0,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_170,w_170/v1609762934/Croma%20Assets/Communication/Mobiles/Images/231594_xqjypi.png",
          id: 1
        },
        {
          title: "Apple iPhone 12 Pro Max (128GB ROM, 6GB RAM, Pacific Blue)",
          qty: 0,
          price: 124900.0,
          img1:
            "https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_300,w_300/v1605262081/Croma%20Assets/Communication/Mobiles/Images/8999511621662.png",
          id: 6
        }
      ]
    };
  }
  handleincreasingquantity = (product) => {
    console.log("increase me", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products
    });
  };
  handledecreasequantity = (product) => {
    console.log("decrease me", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 1) {
      return this.handledelete(products[index].id);
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    });
  };
  handledelete = (id) => {
    console.log("delete me", id);
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    });
  };
  getcartcount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  gettotal = () => {
    const { products } = this.state;
    let countprice = 0;
    products.forEach((product) => {
      countprice += product.price * product.qty;
    });
    return countprice;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navchange count={this.getcartcount()} />
            <Navbar2 value={"Cart"} />
            <Cart1
              product={products}
              onincrease={this.handleincreasingquantity}
              ondecrease={this.handledecreasequantity}
              ondelete={this.handledelete}
            />
          </Route>
          <Route exact path="/cart">
            <Navchange count={this.getcartcount()} />
            <Navbar count={this.getcartcount()} />

            <Cart
              product={products}
              onincrease={this.handleincreasingquantity}
              ondecrease={this.handledecreasequantity}
              ondelete={this.handledelete}
            />

            <Footer count={this.getcartcount()} total={this.gettotal()} />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
