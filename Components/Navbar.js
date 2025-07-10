import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex  bg-[#393E46] text-white h-16  items-center justify-between p-5'>
            <div className="logo text-xl md:text-3xl md:p-8 text-[#DFD0B8] font-bold cursor-pointer">JavaJuice</div>
            <ul className='flex gap-2 p-2 md:p-8 md:gap-5'>
                <li className='text-[#DFD0B8] text-sm md:text-lg  cursor-pointer'>Home</li>
                <li className='text-[#DFD0B8] text-sm md:text-lg cursor-pointer'>About</li>
                <li className='text-[#DFD0B8] text-sm md:text-lg cursor-pointer'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar

