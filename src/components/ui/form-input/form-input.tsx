import { Control, FieldPathByValue, FieldValues, PathValue, useController } from "@/components/ui/form";
import {Input, InputProps, InputVariants} from "@/components/ui/input/input";
import { ReactElement } from "react";
import {VariantProps} from "class-variance-authority";

export type FormInputProps<
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
> = Omit<InputProps, "defaultValue" | "onBlur" | "onChange" | "value"> & VariantProps<typeof InputVariants> & {
  control: Control<TFieldValues>;
  defaultValue?: PathValue<TFieldValues, TPath>;
  name: TPath;
};

const FormInput = <
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, boolean | number | string>,
>({
  control,
  defaultValue,
  name,
  align,
  ...props
}: FormInputProps<TFieldValues, TPath>): ReactElement | null => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <Input
      {...props}
      {...field}
      align={align}
      error={fieldState.isTouched && (fieldState.error?.message ?? fieldState.error?.type)}
    />
  );
};

export default FormInput;
