export function getProfileUpdatedTemplate(userName: string, updatedFields: { name?: string; email?: string; phone?: string }): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <img src="https://admin.aoac.in/api/upload/logo.png" alt="AOAC Logo" style="max-width: 150px; margin-bottom: 20px;">
      <h2>Profile Information Updated</h2>
      <p>Dear ${userName},</p>
      <p>Your profile details have been updated as follows:</p>
      <ul>
        ${updatedFields.name ? `<li>Name: ${updatedFields.name}</li>` : ''}
        ${updatedFields.email ? `<li>Email: ${updatedFields.email}</li>` : ''}
        ${updatedFields.phone ? `<li>Phone Number: ${updatedFields.phone}</li>` : ''}
      </ul>
      <p>If you did not request this change, please contact the administrator immediately.</p>
      <p>Best regards,</p>
      <p>AOAC Team</p>
    </div>
  `;
}