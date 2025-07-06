import { NextRequest, NextResponse } from 'next/server';
import {JobmelaPrisma} from '@/lib/db';

interface RouteContext {
  params: Promise<{ registration_number: string }>;
}

// GET /api/jobmela/beneficiary/[registration_number]
export async function GET(req: NextRequest, context: RouteContext) {
  const params = await context.params;
  const { registration_number } = params;
  if (!registration_number) {
    return NextResponse.json({ error: 'Registration number is required' }, { status: 400 });
  }
  try {
    const beneficiary = await JobmelaPrisma.jobMelaBeneficiary.findUnique({
      where: { registration_number },
    });
    if (!beneficiary) {
      return NextResponse.json({ error: 'Beneficiary not found' }, { status: 404 });
    }
    return NextResponse.json(beneficiary);
  } catch (error) {
    console.error('Error fetching beneficiary details:', error);
    return NextResponse.json({ error: 'Failed to fetch beneficiary details', details: String(error) }, { status: 500 });
  }
}
