import { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import CustomText from "./CustomText";
import CustomTextInput from "./CustomTextInput";
import { web, android, ios } from "./Platform";

const Separator = () => <View style={styles.separator} />;
const AccordionItem = ({
  children,
  title,
  isExpand = false,
  isAccordion = true,
  style = {},
}) => {
  const [expanded, setExpanded] = useState(isExpand);
  function toggleItem() {
    setExpanded(!expanded);
  }
  return (
    <View style={[styles.accordContainer, style]}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.accordHeader}
        onPress={isAccordion ? toggleItem : () => {}}
      >
        <CustomText
          style={[
            styles.accordTitle,
            { alignItems: "center", display: "flex" },
          ]}
          bold={true}
        >
          {/* {isAccordion && (
              <Entypo
                name={expanded ? "chevron-up" : "chevron-down"}
                size={25}
                style={{ marginRight: 10 }}
              />
            )} */}

          {title}
        </CustomText>
      </TouchableOpacity>
      {expanded && <View style={styles.accordBody}>{children}</View>}
      <Separator />
    </View>
  );
};
//======================================================

//======================================================
const Button = ({
  onPress,
  bold = true,
  title,
  style = {},
  textStyle = {},
}) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    style={[
      styles.buttonContainer,
      {
        borderRadius: 5,
        paddingVertical: 6,
        marginLeft: 8,
      },
      style,
    ]}
  >
    <CustomText style={{ ...{ color: "#fff" }, ...textStyle }} bold={bold}>
      {title}
    </CustomText>
  </TouchableOpacity>
);
const DMCImage = () => {
  return (
    <View
      style={{
        // borderWidth: 1,
        // alignSelf: "center",
      }}
    >
      <Image
        style={{
         // position: "relative",
          height: 50,
          width: 50,
          // borderWidth: 1,
        }}
        resizeMode="contain"
        source={require("../../assets/DW_Fav.png")}
      />
    </View>
  );
};
//======================================================
const InputBox = (props) => {
  const {
    label,
    onChangeText,
    value,
    type = "default",
    placeholder,
    ref,
    secureTextEntry,
    validate = false,
    border,
    onKeyPress = () => {},
    disabled = false,
    width = "100%",
  } = props;
  if (type.includes("Zip")) {
    type = "numeric";
  }
  return (
    <View
      pointerEvents={disabled ? "none" : "auto"}
      style={[
        styles.inputBoxContainer,
        {
          width,
          borderColor: border
            ? border
            : validate && ["", 0, null, undefined, "0"].includes(value)
            ? "red"
            : "silver",
          //marginBottom: label === "Employed From" ? 25 : 20,
        },
      ]}
    >
      <CustomTextInput
        onChangeText={(text) => onChangeText(text)}
        secureTextEntry={secureTextEntry || false}
        value={value || ""}
        placeholder={placeholder || ""}
        keyboardType={type || "default"}
        style={styles.inputBox}
        autoCapitalize={"none"}
        ref={ref || null}
        {...props}
        onKeyPress={onKeyPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 12,
  },
  accordContainer: {
    paddingBottom: 4,
  },
  accordHeader: {
    padding: 8,
    backgroundColor: "#f5f5f5",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accordTitle: {
    fontSize: 16,
  },
  accordBody: {
    padding: 15,
    borderColor: "#ddd",
    borderWidth: 1,
    borderTopWidth: 0,
    marginTop: -2,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    backgroundColor: "#428bca",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  inputBox: {
    ...{
      borderWidth: 0,
      // outlineWidth: 0,
      borderRadius: 5,
      fontSize: web ? 12 : 16,
     // backgroundColor: "rgba(0,0,0,.04)",
      color: "#51575d",
      width: "100%",
      //padding: 5,
     // height: 34,
    },
    // ...(web && {
    //   ":focus": { "outline-width": 0, borderWidth: 0 },
    //   ":focus-visible": { "outline-width": 0, borderWidth: 0 },
    // }),
  },
  inputBoxLabel: {
    // display: "inline",
    position: "absolute",
   // backgroundColor: "#fff",
    top: -12,
    left: 3,
    fontSize: 14,
    // color: "gray",
   // paddingHorizontal: 3,
    flex: 1,
  },
  inputBoxContainer: {
    flexDirection: "row",
    // borderColor: "silver",
    // borderWidth: 1,
    // borderRadius: 8,
    // padding: 8,
    height:27
   // marginBottom: 20,
    //minHeight: 50,
  },
});

export { AccordionItem, Separator, DMCImage, Button,InputBox };
