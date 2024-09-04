import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [didEdit, setDidEdit] = useState(false);
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const valueIsValid = validationFn(enteredValue);

  function handleValuesChange(event) {
    setEnteredValue(event.target.value);
    // Add validation logic here (e.g., using a custom validation function)
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleValuesChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
