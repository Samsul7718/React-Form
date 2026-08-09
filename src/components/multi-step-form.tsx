
import { useMultiStepForm } from "@/hooks/use-multi-step-form"
import type { StepFormData } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader } from "./ui/card"
import ProgressSteps from "./progress-steps"
import { BillingInfo, PersonalInfo, ProfessionalInfo } from "./steps"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const MultiStepForm = () => {
// Custom hook
const {
  currentStep,
  formData,
  isFirstStep,
  isLastStep,
  steps,
  goToNextStep,
  goToPreviousStep,
  getCurrentStepSchema,
  updateFormData,
  handleFinalSubmit,
  resetForm
} 
= useMultiStepForm();

const {register, handleSubmit, 
  formState: { errors },
  trigger,
  setValue,
  reset,
} = useForm<StepFormData>({
    resolver:zodResolver(getCurrentStepSchema()),
    mode: "onChange",
    defaultValues: formData,
});

useEffect(()=>{
reset(formData)
},[currentStep, formData, reset])

const onNext=async (data: StepFormData) => {
  // manual validation check
  // Merge current data with all previous data


}
  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <Card className="w-full max-w-2xl">
  <CardHeader>
     <ProgressSteps currentStep={currentStep} steps={steps}/>
  </CardHeader>
  <CardContent className="space-y-6">
    {currentStep ===0 && (<PersonalInfo register={register} errors={errors}/>)}
    {currentStep ===1 && (
      <ProfessionalInfo 
      register={register} 
      errors={errors} 
      setValue={setValue}/>)}
    {currentStep ===2 && (
      <BillingInfo 
      register={register} 
      errors={errors} 
      setValue={setValue}
      />)}


    <div className="flex justify-between mt-4">
      <Button type="button" variant="outline" onClick={goToPreviousStep} disabled={isFirstStep}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        Previous
      </Button>

      <Button type="button" onClick={handleSubmit(onNext)}>
        {isLastStep ? "Submit" : "Next"}
        {!isLastStep && <ChevronRight className="ml-2 h-4 w-4" />}
        </Button>
    </div>
  </CardContent>
  
</Card>
    </div>
  );
}

export default MultiStepForm;