'use server';

import { redirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';

export const addTicket = async (e: FormData) => {
  const title = e.get('title')?.toString() || '';
  const body = e.get('body')?.toString() || '';
  const priority = e.get('priority')?.toString() || '';

  if (!title || !priority || !body) {
    return;
  }

  const newTicket: Ticket = {
    title,
    body,
    priority,
  };

  await fetch(`https://${process.env.MOCKAPI_KEY}.mockapi.io/tickets`, {
    //cache: 'no-cache',
    method: 'POST',
    body: JSON.stringify(newTicket),
    headers: { 'Content-Type': 'application/json' },
  });

  revalidateTag('tickets');
  redirect('/tickets');
};
