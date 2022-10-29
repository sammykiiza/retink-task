import React from 'react'

const RetikAvatar = require('../assets/images/Retink-avatar.png');
const logo = require('../assets/images/logo.png');
function Header() {
  return (
    <div className='bg-[#7E1CFE0D]'>
      <div className="pl-10 p-2">
        <img src={logo} className="w-[100px]" alt="logo" />
        <div className='font-bold text-2xl pt-10'>
          <span>Get Advanced AI</span><br />
          <span>+ Expert Created <span className='text-[#7E1CFE]'>Logos</span></span>
        </div>
        <div className='text-lg pt-4'>
          <span>Boost your sales <span className='text-[#7E1CFE] font-bold'>10x faster</span> with content customized by our</span><br />
          <span>unique partnership of <span className='text-[#7E1CFE] font-bold'>human creativity and AI optimization</span></span>
        </div>
        <div className='pt-4'>
          <span className='text-[#7E1CFE] text-lg font-bold'>Sign Up For The BETA!</span>
          <form action="" method='post'>
            <input type="text" placeholder='Business Name' />
            <span className='text-sm'>would like a beta invite sent to</span>
            <input type="text" placeholder='@email address' />
            <span className='text-sm'>when it's ready!</span>
            <div className='flex mx-6 my-8'>
              <button type="submit" className='bg-[#7E1CFE] rounded-lg text-white text-sm py-1 px-6'>Notify me</button>
              <a href="!#" className='border border-[#754DE8] text-[#0085FF] underline rounded-lg py-1 px-6 ml-24'>
                Sign up as a freelance partner1
              </a>
            </div>
          </form>
        </div>
        <div className='absolute top-0 -right-48'>
          <img src={RetikAvatar} className="w-[50%]" alt="retink-avatar" />
        </div>
      </div>

    </div>
  )
}

export default Header