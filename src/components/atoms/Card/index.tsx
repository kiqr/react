import React, { ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
}

export const Card = ({children}: CardProps) => {
  return (
    <div className="bg-white border rounded border-slate-200 overflow-hidden hover:shadow">{children}</div>
  )
}
