import { Outlet, useNavigation } from "react-router-dom";
import UserTab from "../components/UserTab";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

function GlobalLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <UserTab />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
      <Footer />
    </>
  );
}

export default GlobalLayout;
