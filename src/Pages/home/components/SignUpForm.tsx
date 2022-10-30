import React from 'react'

function SignUpForm() {
    return (
        <div className='flex flex-col items-center space-y-6'>
            <div className='font-bold text-[#754DE8]'>Sign Up For The BETA to see more</div>
            <div>
                <form action="!#">
                    <div className='flex space-x-1'>
                        <input type="text" placeholder='Business Name' className='rounded-2xl border border-[#754DE8] text-center text-[#754DE8] placeholder:text-[#754DE8] focus:outline-0 p-2 w-48' />
                        <input type="text" placeholder='Email' className='rounded-2xl border border-[#754DE8] text-center text-[#754DE8] placeholder:text-[#754DE8] focus:outline-0 p-2 w-48' />
                    </div>
                    <div className='flex flex-col items-center space-y-6 mt-8'>
                        <button type='submit'
                            className='bg-[#7E1CFE] 
                            hover:bg-[#0085FF]
                            rounded-xl 
                            text-white 
                            text-sm 
                            py-2 
                            px-6 
                            ease-linear 
                            transition-all 
                            duration-200'
                        >
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
                        ease-linear 
                        transition-all 
                        duration-200'>Sign up as a freelance partner</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm