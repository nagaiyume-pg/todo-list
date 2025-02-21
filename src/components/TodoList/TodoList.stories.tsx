import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TodoList } from './TodoList';

const meta = {
  title: 'TodoList',
  component: TodoList,
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TodoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
