"use client";

import { Root } from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const labelVariants = cva(
  "font-[700] text-[14px] ", {
      defaultVariants: {
          align: "row",
      },
      variants: {
          align: {
              column: 'w-[20%] items-center text-end ',
              row: 'w-full ',
          },
      }
    }
);

export const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof labelVariants>
>(({ className, align,...props }, ref) => <Root className={labelVariants({align}) + className} ref={ref} {...props} />);

Label.displayName = Root.displayName;
