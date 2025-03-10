import React from 'react'
import ProfileNav from '../../ProfileNav'
import { Link } from 'react-router-dom'
import recommendUserData from './RecommendedUserData'
import linkData from '../../LinkData'
const RecommendedUser = () => {
    return (
        <>
            <div className='w-full h-auto py-3'>
                {/* Profile navigation */}
                <ProfileNav />
                {/* Suggested user */}
                <div className='w-full h-auto my-8'>
                    <div className='w-full h-auto justify-between flex mb-4'>
                        <h6 className='text-sm text-gray-400 font-medium'>
                            Suggested for you
                        </h6>
                        <Link to="/" className="text-xs font-semibold text-gray-300 hover:text-gray-600" >
                            See All
                        </Link>
                    </div>
                    {recommendUserData.map((user) => (
                        <div key={user.id} className='w-full h-auto flex items-center justify-between mb-4'>
                            <Link to="/" className='w-full h-auto flex items-center gap-x-2'>
                                <img src={user.profileImg} alt="user profile" className='w-12 h-12 rounded-full object-cover' />
                                <div className='flex flex-col justify-center'>
                                    <p className='text-[0.9rem] text-white font-medium mb-0'>{user.username}</p>
                                    <h6 className='text-xs text-gray-500 font-normal'>Suggested For you</h6>
                                </div>
                            </Link>
                            <Link to="/" className='text-[0.855rem] text-blue-500 hover:text-gray-600'>
                                <p>Follow</p>
                            </Link>
                        </div>
                    ))}
                </div>
                {/* footer links */}
                <div className='w-full h-auto'>
                    <div className='w-full h-auto flex items-center gap-x-1 flex-wrap mb-3'>
                        {linkData.map((data) => (
                            <div key={data.id} className='w-fit h-auto flex items-center gap-x-1'>
                                <Link to={data.Link} className='text-[0.8rem] font-normal text-[#5b5b5b] hover:underline'>
                                    {data.title}
                                </Link>
                                <div className='w-[1.5px] h-[1.5px] bg-[#5b5b5b] rounded-full'></div>
                            </div>
                        ))}
                    </div>
                    <p className='text-sm text-[#5b5b5b] font-normal'>&copy; 2024 INSTAGRAM FROM META</p>
                </div>
            </div>
        </>
    )
}

export default RecommendedUser
