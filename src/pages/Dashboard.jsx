import React from 'react'

function Dashboard() {
  return (
    <div className='flex flex-row justify-around items-center bg-russian_green h-[200px] w-[332px] rounded-2xl px-4'>
      <div className='flex flex-col items-center w-[80px]'>
        <div className='text-white font-acme'>
          Irrigation
        </div>
        <div className='text-white font-acme text-[36px]'>
          37
        </div>
        <dib className='text-white font-acme'>
          ml/m
        </dib>
      </div>
      <div className='bg-white w-[1px] h-4/5'/>
      <div className='flex flex-col items-center w-[80px]'>
        Hello
      </div>
    </div>
  )
}

export default Dashboard