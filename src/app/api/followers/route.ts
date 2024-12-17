import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    twitch: '+800',
    youtube: '+500',
    lastUpdated: new Date().toISOString()
  });
}
