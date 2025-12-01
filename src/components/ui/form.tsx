import * as React from 'react'
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { Controller, useFormContext } from 'react-hook-form'

import { cn } from '@/lib/utils'

export type FormProps = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'form'>

export function Form({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>
}

export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, render }: ControllerProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={(fieldState) => render(fieldState)}
    />
  )
}

export const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-1', className)} {...props} />
))

FormItem.displayName = 'FormItem'

export const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn('block text-sm font-medium leading-none', className)}
    {...props}
  />
))

FormLabel.displayName = 'FormLabel'

export const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
))

FormControl.displayName = 'FormControl'

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))

FormDescription.displayName = 'FormDescription'

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formState } = useFormContext()
  const error = (props as any).name ? formState.errors[(props as any).name] : undefined

  if (!error) {
    return null
  }

  return (
    <p
      ref={ref}
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    />
  )
})

FormMessage.displayName = 'FormMessage'


