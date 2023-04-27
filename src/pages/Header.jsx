import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
function Header() {
  const [user] = useAuthState(auth);
  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(() => history("/modules"))
      .catch((error) => alert(error.message));
  };

  return (
    <header className="flex items-center justify-between align-middle py-[28px] bg-rifle_green px-7">
      <div className=" text-white w-[404px] h-[40px] text-5xl font-galindo self-center">
        MYHAPPYFARM
      </div>
      <div className='flex space-x-4'>
        <button className='bg-light_silver p-2 rounded-full text-md px-4 text-black font-galindo' onClick={!user ? signIn : () => history("/modules")}>
          {!user ? "Login" : "Open Dashboard"}
        </button>
      </div>
    </header>
  )
}

export default Header