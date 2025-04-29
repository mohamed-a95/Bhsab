import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { contactSchema } from "@shared/schema";
import { storage } from "./storage";
import { sendContactEmail } from "./mailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission API
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      await sendContactEmail(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Förfrågan mottagen", 
        contactId: contact.id 
      });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: error.message || "Det gick inte att skicka formuläret"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
