import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-between bg-[#393E46] text-white h-12 px-5  items-center'>

            <div className="logo">Copyright &copy; FundMe-All rights reserved</div>
            <ul className='flex gap-5'>
                <li className='hover:text-gray-300 cursor-pointer hover:underline'>Twitter</li>
               <a href="https://github.com/Aditehh/FundMe" target='_blank'><li className='hover:text-gray-300 cursor-pointer hover:underline'>Github</li></a> 
            </ul>

        </footer>
    )
}

export default Footer
