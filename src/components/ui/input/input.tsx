import { FormError } from "@/components/ui/form-error/form-error";
import { Label } from "@/components/ui/label/label";
import Image from "next/image";
import React, { InputHTMLAttributes, forwardRef, useState } from "react";
import {cva, VariantProps} from "class-variance-authority";
export const InputVariants = cva(' ', {
    defaultVariants: {
        align: 'row'
    },
    variants: {
        align: {
            column: 'w-[80%] ',
            row: 'w-full ',
        }
    }
});

export type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof InputVariants>& {
  error?: false | string;
  label?: string;
  description?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, defaultValue = "", description,align,error, label, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean | undefined>(type === "password" ? true : undefined);
      return (
          <>
              <div className={`w-full ${align === 'column' ? 'flex items-center gap-8' : ''}`}>
                  {!!label && <Label align={align} className={`${!!error ? 'text-red-600' : ''}`}>{label}</Label>}
                  <div className={InputVariants({align}) + "relative mt-1"}>
                      <input
                          className={`w-full h-8 p-2 pr-8 placeholder:text-[14px] shadow-inner border placeholder:text-gray focus:outline-none rounded-[4px] ${type === 'checkbox' ? 'w-4 h-4' : ''} ${!!error ? "border-red-400" : "border-[#cccccc]"}`}
                          ref={ref}
                          type={showPassword !== undefined ? (!showPassword ? "text" : "password") : type}
                          {...props}
                      />
                      {showPassword !== undefined ? (
                          showPassword ? (
                              <Image
                                  alt={""}
                                  className={"absolute right-2.5 top-1/2 -translate-y-1/2"}
                                  height={20}
                                  onClick={() => setShowPassword(!showPassword)}
                                  src={"/images/eye-close-icon.png"}
                                  width={20}
                              />
                          ) : (
                              <Image
                                  alt={""}
                                  className={"absolute right-3.5 top-1/2 -translate-y-1/2"}
                                  height={20}
                                  onClick={() => setShowPassword(!showPassword)}
                                  src={"/images/eye-open-icon.svg"}
                                  width={20}
                              />
                          )
                      ) : null}
                      {!!description && <span className={`ml-1 ${typeof error === 'string' ? "text-red-600" : ""}`}>{description}</span>}
                  </div>
              </div>
              {!!error && <FormError errorText={error} size={"sm"}/>}
          </>
      );
  },
);
Input.displayName = "Input";
