import { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "./CustomText";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const DropDownButton = (props) => {
  const { listOption, MenuPosition, children, Open, handleOpen } = props;

  return (
    <>
      <Modal visible={Open} transparent animationType="fade">
        <TouchableOpacity
          activeOpacity={1}
          style={{ width: "100%", height: "100%" }}
          onPress={() => handleOpen()}
        >
          <View
            style={[
              {
                backgroundColor: "#fff",
                position: "absolute",
                width: "auto",
                borderColor: "#d3dadf",
                borderWidth: 1,
                borderRadius: 2,
                boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
              },
              MenuPosition,
            ]}
          >
            {listOption.map((item, index) => (
              <View key={index} style={[styles.menuOption,{paddingTop :item["from"] === undefined ? 12: 0}]}>
                <View style={{paddingHorizontal:10}}>
                {item["from"] === "MaterialIcons" ? (
                  <MaterialIcons
                    style={styles.icon}
                    size={item["size"]}
                    color={"black"}
                    name={item["icon"]}
                  />
                ) : item["from"] === "FontAwesome" ? (
                  <FontAwesome
                    style={styles.icon}
                    size={item["size"]}
                    color={"black"}
                    name={item["icon"]}
                  />
                ) : item["from"] === "Material"&& (
                  <MaterialCommunity
                    style={styles.icon}
                    size={item["size"]}
                    color={"black"}
                    name={item["icon"]}
                  />
                ) }
                <CustomText key={index} onPress={item["onPress"]}>
                  {item["Name"]}
                </CustomText>
                </View>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  menuOption: {
    paddingLeft: 25,
    paddingRight: 12,
    paddingBottom: 11,
    fontSize: 12,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    color: "#333333",
  },
  icon: {
    right: 20,
    //position: "absolute",
    top: 15,
  },
});

export default DropDownButton;
