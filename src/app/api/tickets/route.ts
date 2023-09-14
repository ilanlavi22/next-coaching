import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const res = await fetch(
    'https://64f10ef00e1e60602d2392f2.mockapi.io/tickets'
  );
  const tickets = await res.json();
  return NextResponse.json(tickets, {
    status: 200,
  });
}
