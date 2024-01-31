// Ecom.jsx
import "../assets/style.css";
import Header from "./Header.jsx";
import Shop from "./Shop.jsx";
import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "./Product.jsx";
import CartContextProvider from "../store/shopping-cart-context.jsx";

function Ecom() {

  return (
    <CartContextProvider>
      <div className="h-[100%]">
        
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
      </div>
    </CartContextProvider>
  );
}

export default Ecom;
