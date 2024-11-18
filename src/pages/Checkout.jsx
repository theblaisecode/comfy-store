import { useSelector } from "react-redux";
import Heading from "../components/Heading";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CartTotals from "../components/cart/CartTotals";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const checkoutLoader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

function Checkout() {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <Heading text="Your cart is empty" />;
  }

  return (
    <section className="chechout px-4">
      <Heading text="Place your order" />

      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </section>
  );
}

export default Checkout;
