import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full text-white' >
        <img className='relative object-cover w-full ' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/319574/3a48afb63ec44896b29f632cbe0eec7c/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/5.jpg?token-hash=TxpINT7GexR_tz9VvM3Bh-pMPlHq1XaF47lZwjXskwc%3D&token-time=1754265600" alt="" />
        <div className='absolute right-[45%] top-96 rounded-full' >
          <img className='border-white border-2 h-[110px] w-[150px] rounded-full ' src="https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-full-719a53dc.webp" alt="" />
        </div>
      </div>

      <div className='flex-col text-white my-16 flex justify-center items-center gap-2'>
        <div className='font-bold text-xl'>
          @{params.username}
        </div>
        <div className='text-slate-500 text-sm'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-500 text-sm'>
          3,34,345 members . 83 posts . $12,332/release
        </div>




        <div className="PaymentsAndSupporters flex gap-4 w-[80%] mx-auto">
          {/* Supporters Section */}
          <div className="supporters bg-slate-600 p-4 rounded-lg w-1/2  overflow-y-auto">
            <h2 className="text-white font-bold mb-2">Supporters</h2>
            <ul className="text-white space-y-1 text-sm">
              <li>Messi donated a generous amount to this project</li>
              <li>Ronaldo became a top-tier supporter</li>
              <li>Neymar shared this with all his fans</li>
              <li>Marta endorsed this amazing idea</li>
              <li>Iniesta quietly became a silent donor</li>
            </ul>
          </div>

          {/* Payments Section */}
          <div className="payments bg-slate-600 p-4 rounded-lg w-1/2">
            <h2 className="text-white font-bold mb-2">Payments</h2>
            <div className='flex gap-2 flex-col'>
              <div>
                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter the Name' />
              </div>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter the Message' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter the Amount' />
              <button className='bg-slate-800 p-3 rounded-lg w-full'>Pay</button>


            </div>
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg'>$20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>$30</button>
              <button className='bg-slate-800 p-3 rounded-lg'>$99</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Username
