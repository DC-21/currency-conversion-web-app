import React from 'react'

const Navbar = () => {
  return (
    <div className='py-1 px-3 items-center w-full sticky top-0'>
        <div className='bg-[#260c65] rounded cursor-pointer py-6 px-4 w-full flex shadow-md text-white shadow-blue-800 justify-between items-center'>
            <a className='text-white font-bold'>
              DiCE
            </a>
            <a href='https://bmc.link/cholahkuboQ' className='py-2 w-20 items-center text-center rounded bg-[#fe8267]'>
                Donate
            </a>
        </div>
    </div>
  )
}

export default Navbar