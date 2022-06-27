import React from 'react'
import { ReactElement } from 'react'
import classNames from 'classnames'

import type { ButtonProps } from './types'

export const Button = ({
  text,
  size = 'md',
  type = 'secondary',
}: ButtonProps): ReactElement => {
  const defaultClasses =
    'inline-flex items-center justify-center rounded transition shadow font-bold cursor-pointer'

  const themeClasses = {
    'text-white bg-primary-700 hover:bg-primary-800': type === 'primary',
    'text-white bg-rose-700 hover:bg-rose-800': type === 'danger',
    'text-neutral-600 hover:text-neutral-800 bg-neutral-100':
      type === 'secondary',
  }

  const sizeClasses = {
    'px-7 py-4 text-lg': size === 'lg',
    'px-5 py-2 text-md': size === 'md',
    'px-4 py-2 text-sm': size === 'sm',
    'px-2 py-1 text-xs': size === 'xs',
  }

  const className = classNames(defaultClasses, themeClasses, sizeClasses)
  return <button className={className}>{text}</button>
}
