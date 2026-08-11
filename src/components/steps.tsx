import { Form } from "lucide-react"
import { CardTitle } from "./ui/card"
import FormField from "./form-field"
import type { useForm } from "react-hook-form";
import type { StepFormData } from "@/types";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";



interface StepProps {
  register: ReturnType<typeof useForm<StepFormData>>["register"];
  errors: Record<string, { message?: string }>;
  setValue: ReturnType<typeof useForm<StepFormData>>["setValue"];
}


const PersonalInfo = ({register, errors}:StepProps) => {
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl font-bold">Personal Information</CardTitle>

      <div className="grid grid-cols-2 gap-4 ">
    <FormField
    id="firstName"
    label="First Name"
    register={register}
    errors={errors}
    />
    <FormField
    id="lastName"
    label="Last Name"
    register={register}
    errors={errors}
    />
      </div>
    <FormField
    id="email"
    label="Email"
    register={register}
    errors={errors}
    type="email"
    />
      <FormField
    id="phoneNumber"
    label="Phone Number"
    register={register}
    errors={errors}
    type="tel"
    />
    </div>
  )
}
const ProfessionalInfo = ({register, errors,setValue}:StepProps) => {

  const [experience, setExperience] = useState("");

  const items = [
  { label: "0-1 years", value: "0-1 years" },
  { label: "1-3 years", value: "1-3 years" },
  { label: "3-5 years", value: "3-5 years" },
  { label: "5+ years", value: "5+ years" }    
]
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl font-bold">Professional Information</CardTitle>
       <div className="grid grid-cols-2 gap-4 ">
    <FormField
    id="company"
    label="Company"
    register={register}
    errors={errors}
    />
    <FormField
    id="position"
    label="Position"
    register={register}
    errors={errors}
    />
      </div>
      <div className="space-y-2">
        <Label htmlFor="experience">Years of Experience</Label>
  
       <Select 
         onValueChange={(value) => 
          {setValue?.("experience", value as 
           Extract<StepFormData, {experience: string}
        >["experience"],
        {shouldValidate:true}
      )
        setExperience(value ?? "");
        }}
        value={experience}
        >
     <SelectTrigger>
    <SelectValue placeholder="Select Experience" />
     </SelectTrigger>
     <SelectContent>
      {items.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
     </SelectContent>
     </Select>
           {errors.experience && (
             <p className="text-sm text-red-500">{errors.experience?.message}</p>
          )}

      </div>
       <FormField
    id="industry"
    label="Industry"
    register={register}
    errors={errors}
    />
    
    
    </div>
  )
}
const BillingInfo = ({register, errors}:StepProps) => {
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl font-bold">Billing Information</CardTitle>

    <FormField
    id="cardNumber"
    label="Card Number"
    register={register}
    errors={errors}
    maxLength={16}
    />
     <FormField
    id="cardHolderName"
    label="Card Holder Name"
    register={register}
    errors={errors}
    />

    <div className="grid grid-cols-2 gap-4 ">
       <FormField
    id="expiryDate"
    label="Expiry Date"
    register={register}
    errors={errors}
    maxLength={5}
    />
     <FormField
    id="cvv"
    label="CVV"
    register={register}
    errors={errors}
    maxLength={3}
    />
    </div>
       </div>
  )
}


export { PersonalInfo, ProfessionalInfo, BillingInfo };