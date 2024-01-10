
import AddPdtForm from '@/components/forms/AddpdtForm'




const CategoryList = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4">
    <p className="md:text-4xl text-lg font-semibold text-center mt-32 glow "> Tell which category car you can fix</p>
    

    <div className="mx-auto my-20 w-1/2 md:w-1/3 h-full"><AddPdtForm/></div>
    </div>
  )
    
  
}

export default CategoryList