import React from 'react'
import {Link} from 'react-router-dom'

import appwriteService from "../appwrite/config"

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
        <div 
          className='w-full max-w-[300px] h-[400px] bg-pink-900 rounded-xl p-4 
          flex flex-col justify-between transition-transform transform hover:scale-105'
          style={{ minWidth: "250px" }}
        >
            {/* Image Container */}
            <div className='w-full h-[250px] mb-4 flex justify-center items-center'>
                <img 
                  src={appwriteService.getFilePreview(featuredImage)} 
                  alt={title} 
                  className='w-full h-full object-cover rounded-lg' 
                />
            </div>
            
            {/* Title */}
            <h2 className='text-2xl font-sans font-bold text-amber-400 text-center'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard
