import React from 'react'
import "./signUpSignInLeftBanner.css"
import LogoWhite from "../../assets/logoWhite.png"

const SignUpSignInLeftBanner = () => {
  return (
    <div className='signUp-signIn-left-banner  box-border h-screen w-3/6 p-10'>
      <div className='logo'>
        <img src={LogoWhite} alt="" />
      </div>

      <div className='slider'>

      </div>
    </div>
  )
}

export default SignUpSignInLeftBanner