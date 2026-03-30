import React, { useEffect } from 'react'
import { useState } from 'react';

const SignInUpForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div >
        
      <form className="absolute right-0 left-0 top-0 mx-auto my-40 p-14 w-3/12 z-30 bg-black bg-opacity-85  text-white">
        <h1 className="text-3xl font-bold mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&  <input type="text" placeholder='Enter Username' className="py-2  my-4 px-3 w-full bg-gray-500 " />}
        <input type="mail" placeholder='Email Adress' className="py-2  my-4 px-3 w-full bg-gray-500 " />
        <input type="password" placeholder='Password' className="py-2  my-4 px-3 w-full bg-gray-500" />
        <button className='py-3 my-4 px-3 w-full bg-red-600 rounded-lg font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='mt-2 transition duration-300 hover:text-red-500 active:text-green-500'
        onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now" : "Already User? Click to Sign In"}</p>
     </form>

    </div>
  )
}

export default SignInUpForm;
