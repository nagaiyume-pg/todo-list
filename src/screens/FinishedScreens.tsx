import { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DraggableFlatList, {
    ScaleDecorator,
    ShadowDecorator,
    OpacityDecorator,
    RenderItemParams,
} from "react-native-draggable-flatlist";

import { mapIndexToData, Item } from "@/utils";

const NUM_ITEMS = 10;

const initialData: Item[] = [...Array(NUM_ITEMS)].map(mapIndexToData);

export const FinishedScreen = () => {
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
    []);

    return (
        <DraggableFlatList
            data={data}
            onDragEnd={({ data }) => setData(data)}
            keyExtractor={(item) => item.key}
            renderItem={renderItem}
            renderPlaceholder={() => (
                <View style={{ flex: 1, backgroundColor: "tomato" }} />
            )}
        />
    );
}

const styles = StyleSheet.create({
    rowItem: {
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
});