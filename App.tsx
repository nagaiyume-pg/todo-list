import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DraggableFlatList, {
  ScaleDecorator,
  ShadowDecorator,
  OpacityDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { mapIndexToData, Item } from "@/utils";

const NUM_ITEMS = 100;

const initialData: Item[] = [...Array(NUM_ITEMS)].map(mapIndexToData);

export default function App() {
  const [data, setData] = useState(initialData);

  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<Item>) => {
      return (
        <ShadowDecorator>
          <ScaleDecorator>
            <OpacityDecorator>
              <TouchableOpacity
                activeOpacity={1}
                onLongPress={drag}
                disabled={isActive}
                style={[
                  styles.rowItem,
                  { backgroundColor: isActive ? "blue" : item.backgroundColor },
                ]}
              >
                <Text style={styles.text}>{item.text}</Text>
              </TouchableOpacity>
            </OpacityDecorator>
          </ScaleDecorator>
        </ShadowDecorator>
      );
    },
    []
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar style="auto" />
        <DraggableFlatList
          data={data}
          onDragEnd={({ data }) => setData(data)}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
          renderPlaceholder={() => (
            <View style={{ flex: 1, backgroundColor: "tomato" }} />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
