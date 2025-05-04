import { Contact } from "@shared/schema";
import * as nodemailer from 'nodemailer';

// Get email configuration from environment variables
const contactEmail = process.env.CONTACT_EMAIL || 'info@bhs.se';
const senderEmail = process.env.SENDER_EMAIL || 'noreply@bhs.se';

// Create a test SMTP service account for development
// In a production environment, you would use actual SMTP credentials
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASSWORD || '',
  },
});

// Check if we have SMTP credentials
const smtpConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASSWORD);

// If no SMTP is configured, create a preview URL for testing
let etherealUrl: string | null = null;

// Generate an Ethereal account for testing when no SMTP configured
async function setupEtherealAccount() {
  if (!smtpConfigured) {
    try {
      // Create ethereal test account
      const testAccount = await nodemailer.createTestAccount();
      
      // Set the transporter to use ethereal test account
      transporter.options.auth = {
        user: testAccount.user,
        pass: testAccount.pass,
      };
      
      console.log('Created Ethereal test account for email previews');
    } catch (error) {
      console.error('Failed to create test account', error);
    }
  }
}

// Initialize email service on startup
setupEtherealAccount().catch(console.error);

export async function sendContactEmail(contactData: Contact): Promise<void> {
  // Log submission for debugging
  console.log("====== CONTACT FORM SUBMISSION RECEIVED ======");
  console.log(`From: ${contactData.name} (${contactData.email})`);
  console.log(`Phone: ${contactData.phone}`);
  console.log(`Service: ${contactData.service}`);
  console.log(`Message: ${contactData.message}`);
  console.log("==============================================");
  
  // Prepare email content
  const mailOptions = {
    from: `"BHS Webbplats" <${senderEmail}>`,
    to: contactEmail,
    subject: `Ny kontaktförfrågan från ${contactData.name}`,
    text: `
      Ny kontaktförfrågan från webbplatsen:
      
      Namn: ${contactData.name}
      E-post: ${contactData.email}
      Telefon: ${contactData.phone}
      Tjänst: ${contactData.service}
      
      Meddelande:
      ${contactData.message}
    `,
    html: `
      <h2>Ny kontaktförfrågan från webbplatsen</h2>
      <p><strong>Namn:</strong> ${contactData.name}</p>
      <p><strong>E-post:</strong> ${contactData.email}</p>
      <p><strong>Telefon:</strong> ${contactData.phone}</p>
      <p><strong>Tjänst:</strong> ${contactData.service}</p>
      <p><strong>Meddelande:</strong></p>
      <p>${contactData.message}</p>
    `,
  };
  
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    
    console.log(`Message sent: ${info.messageId}`);
    
    // If using Ethereal, show a preview URL
    if (!smtpConfigured && info.messageId) {
      console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
      etherealUrl = nodemailer.getTestMessageUrl(info) || null;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Fallback to console if email sending fails
    console.log(`Email could not be sent. Would be delivered to: ${contactEmail}`);
  }
}
