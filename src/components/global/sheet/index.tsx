import React from 'react'
import {
    Sheet as ShadcnSheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

type Props = {
    trigger: React.ReactNode
    children?: React.ReactNode
    className?: string
}

const Sheet = ({ children, trigger, className }: Props) => (
  <ShadcnSheet>
    <SheetTrigger className={className}>{trigger}</SheetTrigger>
    <SheetContent>{children}</SheetContent>
  </ShadcnSheet>
)

export default Sheet
