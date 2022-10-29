import React from 'react'
import { facebook, instagram, linkedIn, logo, pinterest, twitter, youtube } from '../assets/images'

function Footer() {
  return (
    <div className='font-bold'>
      {/* top footer section */}
      <div className='flex justify-between bg-[#D0D0D0] px-20 py-10'>
        <div className='flex space-x-20 items-center'>
          <div className='flex flex-col space-y-6'>
            <a href="!#"><img src={logo} className="w-[186px]" alt="logo" /></a>
            <div className='flex flex-col space-y-2'>
              <div>Product by Retink Media UG</div>
              <div>Bonn, Germany</div>
            </div>
          </div>

          <div className='flex flex-col space-y-2 mt-14'>
            <div>Get Early Access</div>
            <div>Provide Feedback</div>
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
      <div className='flex justify-evenly bg-black h-[118px] text-white font-normal -ml-28 items-center'>
        <div>
          <span>Copyright &copy; 2021 Retink</span>
        </div>
        <div className='space-x-6'>
          <a href="!#">Privacy Policy</a>
          <a href="!#">Terms of Service</a>
        </div>
      </div>
      {/* bottom footer section end */}
    </div>
  )
}

export default Footer