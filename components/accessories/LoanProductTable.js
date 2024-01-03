import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "./CustomText";
import GridDropDown from "./GridDropDown";
import RateBandTable from "./RateBandTable";
import MultiSelect from "./MultiSelect";
import { Button, InputBox } from "./CommomComponents";
import Icon from "react-native-vector-icons/FontAwesome";
import {  CheckBox } from "react-native-web";

const LoanProductTable = (props) => {
  const { LoanProducts, ProductClick, VisibleRateBand,RateBandClick,ActiveRate } = props;

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View
          style={[
            styles["header"],
            styles.bodyText,
            {
              backgroundColor: "#0d6ac5",
              justifyContent: "space-between",
              paddingVertical: 5,
              height: 35,
            },
          ]}
        >
          <View style={[styles["header"], { backgroundColor: "#0d6ac5" }]}>
            <CustomText style={{ color: "#fff", fontSize: 22 }} bold={true}>
              Loan Products:{" "}
            </CustomText>
            <CustomText
              style={{
                color: "#fff",
                backgroundColor: "#3a87ad",
                borderRadius: 3,
                fontSize: 12,
                paddingHorizontal: 5,
                paddingVertical: 2,
                alignText: "center",
                top: 4,
                height: 20,
              }}
            >
              {LoanProducts?.length/2} Loan Products
            </CustomText>
          </View>
          <View style={{ flexDirection: "row" }}>
            <CustomText style={{ color: "#fff" }}>
              Display Lender Comp?{" "}
            </CustomText>
            <CheckBox></CheckBox>
          </View>
        </View>
        <View style={[styles["header"], { color: "#fff", flex: 8 }]}>
          <CustomText
            style={[
              styles.bodyText,
              styles.colBorder,
              { color: "#fff", flex: 4 },
            ]}
          >
            Product
          </CustomText>
          <CustomText
            style={[
              styles.bodyText,
              styles.colBorder,
              { color: "#fff", flex: 1 },
            ]}
          >
            Interest Rate
          </CustomText>
          <CustomText
            style={[
              styles.bodyText,
              styles.colBorder,
              { color: "#fff", flex: 1 },
            ]}
          >
            APR
          </CustomText>
          <CustomText
            style={[
              styles.bodyText,
              styles.colBorder,
              { color: "#fff", flex: 1 },
            ]}
          >
            Lock Days
          </CustomText>
          <CustomText
            style={[
              styles.bodyText,
              styles.colBorder,
              { color: "#fff", flex: 1 },
            ]}
          >
            Monthly Payment
          </CustomText>
          <CustomText
            style={[
              styles.bodyText,
              styles.colBorder,
              { color: "#fff", flex: 2 },
            ]}
          >
            Credit/Charge Interest Rate Chosen
          </CustomText>
          <CustomText
            style={[styles.bodyText, { color: "#fff", flex: 1, maxWidth: 80 }]}
          >
            Action
          </CustomText>
        </View>
        {LoanProducts?.map((row, index) => {
          let isEven =index % 2 === 0;
          return (
            <>
              {row["Id"] != -1 ? (
                <View
                  key={index}
                  style={[
                    styles.body,
                    { backgroundColor: isEven ? "#deebf7" : "#fff", flex: 8 },
                  ]}
                >
                  <View style={[styles.bodyText, { flex: 4 }]}>
                    <View style={{ flexDirection: "column" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <CustomText
                          style={[styles.bodyText, styles.removeColBorder]}
                          onPress={(e) => {
                            ProductClick(row["LineId"]);
                          }}
                        >
                          {row["Name"]}
                        </CustomText>
                        
                      </View>
                      
                    </View>
                  </View>

                  <CustomText
                    style={[styles.bodyText, { flex: 1 }]}
                    onPress={(e) => {
                      ProductClick(row["LineId"]);
                      // const newTranslateY = VisibleRateBand[row['LineId']] ? 0 : 0
                      // Animated.timing(tableOpacity, {
                      //   toValue: newTranslateY,
                      //   duration: 300, // Set the duration of the animation
                      //   useNativeDriver: true, // Use native driver for performance
                      // }).start();
                    }}
                  >
                    {row["InterestRate"]}
                  </CustomText>
                  <CustomText
                    style={[styles.bodyText, { flex: 1 }]}
                    onPress={(e) => {
                      ProductClick(row["LineId"]);
                    }}
                  >
                    {row["APR"]}
                  </CustomText>
                  <CustomText style={[styles.bodyText, { flex: 1 }]}>
                    {row["LockPeriodDesc"]}
                  </CustomText>
                  <CustomText style={[styles.bodyText, { flex: 1 }]}>
                    {row["Payment"]}
                  </CustomText>
                  <CustomText
                    style={[styles.bodyText, { flex: 2 }]}
                  >{`${row["FinalPoint"]} | ${row["FinalAmount"]}`}</CustomText>
                  <CustomText
                    style={[
                      styles.bodyText,
                      { flex: 1, right: 0, bottom: 3, maxWidth: 80 },
                    ]}
                  >
                    {
                      <Button
                        title={
                          <CustomText style={{ fontSize: 12, color: "white" }}>
                            Select
                          </CustomText>
                        }
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 3,
                          marginLeft: 0,
                        }}
                        onPress={() => {
                          //handleAddBorrower("Add");
                        }}
                      />
                    }
                  </CustomText>
                </View>
              ) : (
                <View
                  style={
                    VisibleRateBand[row["LineId"]]
                      ? styles["showRateBand"]
                      : styles["hideRateBand"]
                  }
                >
                  <View
                    style={[{
                      display: VisibleRateBand[row["LineId"]]
                        ? "block"
                        : "none",
                        backgroundColor: "#F2F2F2",
                    }]}
                  >
                    <RateBandTable RateBandClick={RateBandClick} ActiveRate={ActiveRate}/>
                  </View>
                </View>
              )}
            </>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 17,
  },
  table: {
    borderWidth: 1,
    borderColor: "#5e9cd3",
    borderStyle: "solid",
    borderRightWidth: 0,
  },
  header: {
    backgroundColor: "#5e9cd3",
    flexDirection: "row",
  },
  headerText: {
    color: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: "100%",
    borderRightWidth: 1,
    borderRightColor: "#fff",
    borderRightStyle: "dotted",
    fontSize: 12,
  },
  body: {
    flexDirection: "row",
  },
  bodyText: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: "100%",
    borderRightWidth: 1,
    borderRightColor: "#5e9cd3",
    borderRightStyle: "dotted",
    color: "#6c757d",
    fontSize: 12,
    //height: 28,
  },
  icon: {
    right: 20,
    position: "absolute",
  },
  colBorder: {
    borderRightWidth: 1,
    borderRightColor: "white",
    borderRightStyle: "dotted",
  },
  removeColBorder: {
    borderRightWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },

  showRateBand: {
    opacity: 1,
    //maxHeight: 0,
    transition: "all 150ms ease-in",
  },
  hideRateBand: {
    opacity: 0,
    maxHeight: 0,
    transition: "all 150ms ease-out",
    //display:'none'
    //  overflow: hidden;
    // transition-iming-function: ease-out;
  },
});

export default LoanProductTable;
