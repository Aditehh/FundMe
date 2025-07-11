import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex  bg-[#393E46] text-white h-14  items-center justify-between p-3'>
         <div className="logo text-xl md:text-3xl md:p-8 text-[#DFD0B8] font-bold cursor-pointer">JavaJuice</div>
            <ul className='flex gap-2 p-2 md:p-8 md:gap-5 items-center'>
                <li className='text-[#DFD0B8] text-sm md:text-lg  cursor-pointer'>Home</li>
                <li className='text-[#DFD0B8] text-sm md:text-lg cursor-pointer'>About</li>
                <li className='text-[#DFD0B8] text-sm md:text-lg cursor-pointer '>
                    <Link href={"/login"}>
                    <button type="button" class=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-100 font-medium rounded-lg text-sm md:text-lg px-2.5 py-1 text-center me-2 mb-2">Login</button> </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

