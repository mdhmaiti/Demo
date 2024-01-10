import { productSchema } from "@/types/types";
import Image from "next/image";
import React from "react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Card, CardTitle, CardContent, CardFooter } from "./ui/card";


const Featured =  () => {


  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-10  p-5 md:py-32 mx-5 shadow-md rounded-md shadow-slate-400 bg-slate-100 ">
      {/* Card 1 */}
    

      <Card className="w-full ">
        <CardTitle>
        ............
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
          .........
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardTitle>
          .........
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
          
        </CardContent>
        <CardFooter>
         ............
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardTitle>
      ............
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
      ..........
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardTitle>
        ............
        </CardTitle>

        <CardContent className="flex flex-row justify-center">
          <Image
            src="/MedhaPersonalLogo.png"
            width={100}
            height={100}
            alt="my pic"
            className="rounded-sm"
          />
        </CardContent>
        <CardFooter>
         ............
        </CardFooter>
      </Card>

 
    </div>
  );
};

export default Featured;
