import { StyleSheet, View } from "react-native";
import CustomText from "./accessories/CustomText";
import { Button } from "./accessories/CommomComponents";
import DropDownButton from "./accessories/DropDownButton";
import { useRef, useState } from "react";
import { web, android, ios } from "./accessories/Platform";

const Footer = () => {
  const [isMenuOpen, setMenuOpen] = useState({ bottom: false, top: false });
  const [topMenuPosition, setTopMenuPosition] = useState({
    top: 0,
    left: 0,
    opacity: 0,
  });
  const topMenuUseref = useRef();
  const handleRightNavOpen = () => {
    topMenuUseref.current.measure((_fx, _fy, _w, h, _px, py) => {
      setTopMenuPosition({
        top: py + (web ? -440 : 50),
        left: _px + (web ? 10 : -195),
        opacity: 1,
      });
    });
  };
  const handleMenu = () => {
    setMenuOpen({ ...isMenuOpen, top: !isMenuOpen["top"] });
  };
  const menuOption = [
    {
      Name: "FNM 3.2 File",
      onPress: () => {
        // handleLogOut_();
        handleMenu();
      },
      icon: "file-upload",
      from:'Material',
      size:18
    },
    {
      Name: "Use Last Run",
      onPress: () => {
        handleMenu();
      },
      icon: "keyboard-backspace",
      from:'Material',
      size:18
    },
    {
      Name: "Start With a Fresh Run",
      onPress: () => {
        handleMenu();
      },
      icon: "file",
      from:'FontAwesome',
      size:16
    },
    {
      Name: "Search for a Loan or Loan Prospect",
      onPress: () => {
        handleMenu();
      },
      icon: "search",
      from:'FontAwesome',
      size:16
    },
    {
      Name: "Get Title Pricing",
      onPress: () => {
        handleMenu();
      },
      icon: "attach-money",
      from:'MaterialIcons',
      size:20
    },
    {
      Name: "Initial Fee Worksheet",
      onPress: () => {
        handleMenu();
      },
    },
    {
      Name: "Settings",
      onPress: () => {
        handleMenu();
      },
      icon:'settings',
      from:'MaterialIcons',
      size:18
    },
    {
      Name: "Save window size and position",
      onPress: () => {
        handleMenu();
      },
    },
    {
      Name: "Rate Lock Form - Old",
      onPress: () => {
        handleMenu();
      },
    },
    {
      Name: "Rate Locks & Scenarios - Old",
      onPress: () => {
        handleMenu();
      },
    },
  ];
  return (
    <View style={[styles.footerBackground, { color: "white" }]}>
      <View
        style={[
          styles.footerMenu,
          { color: "white", justifyContent: "center" },
        ]}
        ref={topMenuUseref}
      >
        <Button
          title="Menu"
          style={[styles["btn"], { borderRadius: 0 }]}
          onPress={() => {
            handleMenu();
            handleRightNavOpen();
          }}
        />
        <DropDownButton
          listOption={menuOption}
          Open={isMenuOpen["top"]}
          MenuPosition={topMenuPosition}
          handleOpen = {handleMenu}
        />
      </View>
      <View style={[styles.footerSave, { color: "white" }]}>
        <Button title="Save" style={styles["btn"]} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footerSave: {
    // fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
    width: "50%",
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: "flex-end",
    fontSize: 12,
    justifyContent: "center",
  },
  footerBackground: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    height: 59,
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
    // bottom: 13,
  },
});
export default Footer;
