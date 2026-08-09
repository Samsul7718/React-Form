import { billingInfoSchema, personalInfoSchema, professionalInfoSchema, type Step, type StepFormData } from "@/types";
import {Briefcase, CreditCard, User} from "lucide-react"
import { useState } from "react";

const stepSchemas = [
    personalInfoSchema,
    professionalInfoSchema,
    billingInfoSchema,
];

export const steps:Step[]=[
    {id: "personal", name: "Personal Info", icon:User},
    {id: "professional", name: "Professional Info", icon:Briefcase},
    {id: "billing", name: "Billing Info", icon:CreditCard}
]

export function useMultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Partial<StepFormData>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isFirstStep =currentStep === 0;
    const isLastStep = currentStep === steps.length - 1;


    /** Return the schema current step's schema */

    const getCurrentStepSchema = () => stepSchemas[currentStep];

    /** Go to next step */
    const goToNextStep = () => {
        if (!isLastStep) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };
    
    /** Go to previous step */  
    const goToPreviousStep = () => {        
        if (!isFirstStep) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };

    /**  Merge and update form data  */
    const updateFormData = (newData: Partial<StepFormData>) => {
        setFormData((prev) => ({
            ...prev,
            ...newData,
        }));
    };

    /**  Handle final submission   */
    const handleFinalSubmit = (data: StepFormData) => {
        setIsSubmitted(true);
        console.log("✅ Final Form Data:", data);
    };

    /** Reset the form */
    const resetForm = () => {
        setCurrentStep(0);
        setFormData({});
        setIsSubmitted(false);
    };

    return {
        currentStep,
        formData,
        isSubmitted,
        isFirstStep,
        isLastStep,
        steps,
        getCurrentStepSchema,
        goToNextStep,
        goToPreviousStep,
        updateFormData,
        handleFinalSubmit,
        resetForm
    };
}