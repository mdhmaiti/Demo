"use client";

// just render the sign in and sign out with the o auth ( bilkul jhamela nhi lene ka )
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {UserRound } from "lucide-react";

import { signIn, signOut, useSession } from "next-auth/react";

import { useToast } from "./ui/use-toast";
import { useEffect } from "react";
import { ToastAction } from "./ui/toast";
import GoogleIcon from "./ui/GoogleIcon";
import AdminSwitch from "./AdminSwitch";
import { useRouter } from "next/navigation";

export function AccountButton() {
  const { data: session, status } = useSession();
  const router = useRouter()

  

  const { toast } = useToast();
  const [position, setPosition] = React.useState("bottom");

 
  //toggle admin

 
  useEffect(() => {
    if (status === "authenticated") {
      try {
        toast({
          title: "Sign in successfull",
        });
      } catch (error) {
        console.log(error)
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }
  }, [status, toast]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="outline">
          <UserRound className="glow" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {/* if there is already a user present show logout, if not show login */}
         (<div className=" flex flex-col gap-2">
            <DropdownMenuRadioItem
            className="flex flex-row items-center justify-center p-2 gap-2"
              onClick={() => {
                try {
                 
                  toast({
                    title: " sign-out successful",
                  });
                } catch (error) {
                  toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                    action: (
                      <ToastAction altText="Try again">Try again</ToastAction>
                    ),
                  });
                }
              }}
              value="top"
            >
             <GoogleIcon Height={"30"} Width={"30"}/>
                <p className="text-md font-bold">Google Sign-out</p>
                
            </DropdownMenuRadioItem>
  
      
      <div className="mx-auto my-1">
       {/* <AdminSwitch  isAdmin={session.user.isAdmin}  />  */}
      
      </div>
          
             </div>
            
       
            <>
              <DropdownMenuRadioItem
                className="flex flex-row items-center justify-center p-2 gap-2"
                onClick={() => {
                
                }}
                value="top"
              > <GoogleIcon Height={"30"} Width={"30"}/>
                <p className="text-md font-bold ">Google Sign-in</p>
              </DropdownMenuRadioItem>
            </>
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
