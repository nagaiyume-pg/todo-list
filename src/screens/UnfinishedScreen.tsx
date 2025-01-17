// 必要なReactコンポーネントとフックをインポート
import React, { useCallback, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// `react-native-draggable-flatlist` ライブラリから必要なコンポーネントとデコレータをインポート
import DraggableFlatList, {
    ScaleDecorator, // アイテムがドラッグされるとスケール（拡大・縮小）エフェクトを追加
    ShadowDecorator, // アイテムに影をつけるデコレータ
    OpacityDecorator, // アイテムがドラッグされると透明度を変更するデコレータ
    RenderItemParams, // レンダリングのためのパラメータ型
} from "react-native-draggable-flatlist";

import { mapIndexToData, Item } from "@/utils";

// アイテム数の定義
const NUM_ITEMS = 10;

// 初期データを生成するための関数。`mapIndexToData` 関数を使ってデータを作成
const initialData: Item[] = [...Array(NUM_ITEMS)].map(mapIndexToData);

// コンポーネントのレンダリング
export const UnfinishedScreen = () => {
    // ドラッグ可能なリストアイテムのデータを state に保持
    const [data, setData] = useState(initialData);

    // アイテムを描画するための renderItem 関数
    const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<Item>) => {
        return (
            // アイテムに影を付けるデコレータ
            <ShadowDecorator>
                {/* アイテムをドラッグ時にスケールエフェクトを加える */}
                <ScaleDecorator>
                    {/* アイテムをドラッグ時に透明度を変更する */}
                    <OpacityDecorator>
                        {/* 長押しでアイテムをドラッグ可能にするボタン */}
                        <TouchableOpacity
                            activeOpacity={1} // 押下時の透明度設定（1 = 変化なし）
                            onLongPress={drag} // 長押しでドラッグ開始
                            disabled={isActive} // ドラッグ中はタッチイベントを無効化
                            style={[ // アイテムのスタイル
                            styles.rowItem,
                                { backgroundColor: isActive ? "gray" : "white" }, // ドラッグ中は背景色を変更
                            ]}
                        >
                            {/* アイテムのテキスト */}
                            <Text style={styles.text}>{item.text}</Text>
                        </TouchableOpacity>
                    </OpacityDecorator>
                </ScaleDecorator>
            </ShadowDecorator>
        );
        },
        [] // この関数は再レンダリング時に再生成されないようにするため、依存配列は空に
    );

    return (
        // ドラッグ可能なリストコンポーネント
        <DraggableFlatList
            data={data} // リストに表示するデータ
            onDragEnd={({ data }) => setData(data)} // ドラッグ終了時にデータを更新
            keyExtractor={(item) => item.key} // アイテムの一意なキーを取得する関数
            renderItem={renderItem} // アイテムの描画方法
            // プレースホルダ（ドラッグ中の空いている場所のスタイル）
            renderPlaceholder={() => (
                <View style={{ flex: 1, backgroundColor: "white" }} />
            )}
        />
    );
}

// スタイルの定義
const styles = StyleSheet.create({
    rowItem: {
        height: 70, // アイテムの高さ
        alignItems: "center", // アイテム内のコンテンツを中央に配置
        justifyContent: "center", // アイテム内のコンテンツを中央に配置
        borderBlockColor: "#d1d5db", // ボーダーの色
        borderStyle: "solid", // ボーダースタイル（実線）
        borderBottomWidth: 1 // 下部に1pxのボーダーを表示
    },
    text: {
        color: "black", // テキストの色
        fontSize: 20, // テキストのフォントサイズ
        fontWeight: "bold", // テキストのフォントウェイト（太字）
        textAlign: "center", // テキストを中央揃え
    },
});
