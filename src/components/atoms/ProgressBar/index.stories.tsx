import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ProgressBar as ProgressBarComponent } from '.'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBarComponent,
  argTypes: {
    percentage: { control: { type: 'range', min: 0, max: 100 } },
  },
} as ComponentMeta<typeof ProgressBarComponent>

const Template: ComponentStory<typeof ProgressBarComponent> = ({
  title,
  statusText,
  percentage,
}) => {
  return (
    <div className="w-72">
      <ProgressBarComponent
        title={title}
        statusText={statusText}
        percentage={percentage}
      />
    </div>
  )
}

export const ProgressBar = Template.bind({})
ProgressBar.args = {
  title: 'Something',
  percentage: 33,
}

export const Loading = Template.bind({})
Loading.args = {}

export const WithStatusText = Template.bind({})
WithStatusText.args = {
  title: 'Foo progress',
  statusText: 'Custom text',
  percentage: 33,
}
