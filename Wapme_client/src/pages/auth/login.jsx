import * as React from 'react';
import Image from 'next/image';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from '@/utils/FirebaseConfig';

function login() {
  React.useEffect(() => {});

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const {
        user: { displayNama: name, email, photoUrl: profileImage },
      } = await signInWithPopup(firebaseAuth, provider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className='flex flex-col gap-6 justify-between items-center bg-panel-header-background h-screen w-screen py-6'
      id='login'
    >
      <div className='flex flex-col items-center justify-center gap-2 text-white'>
        <Image src='/whatsapp.gif' width={200} height={200} alt='logo' />
        <span id='app-name' className='text-2xl font-bold tracking-wide'>
          WapMe
        </span>
      </div>
      <div className='mb-8'>
        <button
          id='login-btn'
          onClick={() => handleGoogleLogin()}
          className='border-2 border-red-400 text-lg text-white font-bold tracking-wide rounded-md py-2.5 px-6 shadow-xl flex flex-row gap-4 justify-center items-center'
        >
          <FaGoogle className='text-3xl' />
          Login with google
        </button>
      </div>
    </div>
  );

export default login;
