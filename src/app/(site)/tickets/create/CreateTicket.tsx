'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateTicket() {
  const [data, setData] = useState({
    isLoading: false,
    title: '',
    priority: 'low',
    body: '',
  });

  const router = useRouter();

  const handleChange = (e: React.FormEvent<any>) => {
    const target = e.target as any;
    setData({ ...data, [target.name]: target.value });
  };

  const addTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData({ ...data, isLoading: true });

    if (!data.title || !data.body) return false;

    const ticket = {
      title: data.title,
      priority: data.priority,
      body: data.body,
    };

    const res = await fetch(
      'https://64f10ef00e1e60602d2392f2.mockapi.io/tickets',
      {
        // next: {
        //   revalidate: 0,
        // },
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(ticket),
      }
    );

    if (!res.ok) {
      setData({ ...data, isLoading: false });
      throw new Error('Failed to fetch data');
    }
    if (res.status === 201) {
      router.refresh();
      router.push('/tickets');
    }
  };

  return (
    <form
      className='w-1/2 h-full bg-teal-900/60 rounded-md flex flex-col justify-center items-center content-center m-auto mt-7 py-10 drop-shadow-sm'
      onSubmit={addTicket}
    >
      <div className='p-7 w-full'>
        <label htmlFor='title' className='block text-white py-2'>
          Title
        </label>
        <input
          type='text'
          name='title'
          value={data.title}
          onChange={handleChange}
          className='w-full p-2 rounded-md outline-none text-sm text-gray-700'
        />
      </div>

      <div className='p-7 w-full'>
        <label htmlFor='priority' className='block text-white py-2'>
          Priority
        </label>
        <select
          name='priority'
          value={data.priority}
          onChange={handleChange}
          className='w-full p-2 rounded-md outline-none text-sm text-gray-700'
        >
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
      </div>

      <div className='p-7 w-full'>
        <label htmlFor='body' className='block text-white py-2'>
          Body
        </label>
        <textarea
          name='body'
          value={data.body}
          onChange={handleChange}
          className='w-full p-2 rounded-md outline-none text-sm text-gray-700 min-h-[150px]'
        />
      </div>

      <button
        type='submit'
        className='bg-white py-2 px-5 font-semibold text-base rounded-md disabled:cursor-wait'
        disabled={data.isLoading}
      >
        {data.isLoading ? 'Loading ...' : 'Add Ticket'}
      </button>
    </form>
  );
}
