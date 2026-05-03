import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()                        
    .min(2, "Name too short")
    .max(50, "Name too long"),

  email: z
    .string()
    .trim()                        
    .email("Invalid email"),

  message: z
    .string()
    .trim()                        
    .min(10, "Message too short")
    .max(1000, "Message too long"),

  company: z.string().optional(),
});