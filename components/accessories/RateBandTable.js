import { StyleSheet, View } from "react-native";
import { Button } from "./CommomComponents";
import CustomText from "./CustomText";
import Dropdown from "./DropDown";

const RateBandTable = (props) => {
  const { ActiveRate, RateBandClick } = props;

  const RateBand = [
    {
      InterestRate: "3.7500%",
      BasePoints: "20.511%",
      BasePrice: "$84,320.31",
      Rank: 1,
      Difference: "-",
    },
    {
      InterestRate: "3.8750%",
      BasePoints: "20.011%",
      BasePrice: "$82,264.82",
      Rank: 1,
      Difference: "-",
    },
    {
      InterestRate: "4.0000%",
      BasePoints: "19.511%",
      BasePrice: "$80,209.33",
      Rank: 1,
      Difference: "-",
    },
    {
      InterestRate: "4.1250%",
      BasePoints: "19.011%",
      BasePrice: "$78,153.84",
      Rank: 1,
      Difference: "-",
    },
    {
      InterestRate: "4.2500%",
      BasePoints: "18.078%",
      BasePrice: "$74,318.30",
      Rank: 1,
      Difference: "-",
    },
    {
      InterestRate: "4.3750%",
      BasePoints: "17.578%",
      BasePrice: "$72,262.81",
      Rank: 1,
      Difference: "-",
    },
    {
      InterestRate: "4.5000%",
      BasePoints: "15.078%",
      BasePrice: "$61,985.36",
      Rank: 1,
      Difference: "-",
    },
  ];
  const Addons = [
    {
      Adjustments: "Price Improvement -",
      Rate: "0.0000%",
      Points: "(8.900)",
      Amount: "($28,480.00)",
    },
    {
      Adjustments: "Price Improvement -",
      Rate: "0.0000%",
      Points: "(0.250)",
      Amount: "($800.00)",
    },
    {
      Adjustments: "The FICO is 789 with",
      Rate: "0.0000%",
      Points: "0.500",
      Amount: "$1,600.00",
    },
  ];
  const GrantTotal = [
    {
      SelectedRate: "",
      Rate: "4.1250%",
      Points: "4.883%",
      Amount: "$15,625.60",
    },
    {
      SelectedRate: "Lender Comp",
      Rate: "",
      Points: "(8.900)",
      Amount: "($28,480.00)",
    },
    {
      SelectedRate: "Final Rate & Price",
      Rate: "0.0000%",
      Points: "(0.250)",
      Amount: "($800.00)",
    },
    {
      SelectedRate: "",
      Rate: "0.0000%",
      Points: "0.000%",
      Amount: "$1,600.00",
    },
  ];
  let Lockdays = [
    { label: "12", value: "12" },
    { label: "30", value: "30" },
    { label: "45", value: "45" },
    { label: "60", value: "60" },
    { label: "90", value: "90" },
  ];
  let RankBy = [
    { label: "Price Only", value: "1" },
    { label: "Price and Fees", value: "2" },
  ];

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          backgroundColor: "#F2F2F2",
          marginBottom: 5,
        }}
      >
        <View style={{ flexDirection: "row", gap: 7 }}>
          <CustomText bold={true} style={styles["dropdown_Label"]}>
            Lock Days
          </CustomText>
          <View>
            <Dropdown
              isValid={true}
              label={""}
              options={Lockdays}
              value={
                // item["isMap"]
                //   ? item["Option"].filter(
                //       (e) => e["value"] == item["ColumnValue"]
                //     )[0]?.label
                //   :
                "Option1"
              }
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 7 }}>
          <CustomText bold={true} style={styles["dropdown_Label"]}>
            Rank By
          </CustomText>
          <View>
            <Dropdown
              isValid={true}
              label={""}
              options={RankBy}
              value={
                // item["isMap"]
                //   ? item["Option"].filter(
                //       (e) => e["value"] == item["ColumnValue"]
                //     )[0]?.label
                //   :
                "Option1"
              }
            />
          </View>
        </View>
      </View>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#F2F2F2",
            borderColor: "#428BCA",
          }}
        >
          
          <View
            style={[styles['SpaceAround'],{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderColor: "#dddddd",
            }]}
          >
            <CustomText bold={true} style={{ fontSize: 12, color: "#848484" }}>
              Direct Mortgage, Corp. - (6010-1)
            </CustomText>
            <View style={{ flexDirection: "row" }}>
              <Button
                title={
                  <CustomText style={{ fontSize: 12, color: "white" }}>
                    Run AUS
                  </CustomText>
                }
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  marginLeft: 0,
                  borderRadius: 10,
                  backgroundColor: "#abbac3",
                }}
                onPress={() => {
                  //handleAddBorrower("Add");
                }}
              />
              <Button
                title={
                  <CustomText style={{ fontSize: 12, color: "white" }}>
                    Guidelines
                  </CustomText>
                }
                style={{
                  paddingHorizontal: 7,
                  paddingVertical: 3,
                  marginLeft: 4,
                  backgroundColor: "#abbac3",
                }}
                onPress={() => {
                  //handleAddBorrower("Add");
                }}
              />
            </View>
          </View>
          <View
            style={[styles['SpaceAround'],{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingTop: 5,
              borderBottomWidth: 1,
              borderColor: "#428BCA",
            }]}
          >
            <CustomText
              style={{
                fontSize: 12,
                color: "white",
                backgroundColor: "#468847",
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 6,
                marginBottom: 5,
              }}
            >
              Accept
            </CustomText>
          </View>

          <View style={[styles.heading,styles['SpaceAround'], { flex: 6, paddingVertical: 5 }]}>
            <CustomText bold={true} style={[styles.heading, { flex: 2 }]}>
              Interest Rate
            </CustomText>
            <CustomText bold={true} style={[styles.heading, { flex: 1 }]}>
              Base Points
            </CustomText>
            <CustomText bold={true} style={[styles.heading, { flex: 1 }]}>
              Base Price
            </CustomText>
            <CustomText
              bold={true}
              style={[styles.heading, { flex: 1, textAlign: "center" }]}
            >
              Rank
            </CustomText>
            <CustomText
              bold={true}
              style={[styles.heading, { flex: 1, textAlign: "center" }]}
            >
              Difference
            </CustomText>
          </View>
          <View style={[styles['SpaceAround'],{ flexDirection: "column" }]}>
            {RateBand.map((column, index) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    //justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderColor: "#D1D1D1",
                    backgroundColor:
                      ActiveRate["Rate"] === column["InterestRate"]
                        ? "#ADFE2F"
                        : "inherit",
                    paddingVertical: 1,
                    // paddingLeft: 2,
                    flex: 5,
                  }}
                  onClick={() => {
                    RateBandClick(column);
                  }}
                >
                  <CustomText
                    style={{
                      fontSize: 12,
                      color: "#848484",
                      flex: 2,
                    }}
                  >
                    {column["InterestRate"] || ""}
                  </CustomText>

                  <CustomText style={styles["txt_Label"]}>
                    {column["BasePoints"] || ""}
                  </CustomText>
                  <CustomText style={styles["txt_Label"]}>
                    {column["BasePrice"] || ""}
                  </CustomText>
                  <CustomText
                    style={[
                      styles["txt_Label"],
                      {
                        textAlign: "center",
                      },
                    ]}
                  >
                    {column["Rank"] || ""}
                  </CustomText>
                  <CustomText
                    style={[
                      styles["txt_Label"],
                      {
                        textAlign: "center",
                      },
                    ]}
                  >
                    {column["Difference"] || ""}
                  </CustomText>
                </View>
              );
            })}
          </View>
         
        </View>
        <View
          style={[styles['SpaceAround'],{
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,

            borderColor: "#428BCA",
            flex: 5,
          }]}
        >
          <View style={styles.heading}>
            <CustomText bold={true} style={[styles.header, { flex: 2 }]}>
              Adjustments
            </CustomText>
            <CustomText bold={true} style={[styles.header, { flex: 1 }]}>
              Rate
            </CustomText>
            <CustomText bold={true} style={[styles.header, { flex: 1 }]}>
              Points
            </CustomText>
            <CustomText bold={true} style={[styles.header, { flex: 2 }]}>
              Amount
            </CustomText>
          </View>
          <View style={[styles.heading]}>
            <CustomText bold={true} style={[styles.header, { flex: 2 }]}>
              Base Rate & Price
            </CustomText>
            <CustomText bold={true} style={[styles.header, { flex: 1 }]}>
              4.1250%
            </CustomText>
            <CustomText
              bold={true}
              style={[styles.header, { flex: 1, color: "red" }]}
            >
              13.533%
            </CustomText>
            <CustomText
              bold={true}
              style={[styles.header, { flex: 2, color: "red" }]}
            >
              $43,305.60
            </CustomText>
          </View>
          <View style={[{ flexDirection: "column" }]}>
            {Addons.map((column, index) => {
              return (
                <View style={styles.data}>
                  <CustomText
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: column["Adjustments"].includes("(")
                        ? "green"
                        : [2, 3].includes(index)
                        ? "red"
                        : "#848484",
                      flex: 2,
                      //paddingLeft: 2,
                    }}
                  >
                    {column["Adjustments"] || ""}
                  </CustomText>
                  <CustomText
                    //  key={cIndex}
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: column["Rate"].includes("(")
                        ? "green"
                        : [2, 3].includes(index)
                        ? "red"
                        : "#848484",
                      flex: 1,
                      //paddingLeft: 2,
                    }}
                  >
                    {column["Rate"] || ""}
                  </CustomText>
                  <CustomText
                    //  key={cIndex}
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: column["Points"].includes("(")
                        ? "green"
                        : [2, 3].includes(index)
                        ? "red"
                        : "#848484",
                      flex: 1,
                      //  paddingLeft: 2,
                    }}
                  >
                    {column["Points"] || ""}
                  </CustomText>
                  <CustomText
                    //  key={cIndex}
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: column["Amount"].includes("(")
                        ? "green"
                        : [2, 3].includes(index)
                        ? "red"
                        : "#848484",
                      flex: 2,
                      // paddingLeft: 2,
                    }}
                  >
                    {column["Amount"] || ""}
                  </CustomText>
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            borderWidth: 2,
            borderTopWidth: 1,
            borderColor: "#428BCA",
          }}
        >
          <View style={[styles.heading,styles['SpaceAround']]}>
            <CustomText
              bold={true}
              style={[
                styles.header,
                {
                  flex: 2,
                },
              ]}
            >
              Base Rate & Price
            </CustomText>
            <CustomText
              bold={true}
              style={[
                styles.header,
                {
                  flex: 1,
                },
              ]}
            >
              Rate
            </CustomText>
            <CustomText
              bold={true}
              style={[
                styles.header,
                {
                  flex: 1,
                },
              ]}
            >
              Points
            </CustomText>
            <CustomText
              bold={true}
              style={[
                styles.header,
                {
                  flex: 2,
                },
              ]}
            >
              Amount
            </CustomText>
          </View>
          <View style={{ flexDirection: "column" }}>
            {GrantTotal.map((column, index) => {
              return (
                <View style={[styles.data,styles['SpaceAround']]}>
                  <CustomText
                    style={[
                      {
                        color: column["SelectedRate"].includes("(")
                          ? "green"
                          : [2, 3].includes(index)
                          ? "red"
                          : "#000",
                        backgroundColor: "F2F2F2",
                        flex: 2,
                      },
                      styles.txtFontSize,
                    ]}
                  >
                    {column["SelectedRate"] || ""}
                  </CustomText>
                  <CustomText
                    style={[
                      {
                        color: column["Rate"].includes("(")
                          ? "green"
                          : [2, 3].includes(index)
                          ? "red"
                          : "#000",
                        backgroundColor: "F2F2F2",
                        flex: 1,
                      },
                      styles.txtFontSize,
                    ]}
                  >
                    {column["Rate"] || ""}
                  </CustomText>
                  <CustomText
                    style={[
                      {
                        color: column["Points"].includes("(")
                          ? "green"
                          : [2, 3].includes(index)
                          ? "red"
                          : "#000",
                        backgroundColor: "F2F2F2",
                        flex: 1,
                      },
                      styles.txtFontSize,
                    ]}
                  >
                    {column["Points"] || ""}
                  </CustomText>
                  <CustomText
                    style={[
                      {
                        color: column["Amount"].includes("(")
                          ? "green"
                          : [2, 3].includes(index)
                          ? "red"
                          : "#000",
                        backgroundColor: "F2F2F2",
                        flex: 2,
                      },
                      styles.txtFontSize,
                    ]}
                  >
                    {column["Amount"] || ""}
                  </CustomText>
                </View>
              );
            })}
          </View>
          <View
            style={[styles["int_choose"], { flex: 5, flexDirection: "row" }]}
          >
            <View style={{ flex: 2 }}></View>
            <CustomText bold={true} style={[styles["header"], { flex: 4 }]}>
              Charge for Interest Rate chosen
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomText
              //  bold={true}
              style={[styles['SpaceAround'],{
                fontSize: 12,
                backgroundColor: "F2F2F2",
               
              }]}
            >
              Lock Expiration: Saturday, January 20 2024
            </CustomText>
            <Button
              title={
                <CustomText style={{ fontSize: 12, color: "white" }}>
                  Select
                </CustomText>
              }
              style={{
                paddingHorizontal: 10,
                paddingVertical: 3,
                marginRight: 4,
                marginVertical: 5,
              }}
              onPress={() => {
                //handleAddBorrower("Add");
              }}
            />
          </View>
        </View>
      </View>
  );
};

