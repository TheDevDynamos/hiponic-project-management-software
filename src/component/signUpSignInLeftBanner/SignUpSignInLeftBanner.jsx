import React from 'react'
import "./signUpSignInLeftBanner.css"
import LogoWhite from "../../assets/logoWhite.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Illustration1 from "../../assets/illustration/signInUPLeftBannerIllustration1.png"

const SignUpSignInLeftBanner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <div className='signUp-signIn-left-banner  box-border h-screen w-3/6 p-10'>
      <div className='logo'>
        <img src={LogoWhite} alt="" />
      </div>

      <div className='slider w-full h-full flex justify-center items-center'>

        <div className='w-3/6 h-4/6 '> 
        <Slider {...settings}>
          <div className='slider-item'>
            <img src={Illustration1} alt="" />
            <div className='text-content'><h3 className='text-center'>Customizable 3rd Dashboard</h3>
            <p className='text-center'>Everything you need in an easily customizable dashboard.</p></div>
          </div>
          <div className='slider-item'>
          <img src={Illustration1} alt="" />
          <div className='text-content'><h3 className='text-center'>Customizable 3rd Dashboard</h3>
            <p className='text-center'>Everything you need in an easily customizable dashboard.</p></div>
          </div>
          <div className='slider-item'>
          <img src={Illustration1} alt="" />
          <div className='text-content'><h3 className='text-center'>Customizable 3rd Dashboard</h3>
            <p className='text-center'>Everything you need in an easily customizable dashboard.</p></div>
            
          </div>
          
        </Slider>

        </div>


      {/* <div className=' w-3/6'>
        <Slider {...settings}>
          <div >
            <img src={Illustration1} alt="" />
          </div>
          <div>
          <img src={Illustration1} alt="" />
          </div>
          <div>
          <img src={Illustration1} alt="" />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div> */}
      </div>
      
      
    </div>
  )
}

export default SignUpSignInLeftBanner