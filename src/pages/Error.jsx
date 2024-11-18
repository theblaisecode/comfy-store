import { useRouteError, Link } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <section className="error px-4">
        <div className="mx-auto w-11/12 lg:w-7/12 flex justify-center items-center h-screen	">
          <div className="errorContent text-center">
            <p className="text-9xl font-semibold text-primary">404</p>

            <h4 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              page not found
            </h4>

            <p className="mt-6 text-lg leading-7">
              Sorry, we couldn’t find the page you’re looking for.
            </p>

            <div className="mt-10">
              <Link to="." className="btn btn-accent uppercase">
                go to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="error px-4">
      <div className="mx-auto w-11/12 lg:w-7/12 flex justify-center items-center h-screen	">
        <div className="errorContent text-center">
          <h4 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            there was an error...
          </h4>
        </div>
      </div>
    </section>
  );
}
export default Error;
