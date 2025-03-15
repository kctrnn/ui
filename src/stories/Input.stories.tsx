import type { Meta, StoryObj } from '@storybook/react'

import { Button, Input, Label } from '@/components'

const meta = {
  title: 'ui/Input',
  component: Input,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    type: {
      options: ['text', 'password', 'file', 'email'],
      control: 'radio',
    },
  },

  args: {
    type: 'email',
    disabled: false,
    placeholder: 'Email',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {},

  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" {...args} />
    </div>
  ),
}

export const WithButton: Story = {
  args: {},

  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
}
