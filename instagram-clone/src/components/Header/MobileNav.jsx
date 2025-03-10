import React from 'react'
import { Link } from 'react-router-dom';
import HomeLogo from "/src/assets/navlogo/home.png";
import SearchLogo from "/src/assets/navlogo/search.png";
import ReelsLogo from "/src/assets/navlogo/reel.png";
import CreateLogo from "/src/assets/navlogo/create.png";

const MobileNav = () => {
    const sidebarItems = [
        {
            id: 1,
            link: "/search",
            icon: SearchLogo,
        },
        {
            id: 2,
            link: "/create",
            icon: CreateLogo,
        },
        {
            id: 3,
            link: "/reels",
            icon: ReelsLogo,
        },
    ];
    return (
        <>

            <div className='w-full h-full flex flex-row justify-around items-center'>
                <Link to="/" className='w-full h-auto  flex flex-col items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
                    <img src={HomeLogo} alt="home icon" className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />

                </Link>
                {sidebarItems.map((item) => (
                    <Link to={item.link} key={item.id} className='w-full h-auto  flex flex-col items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
                        <img src={item.icon} alt="home icon" className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />

                    </Link>
                ))}
                <Link to="/profile" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group'>
                    <img src="https://picsum.photos/200/300?random" alt="profil icon" className="w-10 h-10 items-center rounded-full object-cover group-hover:sxale-105 ease-out duration-300" />

                </Link>
            </div>
        </>
    )
}

export default MobileNav
