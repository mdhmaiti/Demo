import AddCatForm from '@/components/forms/AddCatForm'

import React from 'react'

const Car = () => {
  return (
    <div> <div className=" flex flex-col justify-center items-center gap-4">
    <p className="md:text-4xl text-lg font-semibold text-center mt-32 glow "> Add Car,category,picture of your car</p>
  
    
    <div className="mx-auto my-20 w-1/2 md:w-1/3 h-full"><AddCatForm/></div>
    </div></div>
  )
}

export default Car