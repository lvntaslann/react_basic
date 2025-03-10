import React from 'react'
import Profile from './Profile'
import MobileProfile from './MobileProfile/MobileProfile'
const Main = () => {
  return (
    <>
        <div className='lg:w md:w- sm:w-full w-full min-h-screen lg:py-10 md:py-6 sm:py-4 py-4'>
            {/* Profile for large screen */}
            <Profile/>
            {/* Profile for small screen */}
            <MobileProfile/>
        </div>
    </>
  )
}

export default Main
