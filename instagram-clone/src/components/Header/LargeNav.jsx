import React from 'react'
import { Link } from 'react-router-dom';
import InstagramLogo from "/src/assets/logo/instagram.png";
import InstagramIcon from "/src/assets/logo/icon.png";
import HomeLogo from "/src/assets/navlogo/home.png";
import SearchLogo from "/src/assets/navlogo/search.png";
import ExploreLogo from "/src/assets/navlogo/explore.png";
import ReelsLogo from "/src/assets/navlogo/reel.png";
import MessagesLogo from "/src/assets/navlogo/message.png";
import NotificationsLogo from "/src/assets/navlogo/like.png";
import CreateLogo from "/src/assets/navlogo/create.png";
import ThreadsLogo from "/src/assets/navlogo/threads.png";
import MoreLogo from "/src/assets/navlogo/more.png";
const LargeNav = () => {
    const sidebarItems = [
        {
            id: 1, // Benzersiz id
            name: "Search",
            link: "/search",
            icon: SearchLogo,
        },
        {
            id: 2,
            name: "Explore",
            link: "/explore",
            icon: ExploreLogo,
        },
        {
            id: 3,
            name: "Reels",
            link: "/reels",
            icon: ReelsLogo,
        },
        {
            id: 4,
            name: "Messages",
            link: "/messages",
            icon: MessagesLogo,
        },
        {
            id: 5,
            name: "Notifications",
            link: "/notifications",
            icon: NotificationsLogo,
        },
        {
            id: 6,
            name: "Create",
            link: "/create",
            icon: CreateLogo,
        },
    ];

    return (
        <>
            <div className='w-full h-full relative'>
                <Link to="/" className='mb-10 px-2 lg:block md:hidden'>
                    <img src={InstagramLogo} alt="instagram logo" className="w-28 h-auto" />
                </Link>
                <Link to="/" className='mb-10 px-2 lg:hidden md:block sm:block block'>
                    <img src={InstagramIcon} alt="instagram logo" className="w-28 h-auto" />
                </Link>

                <div className='w-full h-auto flex items-start flex-col gap-y-2'>
                <Link to="/" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
                    <img src={HomeLogo} alt="home icon" className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />
                    <p className='text-base font-medium text-white lg:block md:hidden sm:hidden'>Home</p>
                </Link>
                {sidebarItems.map((item) => (
                    <Link to={item.link} key={item.id} className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
                        <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />
                        <p className='text-base font-medium text-white lg:block md:hidden sm:hidden'>{item.name}</p>
                    </Link>
                ))}
                    {/* Profile section */}
                    <Link to="/profile" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
                        <img src="https://picsum.photos/200/300?random" alt="profil icon" className="w-6 h-6 rounded-full object-cover group-hover:sxale-105 ease-out duration-300" />
                        <p className='text-base font-medium text-white lg:block md:hidden sm:hidden'>Profile</p>
                    </Link>
                </div>
                {/* Threads and more nav link */}
                <div className='w-full h-auto absolute bottom-0 left-0 px-0'>
                    <Link to="/" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2'>
                        <img src={ThreadsLogo} alt="threads icon" className="w-6 h- object-contain group-hover:scale-105 ease-out duration-300" />
                        <p className='text-base font-medium text-white lg:block md:hidden sm:hidden'>Threads</p>
                    </Link>
                    <Link to="/" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2'>
                        <img src={MoreLogo} alt="more icon" className="w-6 h- object-contain group-hover:scale-105 ease-out duration-300" />
                        <p className='text-base font-medium text-white lg:block md:hidden sm:hidden'>More</p>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default LargeNav
