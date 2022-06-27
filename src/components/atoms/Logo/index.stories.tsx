import { ComponentMeta } from '@storybook/react'

import { Logo as LogoComponent } from '.'

export default {
  title: 'Components/Logo',
  component: LogoComponent,
} as ComponentMeta<typeof LogoComponent>

export const Logo = () => <LogoComponent />
