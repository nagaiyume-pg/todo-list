import { Button } from '@rneui/themed';
import { StyleSheet } from 'react-native';

interface AddButtonProps {
  onPress: () => void;
}

export const AddButton = (props: AddButtonProps) => {
  const { onPress } = props;
  return (
    <Button
      buttonStyle={styles.button}
      containerStyle={styles.container}
      icon={{
        name: 'add',
        type: 'material',
        size: 50,
        color: 'white',
      }}
      iconContainerStyle={styles.iconContainer}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 35,
    height: 70,
    width: 70,
  },
  container: {
    bottom: 20,
    position: 'absolute',
    right: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
  },
});
