interface Params {
  id: string;
}

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(
  _: any,
  { params }: { params: Params }
): Promise<NextResponse> {
  const id = params.id;
  const res = await fetch(
    `https://64f10ef00e1e60602d2392f2.mockapi.io/tickets/${id}`
  );

  const ticket = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: 'cannot find the ticket' },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(ticket, {
    status: 200,
  });
}
