import React from 'react'
import { Link, Links, NavLink } from 'react-router-dom'
import GoogleLoginComp from '../../components/GoogleLogin/googleLoginComp'

const LandingPage = () => {
  return (
    <div className="my-4 py-[50px] md:pl-[120px] px-5 flex flex-col md:flex-row justify-between items-center">
        <div className='w-full md:w-[40%] mb-10 md:mb-0'>
            <div className='w-[70%] mx-auto text-5xl text-gray-500 text-left'>
              With you every step of your career
            </div>
                <div className='my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-full w-[70%] text-black cursor-pointer'>
                <GoogleLoginComp/>
            </div>
            <Link to={'/login'} className='flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer'>  Sign in with email </Link>
            <div className=' font-light mx-auto mb-4 text-xs w-[70%] mt-6'>By clicking Continue to join or sign in, you agree to LinkedIn’s<span className='font-semibold text-[#0A66C2] cursor-pointer'> User Agreement</span>,<span className='font-semibold text-[#0A66C2] cursor-pointer'> Privacy Policy</span>,  and <span className='font-semibold text-[#0A66C2] cursor-pointer'> Cookie Policy</span>.</div>
            <div  className='mx-auto text-center mb-4  w-[70%] mt-4'>New to LinkedIn?<Link to={'/signUp'} className='font-semibold text-[#0A66C2] cursor-pointer hover:underline'> Join now</Link></div>
       
       
        </div>
        <div className='md:w-[60%] h-auto flex items-center justify-center lg:mr-40'>
            <img src="https://media.licdn.com/dms/image/v2/C4D12AQGcBcftbrKdcA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1556211770897?e=2147483647&v=beta&t=CVE2vePRJj6_ZN3virZuObfhW0dUNilBoImVYJDJpBU" alt="LinkedIn Visual" className="w-full max-w-[800px] h-auto object-contain" />
        </div>

    </div>
  )
}

export default LandingPage