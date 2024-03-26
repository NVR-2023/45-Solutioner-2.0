import { useEffect } from "react";

type UseSubmitFormProps = {
  formData: any;
  isFormValid: React.MutableRefObject<boolean>;
  formAction: any;
};

const useSubmitForm = ({
  formData,
  isFormValid,
  formAction,
}: UseSubmitFormProps) => {
    
  useEffect(() => {

    const performFormAction = async () => {
      try {
        const response = await formAction(formData);
        console.log(response.data);
      } catch (error) {
        console.error("Error performing form action:", error);
      }
    };

    if (isFormValid.current) {
      performFormAction();
    }
  }, [formData, isFormValid, formAction]);
};

export default useSubmitForm;
