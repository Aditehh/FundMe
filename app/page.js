import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-3 justify-center flex-col items-center text-[#DFD0B8] h-[91.3vh]">
        <div className="font-bold text-5xl">Fund the devs</div>
        <div className="text-xl">
          A crowdfunding platform for developers. Get funded by your fans and followers. Start Now!!!
        </div>
        <div>
          <button type="button" class=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-400 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Start Now</button>

          <button type="button" class=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      {/* first section division here */}


      <div className="bg-[#948979] h-[calc(100vh-12vh)] flex items-center justify-center p-10 ">
        <div class=" bg-white flex flex-col rounded-3xl  text-[#dfd0b8] dark:bg-gray-800 dark:border-gray-700 h-[85vh] w-[82vw] p-3 gap-5 md:gap-8  md:items-center md:p-7">
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

          <div className="text-sm  text-[#dfd0b8b4] md:text-xl">
            Fuel your code with JavaJuice.
            Let your fans support you with a shot of digital caffeine quick payments, kind messages, and zero friction.
          </div>
        </div>

      </div>


    </>
  );
}
