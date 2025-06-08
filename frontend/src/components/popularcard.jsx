import { Star } from "lucide-react";

export default function PopularCard() {
  return (
    <div className="bg-[#0a0a0a] hover:scale-101 hover:shadow-2xl transition-transform duration-300 rounded-lg flex flex-col pb-4 w-96 cursor-pointer">
      <div className="h-52 w-full mb-5">
        <img
          src={"/images/service-photo.jpg"}
          className="h-full w-full object-cover rounded-t-xl mb-2"
        />
      </div>
      <div className="px-5">
        <div className="flex justify-start items-center gap-1">
        {
          Array.from({length : 5}).map((_,i)=>{
            return(
              <Star color="#FFD700" fill="#FFD700" key={i} size={15}/>
            );
          })
        }
        <h1 className="ml-2 text-gray-400">(130 Reviews )</h1>
        </div>
        <h1 className="text-xl my-2 font-bold">Complete House Cleaning</h1>
        <h1 className="text-sm text-gray-400">₹1000 <span className="line-through ml-2">₹1500</span></h1>
        <div className="flex gap-5 items-center mt-5">
          <div>
            <img
              src="/images/avatar.png"
              className="h-12 w-12 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Harishankar C</h1>
            <h1 className="text-sm text-gray-400">Service Provider</h1>
          </div>
        </div>
      </div>
    </div>
  );
}