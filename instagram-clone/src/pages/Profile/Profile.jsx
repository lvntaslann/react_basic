import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Settings from '/src/components/Icons/Settings/Settings.jsx'
import highLightsData from '/src/pages/Profile/HighLights.jsx'
import Tab from './Tab/Tab'
import PostIcon from '/src/components/Icons/Post/post.png'
import ReelIcon from '/src/components/Icons/Reel/reel.png'
import TagIcon from '/src/components/Icons/Tag/tag.png'
import Posts from './Posts/Posts'
import Tags from './Tags/Tags'
import Reels from './Reels/Reels'


const Profile = () => {
    const [activeTab, setActiveTab] = useState("posts")
    const [isContentVisible, setContentVisible] = useState(true)

    const handleTabClick = (tab) => {
        setContentVisible(false);
        setTimeout(() => {
            setActiveTab(tab);
            setContentVisible(true);
        }, 100);
    }

    return (
        <>
            <div className="lg:w-[88%] md:w-[88%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden">
                {/* Your info section */}
                <div className='w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10'>
                    <img src="https://picsum.photos/200/300?random/?climber" alt="profile img" className='rounded-full lg:w-44 md:w-44 sm:w-36 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover' />
                    <div className='flex items-start flex-col'>
                        <div className='flex items-center gap-x-5 mb-4'>
                            <Link to="/profile" className='text-lg text-gray-200 font-normal'>
                                1lvntaslann
                            </Link>
                            <div className='flex items-center gap-x-2'>
                                <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>
                                    Edit profile
                                </button>
                                <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>
                                    View archive
                                </button>
                            </div>
                            <Settings />
                        </div>
                        {/* post, follower, following */}
                        <div className='flex items-center gap-x-6 mb-4'>
                            <h6 className='text-base text-gray-100 font-normal'>10 Posts</h6>
                            <Link to="/" className='text-base text-gray-100 font-normal'>1200 Followers</Link>
                            <Link to="/" className='text-base text-gray-100 font-normal'>1200 Following</Link>
                        </div>
                        <p className='text-base text-gray-100 font-normal'>Levent Aslan <br />Profession Account</p>
                    </div>
                </div>
                {/* Highlights section */}
                <div className='w-full h-autp flex items-center gap-x-9 mb-10'>
                    <div className='max-w-[61vw] w-full h-auto flex items-center gap-x-3 overflow-x-scroll'>
                        {highLightsData.map((data) => (
                            <Link to="/" key={data.id} className='flex items-center justify-between flex-col flex-shrink-0'>
                                <div className='w-28 h-28 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]'>
                                    <img src={data.img} alt={data.name} className='rounded-full h-full w-full object-cover p-[2.5px] bg-black' />
                                    <p className='text-white  mt-1'>
                                        {data.name}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* posts,reels,tagged section */}
                {/* Tab section */}
                <div className='w-full h-auto'>
                    <div className='w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]'>
                        <Tab label="POSTS" icon={PostIcon} isActive={activeTab === "posts"} onClick={() => handleTabClick("posts")} />
                        <Tab label="REELS" icon={ReelIcon} isActive={activeTab === "reels"} onClick={() => handleTabClick("reels")} />
                        <Tab label="TAGGED" icon={TagIcon} isActive={activeTab === "tagged"} onClick={() => handleTabClick("tagged")} />
                    </div>
                    {/* Tag content */}
                    {isContentVisible && (
                        <div>
                            {activeTab === "posts" && <Posts />}
                            {activeTab === "reels" && <Reels />}
                            {activeTab === "tagged" && <Tags />}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Profile
