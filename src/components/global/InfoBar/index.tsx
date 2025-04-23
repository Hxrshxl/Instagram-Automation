'use client'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/user-nav'
import { HelpCircle, Menu, Search } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import Items from '../sidebar/items'
import { Separator } from '@radix-ui/react-separator'
import ClerkAuthState from '../clerk-auth-state'
import { SubscriptionPlan } from '../subscription'
import UpgradeCard from '../sidebar/upgrade'
import Image from 'next/image'
import CreateAutomation from '../Create-Automation'
import SearchBar from './Search'
import Notification from './Notifications'



type Props = {
    slug: string
}

const InfoBar = ({ slug }: Props) => {
    const { page } = usePaths()
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page === slug
    return currentPage && <div className='flex flex-col'>
        <div className=' flex gap-x-3 lg:gap-x-5 justify-end'>
            <span className='lg:hidden flex items-center flex-1 gap-x-2'>
                <Sheet trigger={<Menu />}
                    className="lg:hidden"
                    side='left'>
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
                            <HelpCircle />
                            <p className="text-[#989CA0]">Help</p>
                        </div>
                    </div>

                    <SubscriptionPlan>
                        <div className="flex-1 flex flex-col justify-end">
                            <UpgradeCard />
                        </div>
                    </SubscriptionPlan>

                </Sheet>
            </span>

            <SearchBar/>
            <CreateAutomation/>
            <Notification/>
        </div>
    </div>
}

export default InfoBar
