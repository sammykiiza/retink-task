import React from 'react'
import { logo, RetikAvatar } from '../assets'



function Header() {
  return (
    <div className='bg-[#7E1CFE0D] flex'>

      {/* Header text left section */}
      <div className="pt-4 ml-24">
        {/* header logo */}
        <a href="!#"><img src={logo} className="w-[186px]" alt="logo" /></a>
        <div className='font-bold text-4xl pt-10'>
          <span>Get Advanced AI</span><br />
          <span>+ Expert Created <span className='text-[#7E1CFE]'>Logos</span></span>
        </div>
        <div className='text-xl pt-4'>
          <span>Boost your sales <span className='text-[#7E1CFE] font-bold'>10x faster</span> with content customized by our</span><br />
          <span>unique partnership of <span className='text-[#7E1CFE] font-bold'>human creativity and AI optimization</span></span>
        </div>

        {/* Sign up form */}
        <div className='pt-4'>
          <span className='text-[#7E1CFE] text-xl font-bold'>Sign Up For The BETA!</span>
          <form action="!#" method='' className='mt-2'>
            <div className='flex items-center'>
              <input type="text" placeholder='Business Name'
                className='bg-[#7E1CFE02] 
                placeholder:text-center
                text-center 
                border-b 
                border-b-black 
                placeholder:text-[#7E1CFE]
                text-[#7E1CFE] 
                text-italic
                focus:outline-0
                w-52' />
              <div className='text-sm px-2 -mb-3'>would like a beta invite sent to</div>
              <input type="text" placeholder='@email address'
                className='bg-[#7E1CFE02] 
                placeholder:text-center
                text-center
                border-b 
                border-b-black 
                placeholder:text-[#7E1CFE]
                text-[#7E1CFE] 
                text-italic
                focus:outline-0
                w-52' />
              <div className='text-sm px-2 -mb-3'>when it's ready!</div>
            </div>

            <div className='flex items-center mx-6 my-8'>
              <button type="submit"
                className='bg-[#7E1CFE] 
                hover:bg-[#0085FF]
                rounded-xl 
                text-white 
                text-sm 
                py-2 
                px-6 
                ease-linear 
                transition-all 
                duration-200'>
                Notify me
              </button>
              <a href="https://retink.io/fap" 
              className='border 
              border-[#754DE8]
              hover:bg-[#754DE8]
              hover:text-white
              text-[#0085FF] 
              underline 
              text-sm 
              rounded-xl 
              py-2 
              px-6 
              ml-24
              ease-linear 
              transition-all 
              duration-200'>
                Sign up as a freelance partner
              </a>
            </div>
          </form>
        </div>
        {/* Sign up form end */}
      </div>
      {/* Header text left section end */}

      {/* Retik Avatar */}
      <img src={RetikAvatar} className="hidden xl:block md:w-[30%] md:mr-20" alt="retink-avatar" />
    </div>
  )
}

export default Header