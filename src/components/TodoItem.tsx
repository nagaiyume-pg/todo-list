import { Button, CheckBox } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";

interface TodoItemProps {
    title: string;
    isChecked: boolean;
    onCheck: () => void;
    onDelete: () => void;
}

export const TodoItem = (props: TodoItemProps) => {
    const { isChecked, onCheck, onDelete, title } = props;

    return (
        <View style={styles.todoItem}>
            <CheckBox
                checked={isChecked}
                checkedColor='#3b82f6'
                checkedIcon='checkbox-outline'
                containerStyle={styles.checkboxContainer}
                iconType='material-community'
                onPress={onCheck}
                size={24}
                uncheckedColor='#d1d5db'
                uncheckedIcon='checkbox-blank-outline'
                wrapperStyle={styles.checkboxWrapper}
            />
            <Text style={[styles.title, isChecked && styles.strikeThrough]}>
                {title}
            </Text>
            <Button
                buttonStyle={styles.button}
                containerStyle={styles.container}
                icon={{
                    name: 'delete',
                    type: 'material',
                    size: 24,
                    color: 'red',
                }}
                iconContainerStyle={styles.iconContainer}
                onPress={onDelete}
            />
            {/*
            <Icon
                color="red"
                name="delete"
                onPress={onDelete}
                size={20}
            />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    todoItem: {
        borderBottomColor: '#d1d5db',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
    },
    strikeThrough: {
        textDecorationLine: 'line-through',
        color: '#9e9e9e'
    },
    checkboxContainer: {
        margin: 0,
        marginHorizontal: 10,
        padding: 0
    },
    checkboxWrapper: {
        height: 24,
        width: 24
    },
    button: {
        backgroundColor: 'transparent',
        height: 24,
        width: 24
    },
    container: {
        marginHorizontal: 10
    },
    iconContainer: {
        height: 24,
        width: 24
    }
})