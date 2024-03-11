import React from 'react'
import { PiSignInBold } from "react-icons/pi";
export default function SignIn() {
  return (
    <>
    {/* <div>SignIn</div> */}
    <button className='rounded-xl p-2  bg-orange-600 '><span className='hidden sm:block'>SIGN IN</span><PiSignInBold className='sm:hidden h-5 w-5'/></button>
    </>
  )
}
