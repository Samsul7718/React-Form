import { Form } from "lucide-react"
import { CardTitle } from "./ui/card"
import FormField from "./form-field"
import type { useForm } from "react-hook-form";
import type { StepFormData } from "@/types";
import { Label } from "./ui/label";


interface StepProps {
  register: ReturnType<typeof useForm<StepFormData>>["register"];
  errors: Record<string, { message?: string }>;
  setValue: ReturnType<typeof useForm<StepFormData>>["setValue"];
}


const PersonalInfo = ({register, errors}) => {
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

      </div>
    
    
    </div>
  )
}
const BillingInfo = ({register, errors}:StepProps) => {
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl font-bold">Billing Information</CardTitle>
    </div>
  )
}


export { PersonalInfo, ProfessionalInfo, BillingInfo };