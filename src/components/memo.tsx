{/*import { Icon } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';

export const TabView = () => {
  const [selectedTab, setSelectedTab] = useState(0); // 現在選択されているタブ
  const [indicatorPosition] = useState(new Animated.Value(0)); // インジケーターの位置をアニメーションで変更
  const [tabWidths, setTabWidths] = useState([0, 0]); // 各タブのラベルの幅
  const [indicatorWidth, setIndicatorWidth] = useState(0); // インジケーターの幅

  // タブの内容
  const Tab1Content = () => <Text style={styles.content}>Tab 1 Content</Text>;
  const Tab2Content = () => <Text style={styles.content}>Tab 2 Content</Text>;

  // タブのレイアウトが決まったら幅を保存
  const onTabLayout = (event, index) => {
    const { width } = event.nativeEvent.layout;
    const newTabWidths = [...tabWidths];
    newTabWidths[index] = width;
    setTabWidths(newTabWidths);

    if (index === 0) {
      setIndicatorWidth(width); // 最初のタブの幅をインジケーターに適用
    }
  };

  // スクロール位置に基づいてタブを切り替え
  const onScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x; // スクロール位置
    if (contentOffsetX < 0) return;

    const newTab = Math.floor(contentOffsetX / tabWidths[0]); // スクロール幅（タブの幅に基づいて切り替え）
    if (newTab !== selectedTab) {
      setSelectedTab(newTab);
      // インジケーターのアニメーション
      Animated.spring(indicatorPosition, {
        toValue: newTab === 0 ? 0 : 1,
        useNativeDriver: true,
      }).start();
    }
  };

  // インジケーターのアニメーションスタイル
  const indicatorStyle = {
    width: indicatorWidth,
    transform: [
      {
        translateX: indicatorPosition.interpolate({
          inputRange: [0, 1],
          outputRange: [0, tabWidths[1] || 0], // 2番目のタブの幅に応じたアニメーション距離
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 0 && styles.activeTab]}
          onPress={() => setSelectedTab(0)}
          onLayout={(event) => onTabLayout(event, 0)}
        >
          <Icon
            name="home"
            size={30}
            color={selectedTab === 0 ? '#3498db' : '#777'}
          />
          <Text style={[styles.tabText, selectedTab === 0 && styles.activeTabText]}>Tab 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 1 && styles.activeTab]}
          onPress={() => setSelectedTab(1)}
          onLayout={(event) => onTabLayout(event, 1)}
        >
          <Icon
            name="settings"
            size={30}
            color={selectedTab === 1 ? '#3498db' : '#777'}
          />
          <Text style={[styles.tabText, selectedTab === 1 && styles.activeTabText]}>Tab 2</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={[styles.indicator, indicatorStyle]} />

      <ScrollView
        horizontal
        pagingEnabled
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.tabContent}>
          <Tab1Content />
        </View>
        <View style={styles.tabContent}>
          <Tab2Content />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#777',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#3498db',
  },
  activeTabText: {
    color: '#3498db',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 3,
    backgroundColor: '#3498db',
  },
  tabContent: {
    width: 300, // タブの幅（画面幅に合わせる）
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    fontSize: 18,
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
});*/}


{/*
<TabView
    commonOptions={{
        label: ({ labelText, color}) => (
            <View style={styles.label}>
                {labelText == '未完了' ?
                    <Icon name="checkbox-blank-outline" color={color} type='material-community' size={20} />
                    :
                    <Icon name="checkbox-outline" color={color} type='material-community' size={20} />
                }
                <Text style={{ color }}>{labelText}</Text>
            </View>
        ),
    }}
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    renderTabBar={props => (
        <TabBar
            {...props}
            style={styles.tabBar} // タブバーのスタイル
            indicatorStyle={styles.indicator} // インジケーターのスタイル
            activeColor="#6b7280"
            inactiveColor="#d1d5db"
            tabStyle={styles.tab}
        />
    )}
/>*/}