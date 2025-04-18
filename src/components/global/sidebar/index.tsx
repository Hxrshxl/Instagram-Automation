'use client'

import { usePaths } from "@/hooks/user-nav"
import Image from 'next/image';
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { DonutIcon, HelpCircle } from "lucide-react";
import { SubscriptionPlan } from "../subscription";
import UpgradeCard from "./upgrade";




type Props = {
    slug: string
}

const Sidebar = ({slug}: Props) => {
    const {page}=usePaths()
  return (
    <div className="w-[250px] border-2 radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
        <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop-filter backdrop-blur_safari backdrop-blur-3xl">
           <div className="flex gap-x-2 items-center p-5 justify-center">
                <Image
                src={`/Logo.svg`}
                width={150}
                height={150}
                alt="Logo"
                />    
                </div> 

               <div>
               <Items
               page={page}
               slug={slug}
               />
               </div>
               <div className="px-16">
                <Separator
                orientation="horizontal"
                className="bg-[#bebaba] "
                />
               </div>
               <div className="px-3 flex flex-col gap-y-5">
                <div className="flex gap-x-2">
                  <ClerkAuthState />
                </div>
                <p className="text-[#9B9CA0]">Profile</p>
                <div className="flex gap-x-3">
                </div>
                <div className="flex gap-x-3">
                  <HelpCircle/>
                  <p className="text-[#989CA0]">Help</p>
                </div>
              </div>

              <SubscriptionPlan>
                <div className="flex-1 flex flex-col justify-end">
                  <UpgradeCard />
                </div>
              </SubscriptionPlan>

        </div>

    </div>

  )
}

export default Sidebar