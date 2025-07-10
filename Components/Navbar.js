import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-around bg-[#393E46] text-white h-16  items-center'>
            <div className="logo text-3xl text-[#DFD0B8] font-bold cursor-pointer">FundMe</div>
            <ul className='flex gap-5'>
                <li className='text-[#DFD0B8] text-lg cursor-pointer'>Home</li>
                <li className='text-[#DFD0B8] text-lg cursor-pointer'>About</li>
                <li className='text-[#DFD0B8] text-lg cursor-pointer'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar

