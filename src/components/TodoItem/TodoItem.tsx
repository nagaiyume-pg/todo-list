import { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button, CheckBox } from '@rneui/themed';
import {
  NotoSansJP_400Regular,
  useFonts,
} from '@expo-google-fonts/noto-sans-jp';
import * as SplashScreen from 'expo-splash-screen';

interface TodoItemProps extends Todo {
  width: number;
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
  onEdit: (id: number) => void;
}

export const TodoItem = ({ id, title, checked, width, onDelete, onCheck, onEdit }: TodoItemProps) => {
  const checkTodo = useCallback(() => onCheck(id), [id, onCheck])
  const deleteTodo = useCallback(() => onDelete(id), [id, onDelete])
  const editTodo = useCallback(() => onEdit(id), [id, onEdit])

  let [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hide();

    return (
      <TouchableOpacity
        onPress={editTodo}
        style={[styles.container, { width: width }]}
      >
        <CheckBox
          checked={checked}
          onPress={checkTodo}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          containerStyle={styles.checkboxContainer}
          wrapperStyle={styles.checkboxWrapper}
          size={24}
          checkedColor="blue"
        />
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              checked && styles.checkedTitle,
              { fontFamily: 'NotoSansJP_400Regular' },
            ]}
          >
            {title}
          </Text>
        </View>
        <Button
          onPress={deleteTodo}
          icon={{
            name: 'delete',
            size: 24,
            color: 'red',
          }}
          iconContainerStyle={{
            marginLeft: 0,
            marginRight: 0,
          }}
          buttonStyle={{
            backgroundColor: "white",
            padding: 0,
            paddingHorizontal: 0,
          }}
          containerStyle={{
            padding: 20
          }}
        />
      </TouchableOpacity>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  checkboxWrapper: {
    marginLeft: 0,
    marginRight: 0,
    padding: 20,
  },
  checkboxContainer: {
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 16,
  },
  checkedTitle: {
    textDecorationLine: 'line-through', // チェック時に文字に線を引く
    color: 'gray', // 線を引いた文字の色を変更（任意）
  },
});
