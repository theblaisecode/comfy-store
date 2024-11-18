import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../reduxToolkit/cart/cartSlice";
import { logoutUser } from "../reduxToolkit/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

function UserTab() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const userLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };

  return (
    <div className="bg-neutral py-3 px-4 text-neutral-content">
      <div className="mx-auto max-w-6xl px-8">
        {user ? (
          <div className="userTab justify-center gap-5 text-sm md:justify-end flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-sm sm:text-sm">Hello, {user.username}</p>

            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={userLogout}>
              logout
            </button>
          </div>
        ) : (
          <div className="userTab flex justify-center gap-5 text-sm md:justify-end">
            <Link to="login" className="hover:underline">
              Sign in / Guest
            </Link>

            <Link to="register" className="hover:underline">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default UserTab;
