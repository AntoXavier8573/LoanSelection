import { StyleSheet, View } from "react-native";
import CustomText from "./accessories/CustomText";
import { DMCImage } from "./accessories/CommomComponents";

const Header = () => {
  return (
    <View style={[styles.headerBackground, { color: "white" }]}>
      <View><DMCImage /></View>
      <CustomText bold={true} style={[styles.headerText, { color: "white" }]}>
        Rate Lock and Loan Selection Form
      </CustomText>
    </View>
  );
};
const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    textAlign: "center",
  },
  headerBackground: {
    flexDirection: "row",
    backgroundColor:'#0d6ac5',
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    // boxShadow: "3px 7px 10px 4px rgb(0 0 0 / 8%)"
  },
});
export default Header;
