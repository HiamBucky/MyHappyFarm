import React from 'react'
import {UserCircleIcon} from '@heroicons/react/24/solid'
import ModeBar from './ModeBar'
import blackExit from '../assets/log-out.png'
import blackWater from '../assets/black-water.png'
import blackLight from '../assets/black-light.png'
import blackFan from '../assets/black-fan.png'
import blackWeather from '../assets/black-weather.png'
const menuItems = [
    { id: 1, label: "Weather", icon: blackWeather, link: "/" },
    { id: 2, label: "Lighting System", icon: blackLight, link: "/light" },
    { id: 3, label: "Fan System", icon: blackFan, link: "/fan" },
    { id: 1, label: "Hydration System", icon: blackWater, link: "/irrigation" },
];

function SideBar() {
    return (
        <div className='space-y-10 bg-light_silver px-[18px] py-7 w-1/7'>
            <div className='flex flex-col lg:gap-[254px]'>
                <div className='flex flex-row h-[64px] gap-1'>
                    <UserCircleIcon className='h-full'/>
                    <div className='align-middle py-2'>
                        <div className='text-black font-galindo text-base flex flex-start'>Demo user</div>
                        <div className='text-dark_sea_green font-galindo text-sm flex flex-start'>Connected</div>
                    </div>
                </div>
                <div className='align-middle flex flex-col gap-[18px]'>
                    {menuItems.map(({ icon: Icon, label: Label, link: Link}) => {
                        return (
                            <ModeBar blackIcon={Icon} modeName={Label} link={Link}/>
                        )
                    })}
                </div>
                <button className='text-black w-full bg-silver h-12 rounded-md flex flex-row pr-2 pl-3 py-2 gap-2 items-center'>
                    <img
                    src={blackExit}
                    alt=""
                    className="h-8 object-contain"
                    />
                    <div className='align-middle py-2 flex justify-start'>
                        <div className='font-inter lg:text-[14px] md:text-[10px] self-center'>
                            Log Out
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SideBar