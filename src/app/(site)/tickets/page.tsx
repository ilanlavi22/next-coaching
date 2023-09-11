import { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';

export default function Tickets() {
  return (
    <div>
      <h1>Tickets</h1>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
