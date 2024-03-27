import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const buttonVariants = cva("min-h-8 w-full rounded-[4px] bg-[#428bca] border border-[#357ebd] text-sm font-light text-white");
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <div className={'flex'}>
        <Component className={buttonVariants({ className })} ref={ref} {...props} />
      </div>
    );
  },
);
Button.displayName = "Button";
