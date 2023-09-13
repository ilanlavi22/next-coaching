'use server';

import { revalidateTag } from 'next/cache';

export const deleteTicket = async (id: Ticket) => {
  await fetch(`https://${process.env.MOCKAPI_KEY}.mockapi.io/tickets/${id}`, {
    //cache: 'no-cache',
    method: 'DELETE',
  });
  revalidateTag('tickets');
};
