import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { WebView } from "react-native-webview";


export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.container}
        source={{ uri: "https://chat-ruru.netlify.app/" }}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
    width: 360,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
