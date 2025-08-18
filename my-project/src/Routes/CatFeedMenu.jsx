import React from 'react'
import CatFeed  from '../Components/CatFeed';
export default function CatFeedMenu(){
    return(
        <>
        <div className="grid bg-gray-100 content-center grid-cols-4">
        <div className="rounded h10 w-30 " ><img src="/catLogo.jpg"/></div>
        <div className='p-5'><p className='text-xl'>10</p><p>posts</p></div>
        <div className='p-5'><p className='text-xl'>3,100</p><p>followers</p></div>
        <div className='p-5'><p className='text-xl'>3</p><p>followed</p></div>
        </div>
        <div className="grid flexbg-gray-100 content-center items-center">
            <p className='text-bold text-3xl'>Cat Photos</p>
            <p className='text-bold text-3xl text-gray-300'>Cat Blog</p>
            <p className='text-bold text-3xl'>A page dedicated to upload cute cat photos and to enjoy with all the internet</p>
            <p className='text-blue-500 underline'><a>cat.com</a></p>
        </div>
        <div>
            <CatFeed/>
        </div>
        </>
    );
}