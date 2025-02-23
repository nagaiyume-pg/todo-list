import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TodoItem } from './TodoItem';

const meta: Meta<typeof TodoItem> = {
  title: 'TodoItem',
  component: TodoItem,
  args: {
    id: "0",
    title: 'タスク名',
    checked: false,
    width: 375,
    onCheck: (id: string) => { console.log("Checked Todo with id:", id); },
    onEdit: (id: string) => { console.log("Edit Todo with id:", id); },
    onDelete: (id: string) => { console.log("Delete Todo with id:", id); },
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Incomplete: Story = {};