export default RateBandTable;
const styles = StyleSheet.create({
  wrapper: {
    minWidth: 450,
    maxWidth: 450,
    height: "auto",
    //backgroundColor: "#fff",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  header: {
    fontSize: 12,
    flexDirection: "row",
    padding: 2,
    borderColor: "#428BCA",
  },
  heading: {
    backgroundColor: '#e5e2e2',//"#f3f3f3",
    flexDirection: "row",
    //borderBottomWidth: 1,
   // borderColor: "#F2F2F2",
    fontSize: 12,
    alignItems: "center",
  },
  data: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBlockColor: "#D1D1D1",
    backgroundColor: "#F2F2F2",
    marginHorizontal: 2,
    marginVertical: 2,
    cursor: "pointer",
  },
  int_choose: {
    color: "red",
    fontSize: 12,
    borderBottomWidth: 2,
    borderColor: "#D1D1D1",
  },
  txtFontSize: { fontSize: 12, fontWeight: 600 },
  dropdown_Label: {
    paddingLeft: 2,
    paddingVertical: 10,
    textAlign: "left",
    fontSize: 13,
    backgroundColor: "#F2F2F2",
    color: "#848484",
  },
  txt_Label: {
    fontSize: 12,
    color: "#848484",
    flex: 1,
  },
  SpaceAround:{
    paddingLeft:5
  }
});
