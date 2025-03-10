import React from 'react'
import { Link } from 'react-router-dom'
import reelsData from '../ReelsData'
import Liked from "/src/components/Icons/Like/liked.png"
import Comment from "/src/components/Icons/Comment/commented.png"
const ReelsCard = () => {
    return (
        <>
            {
                reelsData.map((reel) => (
                    <Link to="/" key={reel.id} className='lg:w-[24%] md:w-[24%] sm:w-[32%] w-[32%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] relative group '
                        style={
                            {
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }
                        }>
                        <video src={reel.video} title='reel video' loop muted autoPlay className='w-full h-full object-cover' />
                        <div className='hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] left-[50%] translate-x-[-50%]'>
                            <div className='flex items-center gap-x-1'>
                                <img src={Liked} alt="like icon" className='w-6 h-6' />
                                <p className='text-base text-white font-medium'>{reel.likeCount}</p>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <img src={Comment} alt="like icon" className='w-6 h-6' />
                                <p className='text-base text-white font-medium'>{reel.commentCount}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default ReelsCard
