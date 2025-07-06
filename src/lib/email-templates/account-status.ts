export function getAccountStatusTemplate(userName: string, action: string, reason: string): string {
  const subject = action === 'suspend' ? 'Important: Your AOAC Account Has Been Suspended' : 'Important: Your AOAC Account Has Been Terminated';
  const message = action === 'suspend' 
    ? `Your account has been temporarily suspended due to ${reason}. If you believe this is a mistake or wish to reactivate your account, please contact us at [support email/phone].`
    : `Your account has been permanently terminated. If you believe this is a mistake or need further assistance, please contact us at [support email/phone].`;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <img src="https://admin.aoac.in/api/upload/logo.png" alt="AOAC Logo" style="max-width: 150px; margin-bottom: 20px;">
      <h2>${subject}</h2>
      <p>Dear ${userName},</p>
      <p>${message}</p>
      <p>Best regards,</p>
      <p>AOAC Team</p>
    </div>
  `;
}