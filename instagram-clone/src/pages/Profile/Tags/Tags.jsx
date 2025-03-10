import React from 'react'
import { Link } from 'react-router-dom'
const Tags = () => {
  return (
    <>
        <div className='w-full h-auto flex items-center gap-1 flex-wrap'>
            <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[33%] w-[33%] lg:h-[40vh] md:h-[35vh] sm:h-[35vh] h-[25vh]'
            style={
                {
                    backgroundImage:'url("https://picsum.photos/200/300?random/?adventure")',
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                }
            }/>
            <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[33%] w-[33%] lg:h-[40vh] md:h-[35vh] sm:h-[35vh] h-[25vh]'
            style={
                {
                    backgroundImage:'url("https://picsum.photos/200/300?random/?animals")',
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                }
            }/>
            <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[33%] w-[33%] lg:h-[40vh] md:h-[35vh] sm:h-[35vh] h-[25vh]'
            style={
                {
                    backgroundImage:'url("https://picsum.photos/200/300?random/?waterfalls")',
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                }
            }/>
            <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[33%] w-[33%] lg:h-[40vh] md:h-[35vh] sm:h-[35vh] h-[25vh]'
            style={
                {
                    backgroundImage:'url("https://picsum.photos/200/300?random/?nature")',
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                }
            }/>
            <Link to="/" className='lg:w-[33%] md:w-[33%] sm:w-[33%] w-[33%] lg:h-[40vh] md:h-[35vh] sm:h-[35vh] h-[25vh]'
            style={
                {
                    backgroundImage:'url("https://picsum.photos/200/300?random/?mountains")',
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                }
            }/>
        </div>
    </>
  )
}

export default Tags
