import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
import { useState } from "react";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCartHandler = () => {
    setIsCartVisible(true);
  };

  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Foods />
    </CartProvider>
  );
}

export default App;
