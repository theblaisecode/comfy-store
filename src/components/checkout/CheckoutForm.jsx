import { Form, redirect } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../../utils";
import { clearCart } from "../../reduxToolkit/cart/cartSlice";
import { toast } from "react-toastify";

export const checkoutFormAction =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");
      return null;
    }
  };

function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">Shipping Information</h4>

      <div className="form-control">
        <label htmlFor="name" className="label">
          <span className="label-text capitalize">First Name</span>
        </label>
        <input type="text" name="name" className={`input input-bordered `} />
      </div>

      <div className="form-control">
        <label htmlFor="address" className="label">
          <span className="label-text capitalize">Address</span>
        </label>
        <input type="text" name="address" className={`input input-bordered `} />
      </div>

      <div className="mt-4">
        <SubmitBtn text="Place your order" />
      </div>
    </Form>
  );
}
export default CheckoutForm;
