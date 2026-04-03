import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { ValidateForm } from "../Utils/ValidateForm";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { USER_AVATAR } from "../Utils/constants";

const SignInUpForm = () => {
  const dispatch = useDispatch();

  const Email = useRef();
  const Password = useRef();
  const Username = useRef();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState({});
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    seterrorMessage({});
  };
  const handleButtonClick = async (e) => {
    e.preventDefault();
    //the message here is the object the error obj returns from thr validateform
    const message = ValidateForm(
      Email.current.value,
      Password.current.value,
      isSignInForm ? null : Username.current.value,
    );
    //if i write if(message) return ..here its basically the message is object so event an empty object will be considered and it stops the execution
    if (Object.keys(message).length > 0) {
      seterrorMessage(message);
      return;
    }
    try {
      if (isSignInForm) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          Email.current.value,
          Password.current.value,
        );
        
      } else {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          Email.current.value,
          Password.current.value,
        );
        await updateProfile(auth.currentUser, {
          displayName: Username.current.value,
          photoURL:USER_AVATAR
            
        });
        dispatch(
          addUser({
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL
          }),
        );  
      }
    } catch (error) {
      let firebaseErrors = {};

      switch (error.code) {
        case "auth/user-not-found":
          firebaseErrors.email = "User not found";
          break;

        case "auth/wrong-password":
          firebaseErrors.password = "Incorrect password";
          break;

        case "auth/email-already-in-use":
          firebaseErrors.email = "Email already registered";
          break;

        case "auth/invalid-email":
          firebaseErrors.email = "Invalid email format";
          break;

        case "auth/weak-password":
          firebaseErrors.password = "Password should be at least 6 characters";
          break;
        // this states in login if email does not exist and password is wrong
        case "auth/invalid-credential":
          firebaseErrors.general = "Invalid email or password";
          break;

        default:
          firebaseErrors.general = error.message; // catch all other errors
      }

      seterrorMessage(firebaseErrors); // update the form
    }
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
        {/* catch all firebase error */}
        {errorMessage.general && (
          <p className="py-2 my-1 px-3 w-full font-semibold text-red-700">
            {errorMessage.general}
          </p>
        )}
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
