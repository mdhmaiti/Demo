"use client"

import { useForm } from "react-hook-form";


import React, { useCallback, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { productSchema } from "@/types/types";
import { useDropzone} from 'react-dropzone';
import Image from "next/image";
import { Textarea } from "../ui/textarea";

type category = {
  title: string;
  slug: string;
};

type TFormData = z.infer<typeof productSchema>;

const AddPdtForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,

    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(productSchema),
  });
  const { toast } = useToast();

  // to upload the image function
  
  // using dropzone 
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader;

    file.onload = function() {
      setPreview(file.result);
    }

    file.readAsDataURL(acceptedFiles[0])
  }, [])

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

 
      
      
  
     


  

  const onSubmit = async (data: TFormData) => {
    console.log('Form submitted with data:')
    console.log("working")

     
     
        toast({
          title: "requested added successfully",
        });
     

        reset();
        setPreview(null);
    
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-4"
    >
      <label className="text-md font-semibold">Full Name:</label>
      <Input {...register("title", { required: "Fullname is required" })} />
      {errors.title && (
        <span className="text-sm text-red-500">{errors.title.message}</span>
      )}

      <label className="text-md font-semibold">Description:</label>
      <Textarea {...register("desc")} />

      <label className="text-md font-semibold"># number of shops</label>
      <Input
        {...register("price", { required: " it is required is required" })}
        type="number"
      />
      {errors.price && (
        <span className="text-sm text-red-500">{errors.price.message}</span>
      )}

      <label className="text-md font-semibold">Type of shop</label>
      <Input
        className="outline-none rounded-md text-md p-2 focus:bg-accent focus:text-accent-foreground"
        {...register("catSlug", { required: "Type is required" })}
      />
        
       
      
      {errors.catSlug && (
        <span className="text-sm text-red-500">{errors.catSlug.message}</span>
      )}

      <label className="flex flex-row items-center gap-2">
        <p className="text-md font-semibold "> Quick Service:</p>
        <input {...register("isFeatured")} type="checkbox" />
      </label>

      {/* handling the image */}
      <br/>
      <label className="text-md font-semibold">Picture</label>
      <div {...getRootProps()}className="border-dotted border-2 border-sky-500 rounded-2xl p-4 opacity-70" >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p>Drag and drop some files here, or click to select files</p>
              }
      </div>
      <div>
      {preview && (
            <p className="mb-5">
              <Image src={preview as string} height={400} width={400} alt="Upload preview" />
            </p>
          )}
      </div>
      <br/>
      <label className="text-md font-semibold">Email</label>
      <Input  {...register("userEmail")} />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddPdtForm;


      // <label className="text-md font-semibold">Picture</lab