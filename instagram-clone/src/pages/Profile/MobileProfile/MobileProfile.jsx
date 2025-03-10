import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import highLightsData from '/src/pages/Profile/HighLights.jsx'
import Tab from '/src/pages/Profile/Tab/Tab.jsx'
import PostIcon from '/src/components/Icons/Post/post.png'
import ReelIcon from '/src/components/Icons/Reel/reel.png'
import TagIcon from '/src/components/Icons/Tag/tag.png'
import Posts from '../Posts/Posts'
import Tags from '../Tags/Tags'
import Reels from '../Reels/Reels'

const MobileProfile = () => {
    const [activeTab, setActiveTab] = useState('posts')
    const [isContentVisible, setContentVisible] = useState(true)

    const handleTabClick = (tab) => {
        setContentVisible(false)
        setTimeout(() => {
            setActiveTab(tab)
            setContentVisible(true)
        }, 100)
    }

    return (
        <>
            <div className='w-full h-auto lg:hidden md:hidden sm:block block text-white'>
                {/* Your info section */}
                <div className='w-full h-auto flex items-center gap-x-3 justify-center mb-4 px-4'>
                    <img
                        src='https://picsum.photos/200/300?random/?climber'
                        alt='profile img'
                        className='rounded-full w-14 h-14 object-cover'
                    />
                    <div className='flex flex-col gap-y-2 w-full'>
                        {/* username */}
                        <Link to='/profile' className='text-sm text-gray-200 font-normal'>
                            1lvntaslann
                        </Link>
                        {/* Button */}
                        <div className='flex items-center gap-x-2'>
                            <button className='bg-[#1d1d1d] rounded-lg px-3 py-1 text-sm text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>
                                Edit profile
                            </button>
                            <button className='bg-[#1d1d1d] rounded-lg px-3 py-1 text-sm text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>
                                View archive
                            </button>
                        </div>
                        <p className='text-sm text-gray-100 font-normal'>
                            Levent Aslan <br /> Profession Account
                        </p>
                    </div>
                </div>

                {/* Highlights section */}
                <div className='w-full h-auto mb-4 px-4'>
                    <div className='w-full flex items-center gap-x-3 overflow-x-auto scrollbar-hide touch-pan-x'>
                        {highLightsData.map((data) => (
                            <Link
                                to='/'
                                key={data.id}
                                className='flex items-center justify-center flex-col flex-shrink-0'
                            >
                                <div className='w-14 h-14 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]'>
                                    <img
                                        src={data.img}
                                        alt={data.name}
                                        className='rounded-full h-full w-full object-cover'
                                    />
                                </div>
                                <p className='text-white mt-1 text-xs text-center'>
                                    {data.name}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* post, followers, following */}
                <div className='w-full h-auto flex justify-between border-t border-t-[#1d1d1d] py-2'>
                    <div className='flex-1 text-center'>
                        <h6 className='text-sm text-white font-medium mb-0'>55</h6>
                        <p className='text-xs text-white/40 font-thin'>posts</p>
                    </div>
                    <div className='flex-1 text-center'>
                        <h6 className='text-sm text-white font-medium mb-0'>1200</h6>
                        <p className='text-xs text-white/40 font-thin'>followers</p>
                    </div>
                    <div className='flex-1 text-center'>
                        <h6 className='text-sm text-white font-medium mb-0'>1200</h6>
                        <p className='text-xs text-white/40 font-thin'>following</p>
                    </div>
                </div>

                {/* posts,reels,tagged section */}
                {/* Tab section */}
                <div className='w-full h-auto'>
                    <div className='w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]'>
                        <Tab
                            label='POSTS'
                            icon={PostIcon}
                            isActive={activeTab === 'posts'}
                            onClick={() => handleTabClick('posts')}
                        />
                        <Tab
                            label='REELS'
                            icon={ReelIcon}
                            isActive={activeTab === 'reels'}
                            onClick={() => handleTabClick('reels')}
                        />
                        <Tab
                            label='TAGGED'
                            icon={TagIcon}
                            isActive={activeTab === 'tagged'}
                            onClick={() => handleTabClick('tagged')}
                        />
                    </div>
                    {/* Tag content */}
                    {isContentVisible && (
                        <div className='px-4'>
                            {activeTab === 'posts' && <Posts />}
                            {activeTab === 'reels' && <Reels />}
                            {activeTab === 'tagged' && <Tags />}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MobileProfile
