import Cart from "@/components/cart/Cart";
import CartContextProvider from "@/context/CartContextProvider";

export default function Home() {
  return (
    <>
      <CartContextProvider>
        <Cart />
      </CartContextProvider>
    </>
  );
}


