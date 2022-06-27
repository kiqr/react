import React, { ReactNode } from 'react'
import { Placeholder } from '../../Placeholder'

interface HeaderProps {
  title?: string
  subtitle?: string
}

export const CardHeader = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="flex flex-col p-5 gap-y-0.5">
      <h3 className="text-primary-700 font-bold">{title || <Placeholder />}</h3>
      <p className="text-xs text-slate-400">{subtitle || <Placeholder />}</p>
    </header>
  )
}
