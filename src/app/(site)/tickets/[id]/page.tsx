import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

type Params = {
  params: {
    id: string;
  };
};
// Single Dynamic Segment
// generateStaticParams
// can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.

// export async function generateStaticParams() {
//   const res = await fetch(
//     `https://${process.env.MOCKAPI_KEY}.mockapi.io/tickets'
//   );
//   const tickets = await res.json();

//   return tickets.map((ticket: Ticket) => ({
//     id: ticket.id,
//   }));
// }

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const res = await fetch(
    `https://${process.env.MOCKAPI_KEY}.mockapi.io/tickets/${id}`
  );

  const ticket = await res.json();

  return {
    title: ticket.title,
    description: ticket.body,
  };
}

async function getSingleTicket(id: string) {
  const res = await fetch(
    `https://${process.env.MOCKAPI_KEY}.mockapi.io/tickets/${id}`
  );

  if (!res.ok) {
    notFound();
    //throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function TicketDetails({ params }: Params) {
  const ticket = await getSingleTicket(params.id);

  return (
    <div>
      {ticket.id}
      {ticket.title}
    </div>
  );
}
