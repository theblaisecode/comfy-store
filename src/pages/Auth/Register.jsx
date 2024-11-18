import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

function Register() {
  return (
    <section className="register px-4">
      <section className="register px-4">
        <div className="flex justify-center items-center h-screen	">
          <div className="card bg-base-100 w-96 shadow-xl">
            <Form method="POST" action="/register" className="card-body">
              <h4 className="text-center text-3xl font-bold mb-6">Register</h4>
              <label
                htmlFor="username"
                className="input input-bordered flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>

                <input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="grow"
                />
              </label>

              <label
                htmlFor="email"
                className="input input-bordered flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="grow"
                />
              </label>

              <label
                htmlFor="password"
                className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="grow"
                />
              </label>

              <div className="registerFormButtons flex flex-col justify-center items-center gap-3 mt-6 text-neutral ">
                <button className="btn bg-primary text-accent-content btn-block uppercase">
                  Register
                </button>
              </div>

              <p className="text-center mt-6 ">
                Already a member?
                <Link to="/login" className="text-accent ml-2">
                  Login
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Register;
