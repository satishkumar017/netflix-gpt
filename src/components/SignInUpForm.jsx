import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { ValidateForm } from "../Utils/ValidateForm";

const SignInUpForm = () => {
  const Email = useRef();
  const Password = useRef();
  const Username = useRef();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState({});
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    seterrorMessage({});
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = ValidateForm(
      Email.current.value,
      Password.current.value,
      isSignInForm ? null : Username.current.value,
    );
    seterrorMessage(message);
  };

  return (
    <div>
      <form
        onSubmit={handleButtonClick}
        className="absolute right-0 left-0 top-0 mx-auto my-40 p-14 w-3/12 z-30 bg-black bg-opacity-85  text-white"
      >
        <h1 className="text-3xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={Username}
            type="text"
            placeholder="Enter Username"
            className="py-2  my-4 px-3 w-full bg-gray-500 border border-transparent focus:border-red-500 outline-none"
          />
        )}
        {errorMessage.username && (
          <p className="py-2 my-1 px-3 w-full font-semibold text-red-700">
            {errorMessage.username}
          </p>
        )}

        <input
          ref={Email}
          type="mail"
          placeholder="Email Adress"
          className="py-2  my-4 px-3 w-full bg-gray-500 border border-transparent focus:border-red-500 outline-none"
        />
        {errorMessage.email && (
          <p className="py-2 my-1 px-3 w-full font-semibold text-red-700">
            {errorMessage.email}
          </p>
        )}

        <input
          ref={Password}
          type="password"
          placeholder="Password"
          className="py-2  my-4 px-3 w-full bg-gray-500 border border-transparent focus:border-red-500 outline-none"
        />
        {errorMessage.password && (
          <p className="py-2 my-1 px-3 w-full font-semibold text-red-700">
            {errorMessage.password}
          </p>
        )}

        <button
          className="py-3 my-4 px-3 w-full bg-red-600 rounded-lg font-bold"
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="mt-2 transition duration-300 hover:text-red-500 active:text-green-500"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New To Netflix? Sign Up Now"
            : "Already User? Click to Sign In"}
        </p>
      </form>
    </div>
  );
};

export default SignInUpForm;
