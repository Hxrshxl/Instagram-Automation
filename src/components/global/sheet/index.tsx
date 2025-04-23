import React from 'react'
import {
    Sheet as ShadcnSheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

type Props = {
    trigger: React.ReactNode
    children?: React.ReactNode
    className?: string
    side: 'left' | 'right'
}

const Sheet = ({ children, trigger, className, side }: Props) => (
  <ShadcnSheet>
    <SheetTrigger className={className}>{trigger}</SheetTrigger>
    
    {/* Wrap with SheetHeader and SheetTitle */}
    <SheetContent side={side} className='p-0'>
      <SheetHeader>
        <VisuallyHidden>
          <SheetTitle>Sheet Title</SheetTitle>
        </VisuallyHidden>
      </SheetHeader>
      {children}
    </SheetContent>
  </ShadcnSheet>
)

export default Sheet
