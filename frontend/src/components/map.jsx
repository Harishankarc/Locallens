import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("../components/WorldMap"), {
  ssr: false,
});
export default function MapPage(){
  return(
    <div className="h-screen w-screen bg-[#161616] flex justify-center items-center">
      <InteractiveMap />
    </div>
  );
}