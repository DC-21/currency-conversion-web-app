import React from 'react'

const Navbar = () => {
  return (
    <div className='py-4 px-3 items-center w-full sticky top-0'>
        <div className='bg-[#260c65] rounded cursor-pointer py-6 px-4 w-full flex shadow-lg text-white shadow-blue-800 justify-between items-center'>
            <a>DiCE</a>
            <ul className='flex gap-8'>
                <li className='py-2 w-16 items-center text-center rounded hover:bg-[#fe8267]'>
                    <a>Home</a>
                </li>
                <li className='py-2 w-16 items-center text-center rounded hover:bg-[#fe8267]'>
                    <a>News</a>
                </li>
                <li className='py-2 w-16 items-center text-center rounded hover:bg-[#fe8267]'>
                    <a>About</a>
                </li>
            </ul>
            <a className='py-2 w-20 items-center text-center rounded bg-[#fe8267]'>
                Donate
            </a>
        </div>
    </div>
  )
}

export default Navbar