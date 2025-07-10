import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-around bg-gray-700 text-white h-20  items-center'>
            <div className="logo text-2xl font-bold cursor-pointer">FundMe</div>
            <ul className='flex gap-5'>
                <li className='hover:text-gray-300 cursor-pointer'>Home</li>
                <li className='hover:text-gray-300 cursor-pointer'>About</li>
                <li className='hover:text-gray-300 cursor-pointer'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
