import React from 'react'
import { facebook, instagram, linkedIn, logo, pinterest, twitter, youtube } from '../assets'

function Footer() {
  return (
    <div className='font-bold w-screen'>
      {/* top footer section */}
      <div className='flex justify-around bg-[#D0D0D0] mx-auto px-20 py-10'>
        <div className='flex space-x-20 items-center'>
          <div className='flex flex-col space-y-6'>
            <a href="!#"><img src={logo} className="w-[186px]" alt="logo" /></a>
            <div className='flex flex-col space-y-2'>
              <div>Product by Retink Media UG</div>
              <div>Bonn, Germany</div>
            </div>
          </div>

          <div className='flex flex-col space-y-2 mt-14'>
            <div><a href="!#" className='hover:text-white ease-linear transition-all duration-150'>Get Early Access</a></div>
            <div><a href="!#" className='hover:text-white ease-linear transition-all duration-150'>Provide Feedback</a></div>
          </div>
        </div>

        <div>
          <div>Connect with Us</div>
          <div className="flex space-x-4 mt-2">
            <a href="!#"><img src={facebook} alt="facebook-logo" /></a>
            <a href="!#"><img src={twitter} alt="twitter-logo" /></a>
            <a href="!#"><img src={instagram} alt="instagram-logo" /></a>
            <a href="!#"><img src={linkedIn} alt="linkedIn-logo" /></a>
            <a href="!#"><img src={youtube} alt="youtube-logo" /></a>
            <a href="!#"><img src={pinterest} alt="pinterest-logo" /></a>
          </div>
        </div>

      </div>
      {/* top footer section end */}

      {/* bottom footer section */}
      <div className='flex flex-col lg:flex-row justify-center lg:justify-evenly bg-black h-[118px] text-white font-normal lg:-ml-28 items-center'>
        <div>
          <span>Copyright &copy; {new Date().getFullYear()} Retink</span>
        </div>
        <div className='space-x-6'>
          <a href="!#" className='hover:text-slate-400 ease-linear transition-all duration-150'>Privacy Policy</a>
          <a href="!#" className='hover:text-slate-400 ease-linear transition-all duration-150'>Terms of Service</a>
        </div>
      </div>
      {/* bottom footer section end */}
    </div>
  )
}

export default Footer