import React from 'react'
import Switch from '../components/Switch'
function SwitchBlock({funcname}) {
  return (
    <div className='bg-dark_sea_green w-[360px] h-[100px] py-5 px-[28px] ml-20 rounded-3xl flex flex-row justify-between'>
        <div className='text-black font-acme text-[24px] self-center'>
            {funcname}
        </div>
        <Switch />
    </div>
  )
}

export default SwitchBlock