import { NextResponse } from 'next/server';
import { JobmelaPrisma } from '@/lib/db';

interface RouteContext {
  params: Promise<{ registrationNumber: string }>;
}

export async function PUT(req: Request, context: RouteContext) {
  try {
    const params = await context.params;
    const registration_number = params.registrationNumber;
    const data = await req.json();
    // Only allow updating fields that exist in the model
    const updateData: {
      prior_experience?: string | null;
      has_experience?: boolean | null;
      currently_working?: boolean | null;
      experience_company_name?: string | null;
      experience_years?: string | null;
      current_company_name?: string | null;
      current_year_of_joining?: string | null;
      has_appointment_letter?: boolean | null;
      has_salary_slip?: boolean | null;
      has_relieving_letter?: boolean | null;
      all_data_verified?: boolean | null;
    } = {};

    if ('prior_experience' in data) updateData.prior_experience = data.prior_experience ?? null;
    if ('has_experience' in data) updateData.has_experience = data.has_experience ?? null;
    if ('currently_working' in data) updateData.currently_working = data.currently_working ?? null;
    if ('experience_company_name' in data) updateData.experience_company_name = data.experience_company_name ?? null;
    if ('experience_years' in data) updateData.experience_years = data.experience_years ?? null;
    if ('current_company_name' in data) updateData.current_company_name = data.current_company_name ?? null;
    if ('current_year_of_joining' in data) updateData.current_year_of_joining = data.current_year_of_joining ?? null;
    if ('has_appointment_letter' in data) updateData.has_appointment_letter = data.has_appointment_letter ?? null;
    if ('has_salary_slip' in data) updateData.has_salary_slip = data.has_salary_slip ?? null;
    if ('has_relieving_letter' in data) updateData.has_relieving_letter = data.has_relieving_letter ?? null;
    if ('all_data_verified' in data) updateData.all_data_verified = data.all_data_verified ?? null;

    const beneficiary = await JobmelaPrisma.jobMelaBeneficiary.update({
      where: { registration_number },
      data: updateData,
    });
    return NextResponse.json(beneficiary);
  } catch (error) {
    const err = error as Error;
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
