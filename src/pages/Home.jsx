import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import blackExit from '../assets/log-out.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
// import { redirect } from 'react-router-dom';
import {db} from "../firebase";
import { useCollection } from 'react-firebase-hooks/firestore';
import Module from './Module'
import { collection } from 'firebase/firestore';
import Dashboard from './Dashboard';
function Home() {
  const [user] = useAuthState(auth);
  const [modules] = useCollection(collection(db, "modules"));
  return (
    <>
      <div className='flex flex-row'>
        <div className='space-y-10 bg-light_silver px-[18px] py-7 w-[240px] h-screen grid grid-cols-1 content-between'>
          <div className='flex flex-row h-[64px] gap-1'>
              <UserCircleIcon className='h-full'/>
              <div className='align-middle py-2'>
                  <div className='text-black font-galindo text-base flex flex-start'>Demo user</div>
                  <div className='text-dark_sea_green font-galindo text-sm flex flex-start'>Connected</div>
              </div>
          </div>
          <div className='align-middle flex flex-col gap-[18px]'>
            {modules?.docs.map((doc) => (
              <Module
                key={doc.id}
                id={doc.id}
                moduleName={doc.data().moduleName}
              />
            ))}
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
        <div className='bg-eggshell flex flex-grow items-center'>
          <Dashboard/>
        </div>
      </div>
    </>
  )
}
export default Home