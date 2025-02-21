import { CheckBox } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';

export const TodoItem = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <CheckBox />
    </View>
  );
};
