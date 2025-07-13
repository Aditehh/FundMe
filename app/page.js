import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-3 justify-center flex-col items-center text-[#DFD0B8] h-[70vh]">
        <div className="font-bold text-5xl">Fund the devs</div>
        <div className="text-xl">
          A crowdfunding platform for developers. Get funded by your fans and followers. Start Now!!!
        </div>
        <div>
          <button type="button" className=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-400 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Start Now</button>

          <button type="button" className=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      {/* first section division here */}

      <div>
        <div className="bg-[#948979] h-[72vh] md:h-[calc(100vh-12vh)] flex items-center justify-center p-10 ">
          <div className=" bg-white flex flex-col rounded-3xl  text-[#dfd0b8] dark:bg-gray-800 dark:border-gray-700 md:h-[85vh] h-[65vh] w-[82vw] p-3 gap-5 md:gap-8 md:text-center md:items-center md:p-7">
            <div className="text-lg text-[#dfd0b85a] font-semibold md:text-2xl  ">
              Support
            </div>

            <div className="text-4xl font-semibold text-[#dfd0b8] md:text-6xl md:gap-5 md:flex md:flex-col ">

              <div className="  md:mx-24">
                Give your audience
              </div>

              <div>
                an easy way to say thanks.
              </div>

            </div>

            <div className="text-sm   text-[#dfd0b8b4] md:text-2xl md:px-24 ">
              Fuel your code with JavaJuice. Let your fans support you with a shot of digital caffeine quick payments, kind messages, and zero friction.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#948979] flex flex-col p-10">
        <div className="text-xl font-bold ">
          <div>
            JavaJuice is for creators.
          </div>
          <div>
            Just real people doing cool things.
          </div>
        </div>


        <div>
          <div>
            <div>Your supporters are yours. We never touch them. You own the list.</div>
            <div> Talk to real humans. Get paid instantly.</div>
          </div>

          <div>
            <div>No jargon. No delays. Just pure creator fuel.</div>
            <div></div>
          </div>
        </div>


      </div> */}
    </>
  );
}


// JavaJuice is for creators.  
// Not businesses. Not brands. Just real people doing cool things.

// Your supporters are yours. We never touch them. You own the list.

// Talk to real humans. Get paid instantly.

// No jargon. No delays. Just pure creator fuel.