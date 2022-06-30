import React from 'react'

import type { AvatarProps } from './types'

export const Avatar = ({ src }: AvatarProps) => {
  return (
    <img
      className="bg-neutral-200 border-white border-2 shadow rounded-full w-9 h-9 hover:z-50"
      src={src}
      alt="Avatar"
    />
  )
}
