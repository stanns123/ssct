export function getOrderConfirmationTemplate({
  customerName,
  orderId,
  invoiceNumber,
  orderItems,
  totalAmount,
  discountAmount,
  shippingCharge,
  shippingOption,
  paymentLinkUrl,
}: {
  customerName: string;
  orderId: string;
  invoiceNumber: string;
  orderItems: Array<{
    productName: string;
    quantity: number;
    price: number;
    discount: number;
  }>;
  totalAmount: number;
  discountAmount: number;
  shippingCharge: number;
  shippingOption: string;
  paymentLinkUrl: string;
}) {
  // Calculate subtotal excluding shipping
  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Format price as INR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(price);
  };

  // Generate the items HTML
  const itemsHtml = orderItems
    .map(
      (item) => `
        <tr>
          <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb;">
            ${item.productName}
          </td>
          <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; text-align: center;">
            ${item.quantity}
          </td>
          <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; text-align: right;">
            ${formatPrice(item.price)}
          </td>
          <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; text-align: right;">
            ${formatPrice(item.discount)}
          </td>
          <td style="padding: 12px 10px; border-bottom: 1px solid #e5e7eb; text-align: right;">
            ${formatPrice((item.price - item.discount) * item.quantity)}
          </td>
        </tr>
      `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
          color: #1f2937;
          line-height: 1.5;
          background-color: #f9fafb;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .logo {
          text-align: center;
          margin-bottom: 24px;
        }
        .header {
          background-color: #ecfdf5;
          padding: 24px;
          border-radius: 12px 12px 0 0;
          border-bottom: 3px solid #10b981;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .content {
          padding: 24px;
          background: white;
          border: 1px solid #e5e7eb;
          border-top: none;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .thank-you {
          font-size: 22px;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 16px;
          color: #047857;
        }
        .order-number {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e5e7eb;
          background-color: #f8fafc;
          padding: 16px;
          border-radius: 8px;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          margin-top: 24px;
          margin-bottom: 12px;
          color: #047857;
        }
        .order-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin-bottom: 24px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .order-table th {
          background-color: #d1fae5;
          text-align: left;
          padding: 12px;
          font-weight: 500;
          color: #065f46;
        }
        .summary-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 16px;
          background-color: #f8fafc;
          border-radius: 8px;
          padding: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
        }
        .summary-table td {
          padding: 8px 12px;
        }
        .summary-total {
          font-weight: 600;
          font-size: 16px;
          border-top: 2px solid #10b981;
          padding-top: 8px !important;
          margin-top: 8px;
          color: #047857;
        }
        .pay-button {
          display: block;
          background-color: #10b981;
          color: white;
          text-align: center;
          padding: 14px 24px;
          text-decoration: none;
          font-weight: 600;
          border-radius: 50px;
          margin: 32px auto 24px;
          width: 80%;
          max-width: 300px;
          box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.4), 0 2px 4px -1px rgba(16, 185, 129, 0.2);
          transition: all 0.3s ease;
        }
        .pay-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.4), 0 4px 6px -2px rgba(16, 185, 129, 0.2);
        }
        .footer {
          text-align: center;
          margin-top: 32px;
          padding: 16px;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
          font-size: 14px;
          background-color: #f8fafc;
          border-radius: 8px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }
        tr:nth-child(even) {
          background-color: #f8fafc;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <img src="https://bulk.aoac.in/img/logo.png" alt="AOAC Logo" width="120" style="max-width: 100%;">
        </div>
        
        <div class="header">
          <h1 class="thank-you">Thank You for Your Order!</h1>
          <p>Hello ${customerName},</p>
          <p>Your order has been received and is now being processed. Please complete your payment to confirm your order.</p>
        </div>
        
        <div class="content">
          <div class="order-number">
            <strong>Order ID:</strong> ${orderId}<br>
            <strong>Invoice Number:</strong> ${invoiceNumber}<br>
            <strong>Date:</strong> ${new Date().toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </div>
          
          <h2 class="section-title">Order Summary</h2>
          <table class="order-table">
            <thead>
              <tr>
                <th style="border-radius: 8px 0 0 0;">Product</th>
                <th style="text-align: center;">Qty</th>
                <th style="text-align: right;">Price</th>
                <th style="text-align: right;">Discount</th>
                <th style="text-align: right; border-radius: 0 8px 0 0;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
          
          <table class="summary-table">
            <tr>
              <td>Subtotal:</td>
              <td style="text-align: right;">${formatPrice(subtotal)}</td>
            </tr>
            <tr>
              <td>Discount:</td>
              <td style="text-align: right;">-${formatPrice(discountAmount)}</td>
            </tr>
            <tr>
              <td>Shipping (${shippingOption}):</td>
              <td style="text-align: right;">${formatPrice(shippingCharge)}</td>
            </tr>
            <tr class="summary-total">
              <td>Total:</td>
              <td style="text-align: right;">${formatPrice(totalAmount)}</td>
            </tr>
          </table>
          
          <a href="${paymentLinkUrl}" class="pay-button">Pay Now</a>
          
          <p style="margin-top: 20px; font-size: 14px; color: #6b7280; background-color: #f8fafc; padding: 12px; border-radius: 8px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);">
            If you have any questions about your order, please contact our customer service at 
            <a href="mailto:support@aoac.in" style="color: #10b981; text-decoration: none; font-weight: 500;">support@aoac.in</a>
          </p>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} AOAC. All rights reserved.</p>
          <p>
            <a href="https://aoac.in/docs/policies/privacy-policy" style="color: #10b981; text-decoration: none;">Privacy Policy</a> | 
            <a href="https://aoac.in/docs/policies/terms-conditions" style="color: #10b981; text-decoration: none;">Terms of Service</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}