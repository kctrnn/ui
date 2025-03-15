import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ChevronRight, Loader2, MailOpen } from 'lucide-react'

import { Button } from '@/components'

const meta = {
  title: 'ui/Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    // backgroundColor: { control: 'color' },

    size: {
      options: ['default', 'sm', 'lg'],
      control: { type: 'inline-radio' },
    },

    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'radio' },
    },

    asChild: { table: { disable: true } },
  },

  args: {
    size: 'default',
    variant: 'default',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <MailOpen /> Login with Email
      </>
    ),
  },

  argTypes: {
    children: { control: false },
  },
}

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="animate-spin" />
        Submitting
      </>
    ),
  },

  argTypes: {
    children: { control: false },
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
    children: <ChevronRight />,
  },

  argTypes: {
    children: { control: false },
    size: { options: ['icon'] },
  },
}

export const AsChild: Story = {
  args: {
    asChild: true,
    children: (
      <a href="/login" target="_blank">
        Login
      </a>
    ),
  },

  argTypes: {
    children: { control: false },
  },
}
