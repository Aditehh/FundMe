import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-3 justify-center flex-col items-center text-[#DFD0B8] h-[91.3vh]">
        <div className="font-bold text-5xl">Fund your favourite creators</div>
        <div className="text-xl">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!!!
        </div>
        <div>
          <button type="button" class=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-400 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Start Now</button>

          <button type="button" class=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="bg-[#948979] h-[70vh]">


        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          
        </div>

      </div>


    </>
  );
}
