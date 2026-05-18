import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const cn = (...args: Parameters<typeof clsx>) => twMerge(clsx(...args))

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth, className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center tracking-[0.2em] uppercase text-2xs font-medium transition-all duration-500 disabled:opacity-40 disabled:cursor-not-allowed',
          {
            // Variants
            'bg-obsidian-gold text-obsidian-black hover:bg-obsidian-gold-light':
              variant === 'primary',
            'bg-obsidian-cream text-obsidian-black hover:bg-white':
              variant === 'secondary',
            'border border-obsidian-gold text-obsidian-gold hover:bg-obsidian-gold hover:text-obsidian-black':
              variant === 'outline',
            'text-obsidian-cream/70 hover:text-obsidian-gold':
              variant === 'ghost',
            // Sizes
            'px-4 py-2.5 text-[10px]': size === 'sm',
            'px-7 py-4': size === 'md',
            'px-10 py-5 text-xs': size === 'lg',
            // Width
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
