import { StyleSheet, Text, View } from "react-native";
import LoanSelection from "./components/LoanSelection";
import AnimatedTableExample from "./components/Dev";

export default function App() {
  return (
    <View style={styles.container}>
      <LoanSelection/>
      {/* <AnimatedTableExample/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
