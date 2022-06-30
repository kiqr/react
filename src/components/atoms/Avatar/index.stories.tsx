import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from '.'
import type { AvatarProps } from './types'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = ({ src }: AvatarProps) => {
  return <Avatar src={src} />
}

export const avatar = Template.bind({})
avatar.args = {
  src: 'https://avatars.dicebear.com/api/adventurer-neutral/llool.svg',
}
