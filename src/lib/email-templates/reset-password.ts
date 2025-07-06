export function getResetPasswordTemplate(userName: string, resetUrl: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <img src="https://admin.aoac.in/api/upload/logo.png" alt="AOAC Logo" style="max-width: 150px; margin-bottom: 20px;">
      <h2>Reset Your AOAC Backend Password</h2>
      <p>Dear ${userName},</p>
      <p>We received a request to reset your backend account password. Click the link below to reset it:</p>
      <a href="${resetUrl}" style="display: inline-block; background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 16px 0;">
        Reset Password
      </a>
      <p>If you did not request this, please contact the system administrator immediately.</p>
      <p>Best regards,</p>
      <p>AOAC Security Team</p>
    </div>
  `;
}