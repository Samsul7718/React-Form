import { z } from "zod"

export const personalInfoSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),  
    phoneNumber: z.string().regex(/^\d{10}$/, { message: "Invalid phone number" }),
})

export const professionalInfoSchema = z.object({
    company: z.string().min(1, { message: "Company name is required" }),
    position: z.string().min(1, { message: "Position is required" }),
    experience:z.enum(["0-1 years", "1-3 years", "3-5 years", "5+ years"]), 
    industry: z.string().min(1, { message: "Industry is required" }),

})

export const billingInfoSchema = z.object({
    cardNumber: z.string()
    .min(16, { message: "Card number must be 16 digits" })
    .max(16, { message: "Card number must be 16 digits" }),
    cardHolderName: z.string().min(1, { message: "Card holder name is required" }),
    expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Invalid expiry date" }),
    cvv: z.string().regex(/^\d{3}$/, { message: "Invalid CVV" }),
   
})

export type PersonalInfo = z.infer<typeof personalInfoSchema>
export type ProfessionalInfo = z.infer<typeof professionalInfoSchema>
export type BillingInfo = z.infer<typeof billingInfoSchema>

export type StepFormData = PersonalInfo | ProfessionalInfo | BillingInfo