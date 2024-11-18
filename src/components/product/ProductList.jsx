import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../../utils";

function ProductList() {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((singleProduct) => {
        const { image, title, price, company } = singleProduct.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={singleProduct.id}
            to={`/products/${singleProduct.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group">
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="ml-0 sm:ml-16">
              <h2 className="capitalize font-medium text-lg">{title}</h2>

              <span className="capitalize text-secondary text-md">
                {company}
              </span>
            </div>

            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductList;
