import { addTicket } from './actions/addTicket';

export default async function CreateTicket() {
  return (
    <form
      action={addTicket}
      className='w-1/2 h-full bg-teal-900/60 rounded-md flex flex-col justify-center items-center content-center m-auto mt-7 py-10 drop-shadow-sm'
    >
      <div className='p-7 w-full'>
        <label htmlFor='title' className='block text-white py-2'>
          Title
        </label>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Ticket Title'
          className='w-full p-2 rounded-md outline-none text-sm text-gray-700'
        />
      </div>

      <div className='p-7 w-full'>
        <label htmlFor='priority' className='block text-white py-2'>
          Priority
        </label>
        <select
          name='priority'
          id='priority'
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
          id='body'
          className='w-full p-2 rounded-md outline-none text-sm text-gray-700 min-h-[150px]'
        />
      </div>

      <button
        type='submit'
        className='bg-white py-2 px-5 font-semibold text-base rounded-md disabled:cursor-wait'
      >
        Add Ticket
      </button>
    </form>
  );
}
