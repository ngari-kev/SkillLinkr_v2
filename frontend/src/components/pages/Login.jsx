import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo_again.png"

const Login = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="hidden lg:block lg:w-1/2 bg-gray-200">
            <img
              src="https://images.pexels.com/photos/1181497/pexels-photo-1181497.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Login"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Login Form Section */}
          <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="SkillLinkr logo"
                src={logo}
                className="mx-auto h-40 w-auto"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-sky-900">
                Welcome back!
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-sky-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-sky-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-sky-900 hover:text-sky-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-sky-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  >
                    Log in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-sky-700">
                Not a member?{" "}
                <Link
                to="/signup"  // Use Link to navigate to the sign-up page
                className="font-semibold leading-6 text-sky-900 hover:text-sky-500"
              >
                Sign Up
              </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
