import React from 'react'
import SignInUpForm from './SignInUpForm';
import Header from "./Header";

const Login = () => {
  return (
    <div className='relative'>
          <Header />
          <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_medium.jpg"
          alt="background image" className=" " />
          </div>
          <SignInUpForm/>
    </div>
  )
}

export default Login;
