import React from 'react'
import Switch from '../components/Switch'
function SwitchBlock({funcname}) {
  return (
    <div className='bg-dark_sea_green w-[500px] h-[108px] py-5 px-[28px] ml-20 rounded-3xl flex flex-row gap-[92px]'>
        <div className='text-black font-acme text-[36px] self-center'>
            {funcname}
        </div>
        <Switch />
    </div>
  )
}

export default SwitchBlock