"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image";

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
   
      <Carousel setApi={setApi}  className="  mx-10 flex flex-row items-center justify-center">
         <CarouselPrevious />
        <CarouselContent >
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className = " bg-gradient-to-tr from-yellow-500 to-orange-500 ">
                <CardContent className="flex items-center justify-center h-72 md:h-96  w-screen aspect-rectangle  p-6  relative">
                  <span className="font-semibold lg:text-4xl sm:text-2xl text-slate-100">{index + 1}</span>
                
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
       
        <CarouselNext />
      </Carousel>
    
  )
}
