// /src/app/api/partner-count/route.ts
import { NextResponse } from 'next/server';
import { getPartnerCount } from '@/lib/googleSheets';

export async function GET() {
  try {
    const result = await getPartnerCount();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error getting partner count:', error);
    return NextResponse.json(
      { count: 0, total: 100, error: 'Failed to get partner count' },
      { status: 500 }
    );
  }
}