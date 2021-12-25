import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardContextProvider from "./store/CardContexProvider";

function App() {
  const [isCartVisvible, setIsCartVisible] = useState(false);

  const showCartButtonhandler = () => {
    setIsCartVisible(true);
  };

  const closeCartEvent = () => {
    setIsCartVisible(false);
  };

  return (
    <CardContextProvider>
      {isCartVisvible && <Cart onCloseCartView={closeCartEvent} />}
      <Header onShowCartEvent={showCartButtonhandler} />
      <main>
        <Meals />
      </main>
    </CardContextProvider>
  );
}

export default App;
