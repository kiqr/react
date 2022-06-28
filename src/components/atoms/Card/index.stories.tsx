import { ComponentMeta } from '@storybook/react'

import { Card } from '.'

export default {
  title: 'Atoms/Card',
  component: Card,
} as ComponentMeta<typeof Card>

export const card = () => <div className="w-72"><Card>Hello World!</Card></div>
