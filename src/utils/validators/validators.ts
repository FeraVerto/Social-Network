export type FieldValidatorType = (value: string) => string | undefined;

const requiredField: FieldValidatorType = (value) => {
  if (value) return undefined;
  return 'Field is required';
};

const maxLengthCreator =
  (maxLength: number): FieldValidatorType =>
  (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
  };

const validators = {
  requiredField,
  maxLengthCreator,
};

export default validators;
