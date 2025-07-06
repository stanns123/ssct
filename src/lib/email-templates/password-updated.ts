export function getPasswordUpdatedTemplate(userName: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <img src="https://admin.aoac.in/api/upload/logo.png" alt="AOAC Logo" style="max-width: 150px; margin-bottom: 20px;">
      <h2>Your Password Has Been Updated</h2>
      <p>Dear ${userName},</p>
      <p>Your password has been successfully updated. If you did not make this change, please reset your password immediately or contact the system administrator.</p>
      <p>Stay secure,</p>
      <p>AOAC Security Team</p>
    </div>
  `;
}