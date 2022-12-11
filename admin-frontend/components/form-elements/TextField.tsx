import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormContext, ValidationRule } from "react-hook-form";

type Props = {
  fieldName: string;
  fieldTitle?: string;
  helper?: JSX.Element;
  defaultValue?: string;
  validationOptions?: {
    maxLength?: number;
    minLength?: number;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
    setValueAs?: (value: any) => any;
  };
};

export const TextField = ({
  fieldTitle,
  fieldName,
  helper,
  defaultValue,
  validationOptions: {
    maxLength,
    minLength,
    required,
    pattern,
    setValueAs,
  } = {},
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isRequired={required} isInvalid={!!errors[fieldName]}>
      {fieldTitle && <FormLabel htmlFor={fieldName}>{fieldTitle}</FormLabel>}
      <Input
        id={fieldName}
        type="text"
        {...register(fieldName, {
          required: required ? "Kötelező kitölteni" : false,
          maxLength: maxLength
            ? {
                value: maxLength,
                message: `Túl hosszú, maximum karakterszám: ${maxLength}`,
              }
            : undefined,
          minLength: minLength
            ? {
                value: minLength,
                message: `Túl rövid, minimum karakterszám: ${minLength}`,
              }
            : undefined,
          pattern,
          setValueAs,
        })}
        defaultValue={defaultValue}
      />
      {errors?.[fieldName] ? (
        <FormErrorMessage>
          {errors[fieldName]?.message?.toString()}
        </FormErrorMessage>
      ) : (
        helper && <FormHelperText>{helper}</FormHelperText>
      )}
    </FormControl>
  );
};
