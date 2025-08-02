import React from 'react'

const SongItem = ({ image, name, desc, id }) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-colors duration-200'>
      <img className='rounded w-full' src={image} alt={name} />
      <p className='font-bold mt-2 mb-1 truncate'>{name}</p>
      <p className='text-slate-300 text-sm truncate'>{desc}</p>
    </div>
  )
}

export default SongItem