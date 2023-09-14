import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='w-full flex gap-5 p-5 bg-white'>
      <Link href='/'>Home</Link>
      <Link href='/tickets'>Tickets</Link>
      <Link href='/tickets/create'>Create Ticket</Link>
      <Link href='/login'>Login</Link>
    </nav>
  );
}
