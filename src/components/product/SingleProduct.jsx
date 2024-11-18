import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../../reduxToolkit/product/productColorSlice";
import { isItemAmount } from "../../reduxToolkit/product/productItemAmountSlice";
import { addItem } from "../../reduxToolkit/cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`products/${id}`),
  };
};

// Fetch single product data
export const singleProductLoader =
  (queryCient) =>
  async ({ params }) => {
    const res = await queryCient.ensureQueryData(singleProductQuery(params.id));
    return { product: res.data.data };
  };

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  // Redux selectors and dispatch
  const { color } = useSelector((state) => state.color) || { color: colors[0] };
  const { itemAmount } = useSelector((state) => state.itemAmount);
  const cartProduct = {
    cartID: product.id + color,
    productID: product.id,
    image,
    title,
    price,
    company,
    color,
    amount: itemAmount,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />

        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>

          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((colorOption) => (
                <button
                  key={colorOption}
                  type="button"
                  className={`badge w-6 h-6 mr-2 ${
                    colorOption === color && "border-2 border-secondary"
                  }`}
                  style={{ backgroundColor: colorOption }}
                  onClick={() => dispatch(changeColor(colorOption))}></button>
              ))}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                id="amount"
                value={itemAmount}
                onChange={(e) =>
                  dispatch(isItemAmount(parseInt(e.target.value)))
                }>
                {[...Array(20).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md uppercase"
                onClick={addToCart}>
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
