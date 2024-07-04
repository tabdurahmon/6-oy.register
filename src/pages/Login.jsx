//rrd import
import { Form, Link, useActionData } from "react-router-dom";

//hook

import { useEffect } from "react";

//components
import { FormInput } from "../components";

//Action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};
import { useRegister } from "../hooks/useRegister";
function Login() {
  const user = useActionData();
  const { isPending, registerWithGoogle } = useRegister();
  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <div className="auth-container">
      <div className="auth-left"></div>
      <div className="auth-right">
        <Form
          method="post"
          className="flex flex-col gap-5 w-[340px] shadow-2xl p-7 rounded-xl  bg-[rgba(255,255,255,0.5)]"
        >
          <h1 className="text-4xl text-base-300 text-center">Login</h1>
          <FormInput
            label="Email :"
            type="email"
            name="email"
            placeholder="Email"
          />
          <FormInput
            label="Password :"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div>
            <button className="btn btn-block no-animation" type="button">
              Login
            </button>
          </div>
          <div className="w-full">
            {isPending && (
              <button type="button" className="btn btn-secondary btn-block">
                Loading...
              </button>
            )}
            {!isPending && (
              <button
                onClick={registerWithGoogle}
                type="button"
                className="btn btn-secondary btn-block"
              >
                Google
              </button>
            )}
          </div>

          <div className="text-center">
            <p className="text-black font-medium lg:text-slate-400">
              If you don't have account,{" "}
              <Link className="link link-primary" to="/register">
                Register
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
