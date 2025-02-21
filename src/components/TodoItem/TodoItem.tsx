import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from '@rneui/themed';
import {
  NotoSansJP_400Regular,
  useFonts,
} from '@expo-google-fonts/noto-sans-jp';
import * as SplashScreen from 'expo-splash-screen';

interface TodoItemProps {
  title: string;
  width: number;
}

export const TodoItem = ({ title, width }: TodoItemProps) => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);

  let [fontsLoaded] = useFonts({
    NotoSansJP_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hide();

    return (
      <View style={[styles.container, { width: width }]}>
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          containerStyle={styles.checkboxContainer}
          wrapperStyle={styles.checkboxWrapper}
          size={24}
          checkedColor="blue"
        />
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
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    // borderBottomColor: "gray",
    // borderBottomWidth: 1,
    // borderStyle: "solid",
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  checkboxWrapper: {
    marginLeft: 20,
    marginRight: 20,
    padding: 0,
  },
  checkboxContainer: {
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
  title: {
    fontSize: 16,
  },
  checkedTitle: {
    textDecorationLine: 'line-through', // チェック時に文字に線を引く
    color: 'gray', // 線を引いた文字の色を変更（任意）
  },
});
