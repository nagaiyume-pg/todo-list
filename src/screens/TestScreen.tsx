import Ionicons from '@expo/vector-icons/Ionicons'; // アイコンコンポーネントのインポート
import { Text } from '@react-navigation/elements'; // Text コンポーネントのインポート
import { useLocale } from '@react-navigation/native'; // ロケール情報を取得するフック
import * as React from 'react'; // Reactのインポート
import { Animated, StyleSheet, View } from 'react-native'; // React Native コンポーネントのインポート
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // セーフエリアのインセットを取得するフック
import {
    SceneMap,
    TabBar,
    type TabBarIndicatorProps,
    TabView,
    type TabBarProps
} from 'react-native-tab-view'; // タブビュー関連のコンポーネントと型をインポート

// Route 型の定義。各タブのキーとアイコン名を持つ
type Route = {
  key: string;  // タブの識別キー
  icon: React.ComponentProps<typeof Ionicons>['name'];  // アイコンの名前
};

// タブのシーンを定義。各タブに対して表示するコンポーネントを指定
const renderScene = SceneMap({
  article: () => <View style={{ flex: 1 }}></View>,  // 'article' タブのシーン
  contacts: () => <View style={{ flex: 1 }} ></View>, // 'contacts' タブのシーン
});

// TestScreen コンポーネント。タブビューとそのカスタマイズを管理する画面
export const TestScreen = () => {
    const { direction } = useLocale();  // ロケール（文字の方向）を取得
    const insets = useSafeAreaInsets();  // セーフエリアのインセット（画面端の余白）を取得
    const [index, onIndexChange] = React.useState(0);  // 現在選択されているタブのインデックスと変更関数
    const [routes] = React.useState<Route[]>([  // タブのルート（タブ情報）を設定
        {
            key: 'article',  // 'article' タブ
            icon: 'document', // アイコンは 'document'
        },
        {
            key: 'contacts',  // 'contacts' タブ
            icon: 'people', // アイコンは 'people'
        },
    ]);

    // インジケーター（アクティブタブ下のライン）をカスタマイズする関数
    const renderIndicator = (props: TabBarIndicatorProps<Route>) => {
        const { position, getTabWidth, gap, width, style } = props;
        const inputRange = [
            0, 0.48, 0.49, 0.51, 0.52, 1, 1.48, 1.49, 1.51, 1.52, 2,
        ];  // インジケーターのアニメーション範囲

        // スケールアニメーション（インジケーターの拡大・縮小）
        const scale = position.interpolate({
            inputRange,
            outputRange: inputRange.map((x) => (Math.trunc(x) === x ? 2 : 0.1)),
        });

        /*
        // 不透明度アニメーション（インジケーターの透明度）
        const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map((x) => {
                const d = x - Math.trunc(x);
                return d === 0.49 || d === 0.51 ? 0 : 1;
            }),
        });*/

        // 水平移動アニメーション（インジケーターの位置を調整）
        const translateX = position.interpolate({
            inputRange: inputRange,
            outputRange: inputRange.map((x) => {
                const i = Math.round(x);
                return (
                (i * getTabWidth(i) + i * (gap ?? 0)) * (direction === 'rtl' ? -1 : 1)
                );
            }),
        });

        // インジケーターのアニメーションを適用
        return (
            <Animated.View
                style={[style, styles.container, { width, transform: [{ translateX }] }]}
            >
            <Animated.View
                style={[styles.indicator]}
            />
        </Animated.View>
        );
    };

    // TabBarのレンダリングをカスタマイズする関数
    const renderTabBar = (props: TabBarProps<Route>) => (
        <View style={[styles.tabbar, { paddingBottom: insets.bottom }]}>
        <TabBar
            {...props}  // TabView から渡されたプロパティを適用
            direction={direction}  // タブの方向（左から右、右から左）
            renderIndicator={renderIndicator}  // カスタムインジケーターを使用
            style={styles.tabbar}  // TabBarのスタイル
            contentContainerStyle={styles.tabbarContentContainer}  // コンテンツ部分のスタイル
            gap={20}  // タブ間のスペースを20に設定
        />
        </View>
    );

    return (
        // TabViewをレンダリング
        <TabView<Route>
            navigationState={{
                index,  // 現在の選択タブのインデックス
                routes,  // タブのルート情報
            }}
            commonOptions={{
                labelText: "aaa",  // 各タブにアイコンを表示
            }}
            // タブの方向
            renderScene={renderScene}  // 各タブに表示するシーンを設定
            renderTabBar={renderTabBar}  // TabBarのカスタマイズ
            tabBarPosition="bottom"  // TabBarを画面下に配置
            onIndexChange={onIndexChange}  // タブが変更された時の処理
        />
    );
};

// スタイルシートの定義
const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: '#263238',  // TabBarの背景色
        overflow: 'hidden',  // コンテンツがはみ出ないように設定
    },
    tabbarContentContainer: {
        paddingHorizontal: 10,  // TabBar内のコンテンツに横の余白を追加
    },
    icon: {
        backgroundColor: 'transparent',  // アイコンの背景を透明に設定
        color: 'white',  // アイコンの色を白に設定
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicator: {
        backgroundColor: 'rgb(0, 132, 255)',  // インジケーターの色
        width: 48,  // インジケーターの幅
        height: 48,  // インジケーターの高さ
        borderRadius: 24,  // インジケーターを丸くする
        margin: 6,  // インジケーターの周りにマージンを追加
    },
    badge: {
        marginTop: 4,  // バッジの上のマージン
        marginEnd: 32,  // バッジの右側にマージン
        backgroundColor: '#f44336',  // バッジの背景色
        height: 24,  // バッジの高さ
        width: 24,  // バッジの幅
        borderRadius: 12,  // バッジを丸くする
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        color: '#fff',  // バッジ内の数字の色
        fontSize: 12,  // バッジ内の数字のフォントサイズ
        fontWeight: 'bold',  // バッジ内の数字を太字に
        marginTop: -2,  // バッジ内の数字の位置調整
    },
});
