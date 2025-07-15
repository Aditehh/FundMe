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

      <div className='flex-col text-white my-16 flex justify-center items-center'>
        <div className='font-bold text-xl'>
          @{params.username}
        </div>
        <div className='text-slate-500 text-sm'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-500 text-sm'>
          3,34,345 members . 83 posts . $12,332/release
        </div>
      </div>
    </>
  )
}

export default Username
