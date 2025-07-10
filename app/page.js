import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-3 justify-center flex-col items-center text-[#DFD0B8] h-[34vh]">
        <div className="font-bold text-3xl">Fund your favourite creators</div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!!!
        </p>
        <div>
          <button type="button" class=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>

          <button type="button" class=" text-gray-900 bg-gradient-to-r from-red-200 to-yellow-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-yellow-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>


    </>
  );
}
