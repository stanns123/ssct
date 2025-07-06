import { format } from 'date-fns';

interface LoginAlertTemplateProps {
  userName: string;
  deviceType: string;
  location: string;
  ipAddress: string;
  loginTime: Date;
  logoUrl: string;
}

export function getLoginAlertTemplate({
  userName,
  deviceType,
  location,
  ipAddress,
  loginTime,
  logoUrl,
}: LoginAlertTemplateProps): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Security Alert: New Login Detected</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 0;">
            <table role="presentation" style="width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; margin-top: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header with Logo -->
              <tr>
                <td style="padding: 20px; text-align: center; background-color: #f8f9fa;">
                  <img src="${logoUrl}" alt="AOAC Logo" style="max-height: 60px;">
                </td>
              </tr>
              
              <!-- Main Content -->
              <tr>
                <td style="padding: 30px;">
                  <h1 style="color: #dc3545; margin: 0 0 20px; font-size: 24px;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px;"></i>Security Alert
                  </h1>
                  
                  <p style="color: #333; font-size: 16px; line-height: 1.5; margin-bottom: 25px;">
                    Dear ${userName},
                  </p>
                  
                  <p style="color: #333; font-size: 16px; line-height: 1.5; margin-bottom: 25px;">
                    We detected a new login to your AOAC backend account. Here are the details:
                  </p>
                  
                  <table style="width: 100%; background: #f8f9fa; border-radius: 8px; margin-bottom: 25px;">
                    <tr>
                      <td style="padding: 15px;">
                        <p style="margin: 10px 0;">
                          <i class="fas fa-laptop" style="width: 20px; color: #0d6efd;"></i>
                          <strong>Device:</strong> ${deviceType}
                        </p>
                        <p style="margin: 10px 0;">
                          <i class="fas fa-map-marker-alt" style="width: 20px; color: #0d6efd;"></i>
                          <strong>Location:</strong> ${location}
                        </p>
                        <p style="margin: 10px 0;">
                          <i class="fas fa-network-wired" style="width: 20px; color: #0d6efd;"></i>
                          <strong>IP Address:</strong> ${ipAddress}
                        </p>
                        <p style="margin: 10px 0;">
                          <i class="fas fa-clock" style="width: 20px; color: #0d6efd;"></i>
                          <strong>Time:</strong> ${format(loginTime, 'PPpp')}
                        </p>
                      </td>
                    </tr>
                  </table>
                  
                  <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin-bottom: 25px;">
                    <p style="margin: 0; color: #333;">
                      <i class="fas fa-exclamation-triangle" style="color: #ffc107; margin-right: 10px;"></i>
                      If this wasn't you, please reset your password immediately or contact the system administrator.
                    </p>
                  </div>
                  
                  <p style="color: #333; font-size: 16px; line-height: 1.5;">
                    Best regards,<br>
                    AOAC Security Team
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 20px; text-align: center; background-color: #f8f9fa; border-top: 1px solid #dee2e6;">
                  <p style="margin: 0; color: #6c757d; font-size: 14px;">
                    This is an automated message. Please do not reply to this email.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}