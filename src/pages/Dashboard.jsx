import React from 'react'
import { useSelector } from 'react-redux'
import { selectModuleId, selectModuleName } from '../features/moduleSlice'
import { auth, db } from "../firebase"
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
function Dashboard() {
  const moduleId = useSelector(selectModuleId);
  const modulelName = useSelector(selectModuleName);
  const [user] = useAuthState(auth)
  const [modules] = useCollection(collection(db, "modules"));
  const [stats] = useCollection(
    moduleId && 
    db
      .collection("modules")
      .doc(moduleId)
      .collection("values")
  )
  return (
    <div className='flex flex-row justify-around items-center bg-russian_green h-[200px] w-[332px] rounded-2xl px-4'>
      <div className='flex flex-col items-center w-[80px]'>
      </div>
      <div className='bg-white w-[1px] h-4/5'/>
      <div className='flex flex-col items-center w-[80px]'>
        Hello
      </div>
    </div>
  )
}

export default Dashboard
//4:13:25 input text with condition that a module is accessed