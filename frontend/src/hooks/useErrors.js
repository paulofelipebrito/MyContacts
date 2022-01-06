import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExists = errors.find(
      (error) => error.field === field,
    );

    if (errorAlreadyExists) { return; }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeErrors(fieldName) {
    setErrors((prevState) => prevState.filter(
      (err) => err.field !== fieldName,
    ));
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    errors, setError, removeErrors, getErrorMessageByFieldName,
  };
}
