import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'
import type { ButtonProps } from './types'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({
  text,
  type,
  size,
}: ButtonProps) => {
  return <Button text={text} type={type} size={size} />
}

export const button = Template.bind({})
button.args = {
  text: 'This is the default button',
  type: 'secondary',
  size: 'md',
}

export const primary = Template.bind({})
primary.args = {
  text: 'Save changes',
  type: 'primary',
  size: 'md',
}

export const danger = Template.bind({})
danger.args = {
  text: 'Delete this resource',
  type: 'danger',
  size: 'md',
}

export const large = Template.bind({})
large.args = {
  text: 'This is a large button',
  type: 'secondary',
  size: 'lg',
}

export const small = Template.bind({})
small.args = {
  text: 'This is a small button',
  type: 'secondary',
  size: 'sm',
}

export const tiny = Template.bind({})
tiny.args = {
  text: 'This is a tiny button',
  type: 'secondary',
  size: 'xs',
}
