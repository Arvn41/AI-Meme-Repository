import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'ghost'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button className={`btn btn--${variant}`} type="button" {...rest}>
      {children}
    </button>
  )
}