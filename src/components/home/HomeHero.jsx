import { Link } from "react-router-dom";
import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.webp";

const carousel = [hero1, hero2, hero3, hero4];

function HomeHero() {
  return (
    <div className="homeContent flex lg:flex-cols-2 gap-24 items-center">
      <div className="contentTop flex-1 ">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Enjoy cozy living room sets for relaxation, modern bedroom sets for a
          restful night, and stylish dining room sets that reflect your
          home&apos;s spirit. Transform your space and savor every moment!
        </p>

        <div className="mt-10 btn btn-primary">
          <Link to="products" className="uppercase">
            our products
          </Link>
        </div>
      </div>

      <div className="hidden flex-1 h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carousel.map((item) => {
          return (
            <div key={item} className="carousel-item">
              <img
                src={item}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeHero;
