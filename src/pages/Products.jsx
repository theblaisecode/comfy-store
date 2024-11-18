import Pagination from "../components/Pagination";
import AllProducts from "../components/product/AllProducts";
import ProductFilter from "../components/product/ProductFilter";
import { customFetch } from "../utils";
const url = "products";

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "product",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams }),
  };
};

export const productLoader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const res = await queryClient.ensureQueryData(allProductsQuery(params));
    const products = res.data.data;
    const meta = res.data.meta;
    return { products, meta, params };
  };

function Products() {
  return (
    <section className="products px-4">
      <div className="">
        <ProductFilter />
        <AllProducts />
        <Pagination />
      </div>
    </section>
  );
}

export default Products;
