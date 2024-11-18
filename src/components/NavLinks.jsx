import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const navLinks = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "about", text: "About" },
  { id: 3, url: "products", text: "Products" },
  { id: 4, url: "cart", text: "Cart" },
  { id: 5, url: "checkout", text: "Checkout" },
  { id: 6, url: "orders", text: "Orders" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {navLinks.map((item) => {
        const { id, url, text } = item;
        if ((url === "checkout" || url === "orders") && !user) return null;

        return (
          <NavLink
            key={id}
            to={url}
            aria-label={`Link to ${text} page`}
            className={({ isActive }) =>
              isActive
                ? "activeStyle py-2 px-4 lg:p-4 capitalize"
                : "py-2 px-4 lg:p-4 capitalize"
            }>
            {text}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
