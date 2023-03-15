import React from 'react'
import { Link } from "react-router-dom"

function ModeBar({ blackIcon, modeName, link }) {
  return (
    <div>
      <Link to={link}>
        <button
          className='text-black w-full bg-light_silver active:bg-russian_green focus:bg-russian_green focus:text-white h-12 rounded-md flex flex-row pr-2 pl-3 py-2 gap-2 items-center'>
          <img
            src={blackIcon}
            alt=""
            className="h-8 object-contain"
          />
          <div className='align-middle py-2 flex justify-start'>
            <div className='font-inter lg:text-[14px] md:text-[10px] self-center'>
              {modeName}
            </div>
          </div>
        </button>
      </Link>
    </div>
  )
}

export default ModeBar