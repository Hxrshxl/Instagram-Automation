import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../Loader'
import { AutomationDuoToneWhite } from '@ant-design/icons';
import { Activity } from 'lucide-react';



type Props = {}

const CreateAutomation = (props: Props) => {
  return ( <Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]'>
    <Loader state={false}>
    <Activity/>
        <p className='lg:inline hidden'>Create an Automation</p>
    </Loader>
   
  </Button>
  )
}

export default CreateAutomation