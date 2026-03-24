import React from 'react'
import type { ButtonProps } from '@/types'

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-semibold',
  secondary: 'bg-brand-dark text-white hover:bg-gray-700 font-semibold border border-gray-600',
  ghost: 'bg-transparent text-brand-dark hover:bg-gray-100 font-medium',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-6 py-2 text-base rounded-lg',
  lg: 'px-8 py-3 text-lg rounded-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
