import { TodoItem } from "@/components"
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native"

export const TodoScreen = () => {
  return(
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      <View style={styles.container}>
        <TodoItem
          title="タスク名"
          width={375}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1
  },
  container: {
    flex: 1
  }
})