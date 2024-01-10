

import { CarouselDemo } from "@/components/CarouselDemo";
import Featured from "@/components/Featured";
import ItemCard from "@/components/ItemCard";
import { ResizablePage } from "@/components/ResizablePage";
import AppleStore from "@/components/ui/AppleStore";
import PlaystoreIcon from "@/components/ui/PlaystoreIcon";
import { Button } from "@/components/ui/button";
import Image from 'next/image'

const Home =() =>{
  return(
 
    
   
    <div className="flex flex-col h-full my-20 md:gap-32 gap-28 ">
      <div className=" lg:h-screen h-96 px-5  ">
     
     <CarouselDemo/> 
    </div>
    <Featured/>
   
    <div className="flex  flex-col md:flex-row mx-auto gap-4  p-4">
      <Button id=""className="  animate-bounce bg-slate-950 py-7 px-10 shadow-md shadow-slate-400 hover:bg-primary/50 text-white font-semibold  "><PlaystoreIcon Height={"40"} Width={"40"}/> <p className="">Google play Download</p></Button>
      <Button  id = ""className=" animate-bounce bg-slate-200 py-7 px-10 shadow-md shadow-slate-400 hover:bg-primary-foreground/90 text-slate-950 font-semibold "><AppleStore Height={"40"} Width={"40"}/> <p className="">Apple store Download</p></Button>


    </div>
    
    <iframe  className="video  " src="https://www.youtube.com/embed/FuJSv_Inzjw?si=F1P653-eKb4DrVx4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
   
   </div>
    
  
  )
}
export default Home;
