import React from 'react'
import { ReactElement } from 'react'
import classNames from 'classnames'

import type { ButtonProps } from './types'

export const Button = ({
  text,
  size = 'md',
  type = 'secondary',
  icon = undefined,
}: ButtonProps): ReactElement => {
  const defaultClasses =
    'inline-flex items-center gap-x-1 leading-3 justify-center rounded transition shadow-md font-bold cursor-pointer hover:shadow'

  const themeClasses = {
    'text-white bg-primary-700 hover:bg-primary-800': type === 'primary',
    'text-white bg-rose-700 hover:bg-rose-800': type === 'danger',
    'text-neutral-600 bg-neutral-100 hover:text-neutral-800':
      type === 'secondary',
  }

  const sizeClasses = {
    'px-8 h-16 text-lg gap-x-2': size === 'lg',
    'px-6 h-12 text-md gap-x-2': size === 'md',
    'px-3 h-8 text-sm': size === 'sm',
    'px-2 h-6 text-xs': size === 'xs',
  }

  const className = classNames(defaultClasses, themeClasses, sizeClasses)
  return (
    <button className={className}>
      {icon || null}
      {text || null}
    </button>
  )
}
