import { ComponentMeta } from '@storybook/react'

import { Card } from '../'
import { CardHeader } from '.'

export default {
  title: 'Atoms/Card/Components/CardHeader',
  component: CardHeader,
} as ComponentMeta<typeof CardHeader>

export const cardHeader = () => <div className="w-72"><Card><CardHeader title="This is a header" subtitle="for use in cards"/></Card></div>
