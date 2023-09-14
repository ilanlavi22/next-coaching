'use client';
import { useState } from 'react';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='mt-5 p-5 m-auto w-full max-w-md space-y-6 border-[1px] border-gray-600 rounded-md shadow-sm '>
      <div className='flex flex-col space-y-3'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='flex flex-col space-y-3'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type='submit'
        className=' rounded-md bg-black p-2 py-1 text-white text-sm'
      >
        Submit
      </button>
    </form>
  );
}
