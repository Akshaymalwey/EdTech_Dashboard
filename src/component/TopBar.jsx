import React from 'react'

const TopBar = () => {
  return (
   <div className='w-full h-25 bg-gray-800 text-white p-4 flex items-center justify-between fixed z-25'>
        <h1 className='w-20 pl-5 '>EdTech</h1>
        <div className='flex items-center justify-around space-x-10'>
            <button className='btn btn-primary'>Logout</button>
            <img src='../assets/avatar.png' alt="" className='size-10'/>

        </div>
    </div>
  )
}

export default TopBar
