import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import Heading from "../components/Heading";
import OrderList from "../components/orders/OrderList";
import ComplexPagination from "../components/ComplexPagination";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const orderLoader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("You must be logged in to view orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return { orders: response.data.data, meta: response.data.meta };
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

function Orders() {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <Heading text="Please make an order" />;
  }

  return (
    <section className="orders px-4">
      <Heading text="Your Orders" />
      <OrderList />
      <ComplexPagination />
    </section>
  );
}

export default Orders;
