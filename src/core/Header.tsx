import React from 'react'
import { logo, RetikAvatar } from '../assets'
import { logout } from '../firebase'



function Header() {
  return (
    <div className='flex bg-[#7E1CFE0D] w-screen'>
      
      <div className='flex flex-col lg:flex-row justify-center px-10 mx-auto'>
        {/* Header text left section */}
        <div className="mt-10 w-full lg:w-[60%]">
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
            <form action="!#" method='' className='mt-2 w-full'>
              <div className='flex flex-col justify-center lg:flex-row items-center'>
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
                <div className='text-sm px-2 mb-auto lg:-mb-3'>would like a beta invite sent to</div>
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
                <div className='text-sm px-2 mb-auto lg:-mb-3'>when it's ready!</div>
              </div>

              <div className='flex items-center lg:mx-6 my-8'>
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
                  text-center
                  rounded-xl 
                  py-2 
                  px-6
                  ml-2
                  lg:ml-24
                  ease-linear 
                  transition-all 
                  duration-200'>
                  Sign up as a freelance partner
                </a>
              </div>
            </form>
            <button
            className='bg-[#7E1CFE] text-white rounded-lg px-4 py-2 ml-0 lg:ml-6 w-20'
            onClick={() => logout()}
          >
            Logout
          </button>
          </div>
          {/* Sign up form end */}
        </div>
        {/* Header text left section end */}

        {/* Retik Avatar */}
        <div className='w-[80%] lg:w-[40%] flex'>
          <img src={RetikAvatar} className="" alt="retink-avatar" />
        </div>
      </div>
    </div>
  )
}

export default Header