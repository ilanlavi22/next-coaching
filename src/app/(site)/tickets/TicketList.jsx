import Link from 'next/link';

async function getTickets() {
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    'https://64f10ef00e1e60602d2392f2.mockapi.io/tickets',
    // {
    //   cache: 'no-store',
    // }
    {
      next: {
        tags: ['tickets'],
      },
    }
  );

  if (!res.ok) {
    // Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

//export const revalidate = 0;  // The cache: 'no-store' is added to fetch requests.

export default async function TicketList() {
  const tickets = await getTickets();
  const ticketsSorted = [...tickets].sort((a, b) => {
    return a.id.localeCompare(a - b);
  });

  return (
    <div>
      {tickets.length === 0 && (
        <div>
          <h3>No tickets</h3>
          <p>There are no tickets in the system</p>
        </div>
      )}

      {ticketsSorted.map((ticket) => (
        <div key={ticket.id}>
          <Link href={`tickets/${ticket.id}`}>
            <h3 className='font-bold'>{ticket.title}</h3>
            <h6>{ticket.priority}</h6>
            {/* <p>{ticket.body.slice(0, 200)} ...</p> */}
            <p className=' line-clamp-1'>{ticket.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
