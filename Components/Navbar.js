"use client"
import React from 'react'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { usePathname } from 'next/navigation'

import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  const pathname = usePathname();

  const changedropdown = () => {
    setshowdropdown(true)
  }


  return (
    <nav className='flex  bg-[#393E46] text-white h-14  items-center justify-between p-3'>
      <Link href={"/"} > <div className="logo text-xl md:text-3xl md:p-8 text-[#DFD0B8] font-bold cursor-pointer">JavaJuice</div> </Link>


      <ul className="flex gap-2 p-2 md:p-8 md:gap-5 items-center">
        <li className="text-[#DFD0B8] text-sm md:text-lg cursor-pointer">
          {session && (
            <div>
              <div
                className="relative"
                tabIndex={0}
              // onBlur={() =>  setshowdropdown(false)}
              >
                <button
                  onClick={changedropdown}
                  // onClick={() => setshowdropdown(!showdropdown)}
                  id="dropdownDefaultButton"
                  className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl md:text-sm px-2.5 py-1 me-2 mb-2"
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
                  id="dropdown"
                  className={`absolute mt-2 z-10 ${showdropdown ? "" : "hidden"
                    } bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 transition duration-200 ease-in-out`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/mypage"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        My page
                      </a>
                    </li>
                    <li>

                      <button
                        onClick={() => signOut()}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </button>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div>
            {!session && pathname !== "/login" && (
              <Link href="/login">
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-100 font-medium rounded-lg text-sm md:text-lg px-2.5 py-1 text-center me-2 mb-2"
                >
                  Login
                </button>
              </Link>
            )}
          </div>



        </li>
      </ul>

    </nav >
  )
}

export default Navbar

