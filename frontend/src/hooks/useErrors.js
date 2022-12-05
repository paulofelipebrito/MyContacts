import { useCallback, useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(({ field, message }) => {
    const errorAlreadyExists = errors.find(
      (error) => error.field === field,
    );

    if (errorAlreadyExists) { return; }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }, [errors]);

  const removeErrors = useCallback((fieldName) => {
    setErrors((prevState) => prevState.filter(
      (err) => err.field !== fieldName,
    ));
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldName) => (
      errors.find((error) => error.field === fieldName)?.message),
    [errors],
  );

  return {
    errors, setError, removeErrors, getErrorMessageByFieldName,
  };
}
