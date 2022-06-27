import React, { ReactNode } from 'react'

import { Placeholder } from '../Placeholder'

export interface CardProps {
  title?: string
  subtitle?: string
  avatarUrl?: string
  children?: ReactNode
}

export interface HeaderProps {
  title?: string
  subtitle?: string
  avatarUrl?: string
}

export const Card = ({ title, subtitle, children, avatarUrl }: CardProps) => {
  return (
    <div className="bg-white border rounded border-slate-200 overflow-hidden hover:shadow">
      {avatarUrl ? (
        <div className="h-16 p-5">
          <img
            className="flex justify-center items-center w-10 h-10 bg-slate-100 text-primary-800 text-xl rounded shadow"
            src={avatarUrl}
          />
        </div>
      ) : null}
      <Header title={title} subtitle={subtitle} avatarUrl={avatarUrl} />
      {children}
    </div>
  )
}

export const Header = ({ title, subtitle, avatarUrl }: HeaderProps) => {
  return (
    <header className="flex flex-col p-5 gap-y-0.5">
      <h3 className="text-primary-700 font-bold">{title || <Placeholder />}</h3>
      <p className="text-xs text-slate-400">{subtitle || <Placeholder />}</p>
    </header>
  )
}
