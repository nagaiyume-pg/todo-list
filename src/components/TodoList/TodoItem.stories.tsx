import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TodoItem } from './TodoItem';

const meta = {
    title: 'TodoItem',
    component: TodoItem,
    args: {
        id: "0",
        title: "タスク",
        completed: false,
        width: 375,
        onCheck(id) {
            console.log(id);
        },
        onDelete(id) {
            console.log(id);
        },
        onEdit(id) {
            console.log(id);
        },
    },
    decorators: [
        (Story) => (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "gray" }}>
            <Story />
        </View>
        ),
    ],
} satisfies Meta<typeof TodoItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Incomplete: Story = {};

export const completed: Story = {
    args: {
        completed: true
    }
};
