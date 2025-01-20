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
            <View style={styles.titleContainer}>
                <Text style={[styles.title, isChecked && styles.strikeThrough]}>
                    {title}
                </Text>
            </View>
            <Button
                buttonStyle={styles.button}
                icon={{
                    name: 'delete',
                    type: 'material',
                    size: 24,
                    color: 'red',
                }}
                iconContainerStyle={styles.iconContainer}
                onPress={onDelete}
            />
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
    titleContainer: {
        flex: 1
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
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
    },
    checkboxWrapper: {
        height: 49,
        width: 50,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 12.5,
    },
    iconContainer: {
        marginHorizontal: 0,
        height: 24,
        width: 24
    }
})