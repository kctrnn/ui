import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components'

const meta = {
  title: 'ui/DropdownMenu',
  component: DropdownMenu,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},

  args: {},
} satisfies Meta<typeof DropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

type Checked = DropdownMenuCheckboxItemProps['checked']

export const Checkboxes: Story = {
  render: () => <DropdownMenuCheckboxes />,
}

export const RadioGroup: Story = {
  render: () => <DropdownMenuRadioGroupDemo />,
}

function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
  const [showPanel, setShowPanel] = useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState('bottom')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
