"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()



  return (
    <nav className='flex  bg-[#393E46] text-white h-14  items-center justify-between p-3'>
      <div onclick="location.href='page.js';" className="logo text-xl md:text-3xl md:p-8 text-[#DFD0B8] font-bold cursor-pointer">JavaJuice</div>


      <ul className='flex gap-2 p-2 md:p-8 md:gap-5 items-center'>
        <li className='text-[#DFD0B8] text-sm md:text-lg cursor-pointer '>

          {session && (
            <div className="relative inline-block text-left px-2 py-1">
              <Link href="/dashboard">
                {/* You can even wrap the button with Link if needed */}
              </Link>

              <button
                id="dropdownHoverButton"
                // data-dropdown-toggle="dropdownHover"
                // data-dropdown-trigger="hover"
                className={`text-gray-900 inline-flex bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-100 font-medium rounded-lg text-sm px-5 py-2 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700`}
                type="button"
              >
                Hello, {session.user.email}!
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                // id="dropdownHover"
                className="z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a onclick={() => signOut()}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {!session &&
            <Link href={"/login"}>
              <button type="button" class=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-100 font-medium rounded-lg text-sm md:text-lg px-2.5 py-1 text-center me-2 mb-2">Login</button> </Link>}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

