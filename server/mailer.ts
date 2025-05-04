import { Contact } from "@shared/schema";
import { MailService } from '@sendgrid/mail';

// Initialize SendGrid if API key is available
let mailService: MailService | null = null;
if (process.env.SENDGRID_API_KEY) {
  mailService = new MailService();
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function sendContactEmail(contactData: Contact): Promise<void> {
  // Log submission for debugging
  console.log("====== CONTACT FORM SUBMISSION RECEIVED ======");
  console.log(`From: ${contactData.name} (${contactData.email})`);
  console.log(`Phone: ${contactData.phone}`);
  console.log(`Service: ${contactData.service}`);
  console.log(`Message: ${contactData.message}`);
  console.log("==============================================");
  
  // Set the recipient email
  const toEmail = "info@bhs.se";
  
  // If SendGrid is configured, use it to send a real email
  if (mailService) {
    try {
      await mailService.send({
        to: toEmail,
        from: 'noreply@bhs.se', // Verified sender in SendGrid
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
      });
      console.log(`Email sent to ${toEmail} successfully`);
    } catch (error) {
      console.error('Error sending email via SendGrid:', error);
      console.log('Continuing with mock email implementation...');
    }
  } else {
    // Simulating async operation to send email if no SendGrid is available
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Email would be sent to ${toEmail} (mock implementation)`);
        resolve(true);
      }, 500);
    });
  }
}
