import { users, type User, type InsertUser, type Contact, contactSubmissions } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contactData: Contact): Promise<{ id: number }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, Contact & { id: number, createdAt: string, responded: boolean }>;
  currentId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.currentId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(contactData: Contact): Promise<{ id: number }> {
    const id = this.currentContactId++;
    const submission = {
      ...contactData,
      id,
      createdAt: new Date().toISOString(),
      responded: false
    };
    this.contactSubmissions.set(id, submission);
    return { id };
  }
}

export const storage = new MemStorage();
