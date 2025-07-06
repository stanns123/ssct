export function getAccountSuspendedTemplate(userName: string, reason: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <img src="https://admin.aoac.in/api/upload/logo.png" alt="AOAC Logo" style="max-width: 150px; margin-bottom: 20px;">
      <h2>Your AOAC Backend Access Has Been Suspended</h2>
      <p>Dear ${userName},</p>
      <p>Your AOAC backend account has been temporarily suspended due to ${reason}. During this time, you will not be able to access the system.</p>
      <p>If you believe this is a mistake or need further assistance, please contact the system administrator.</p>
      <p>Best regards,</p>
      <p>AOAC Admin Team</p>
    </div>
  `;
}