'use client';

import { deleteTicket } from '../create/actions/deleteTicket';

export default function Button({ id }: { id: Ticket }) {
  return <button onClick={() => deleteTicket(id)}>Delete</button>;
}
