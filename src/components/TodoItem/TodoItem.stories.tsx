import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TodoItem } from './TodoItem';

const meta = {
  title: 'TodoItem',
  component: TodoItem,
  args: {
    title: 'タスク名',
    width: 375,
  },
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#e5e7eb',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TodoItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Incomplete: Story = {};
