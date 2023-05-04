import React from 'react'
import {UserCircleIcon} from '@heroicons/react/24/solid'
import blackExit from '../assets/log-out.png'
import {db} from "../firebase";
import { useCollection } from 'react-firebase-hooks/firestore';
import Module from './Module'
import { collection } from 'firebase/firestore';

function SideBar() {
    const [logs] = useCollection(collection(db, "logs"));
    return (
        <div className='space-y-10 bg-light_silver px-[18px] py-7 w-1/7'>
            <div className='flex flex-col lg:gap-[160px]'>
                <div className='flex flex-row h-[64px] gap-1'>
                    <UserCircleIcon className='h-full'/>
                    <div className='align-middle py-2'>
                        <div className='text-black font-galindo text-base flex flex-start'>Demo user</div>
                        <div className='text-dark_sea_green font-galindo text-sm flex flex-start'>Connected</div>
                    </div>
                </div>
                <div className='align-middle flex flex-col gap-[18px]'>
                    {logs?.docs.map((doc) => {
                        return (
                            <Module 
                                key={doc.id}
                                des={doc.data().des}
                            />
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