"use client"




import { useRouter } from "next/navigation";
import AddPdtForm from "@/components/forms/AddpdtForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const AddProduct = () => {

 

  return (
    <div className=" flex flex-col justify-center items-center gap-4">
    <p className="text-4xl font-semibold text-slate-500  mt-32"> Add Product Page</p>
    <p className="text-sm font-semibold text-slate-500">cannot find your category?</p>
    <Button variant={"default"}> <Link href="/addCategory">add Category</Link> </Button>
    <div className="mx-auto my-20 w-1/3 h-full"><AddPdtForm/></div>
    </div>
  )
}

export default AddProduct