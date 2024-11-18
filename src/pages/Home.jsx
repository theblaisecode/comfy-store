import Heading from "../components/Heading";
import HomeHero from "../components/home/HomeHero";
import { customFetch } from "../utils";
import ProductGrid from "../components/product/ProductGrid";

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const homeLoader = (queryClient) => async () => {
  const res = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = res.data.data;
  return { products };
};

function Home() {
  return (
    <section className="">
      <div className="">
        <HomeHero />

        <div className="featuredProducts pt-24">
          <Heading text="Featured Products" />

          <ProductGrid />
        </div>
      </div>
    </section>
  );
}
export default Home;
