export const mapIndexToData = (_d: any, index: number, arr: any[]) => {
    return {
        text: 'タスク',
        key: `key-${index}`,
        height: 70,
    };
};

export type Item = ReturnType<typeof mapIndexToData>;