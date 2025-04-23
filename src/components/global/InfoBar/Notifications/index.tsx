import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import React from 'react'

type Props = {}

const Notification = (props: Props) => {
  return (
    <Button className='bg-white rounded-full py-6'>
        <Bell className='text-[#352CC]'
        fill='#352CC'
        />
    </Button>
  )
}

export default Notification