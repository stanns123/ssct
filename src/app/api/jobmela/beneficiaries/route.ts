import { NextResponse } from 'next/server';
import {JobmelaPrisma} from '@/lib/db';

// GET /api/jobmela/beneficiaries
export async function GET() {
  try {
    const beneficiaries = await JobmelaPrisma.jobMelaBeneficiary.findMany({
      select: {
        id: true,
        registration_number: true,
        full_name: true,
        mobile_number: true,
        status: true,
      },
      orderBy: { created_at: 'desc' },
    });
    return NextResponse.json(beneficiaries);
  } catch (error) {
          console.error('Error fetching beneficiaries:', error);
    return NextResponse.json({ error: 'Failed to fetch beneficiaries', details: String(error) }, { status: 500 });
  }
}
