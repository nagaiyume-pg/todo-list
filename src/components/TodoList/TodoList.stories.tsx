import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TodoItem } from './TodoItem';

const meta = {
    title: 'TodoItem',
    component: TodoItem,
    argTypes: {
        id: "0",
        title: "タスク",

    },
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
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const AnotherExample: Story = {
    args: {
        text: 'Another example',
    },
};
