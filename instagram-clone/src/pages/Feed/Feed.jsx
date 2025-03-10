import React from 'react';
import TopNav from '/src/pages/TopNav.jsx'
import Stories from '/src/pages/Home/Stories/Stories.jsx'
import FeedCard from './FeedCard'; // Ensure this path is correct
import RecommendedUser from '/src/pages/Home/Recommend/RecommendedUser.jsx';

const Feed = () => {
  return (
    <>
      <div className='lg:w md:w sm:w-full w-full min-h-screen lg:py-7 md:py-7 sm:py-4 py-3 px3 flex items-start gap-x-20'>
        {/* Feed + story section */}
        <div className='lg:w-[55%] md:w-full sm:w-full w-full h-auto relative'>
          {/* Top navbar (only visible on small screen) */}
          <TopNav />
          {/* Stories section */}
          <Stories />
          {/* Feed section */}
          <div className='w-full h-auto flex items-center justify-center mt-6'>
            <div className='lg:w-[73%] md:w-[73] sm:w-[80%] w-[80%] h-auto'>
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />
            </div>
          </div>
        </div>
        {/* Recommended user section */}
        <div className='w-[25%] h-auto lg:block md:hidden sm:hidden hidden'>
          {/* Recommended users content */}
          <RecommendedUser />
        </div>
      </div>
    </>
  );
};

export default Feed;
