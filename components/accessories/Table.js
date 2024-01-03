import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "./CustomText";
import GridDropDown from "./GridDropDown";
import MultiSelect from "./MultiSelect";
import { InputBox } from "./CommomComponents";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {
  cleanValue,
  formatCurrency,
  formatPercentage,
} from "./CommonFunctions";
import { useState } from "react";

const TableNew = (props) => {
  const { tableDetails, borrowerDetails, onchange, searchDetails } = props;
  const [Column, setColumn] = useState({
    RateSection: false,
    LoanPurpose: false,
  });

  return (
    <View style={styles.table}>
      {tableDetails?.map((row, index) => {
        let isEven = index % 2 === 0;
        return (
          <>
            {row["columnName"] === "Borrower" ? (
              <>
                {borrowerDetails?.map((Bor, iIndex) => {
                  return (
                    <>
                      {Bor?.map((Borr, jIndex) => {
                        return (
                          <View
                            key={jIndex}
                            style={[
                              styles.body,
                              Borr["columnName"] === "Email" && {
                                borderBottomWidth: 1,
                                borderColor: "black",
                              },
                            ]}
                          >
                            <CustomText
                              style={[
                                styles.bodyText,
                                {
                                  backgroundColor:
                                    jIndex % 2 === 0 ? "#deebf7" : "#fff",
                                },
                              ]}
                            >
                              {Borr["columnName"]}
                              {Borr["columnName"] === "First Name" && (
                                <FontAwesomeIcon
                                  style={styles.icon}
                                  size={12}
                                  color="red"
                                  name="close"
                                  onPress={() => {
                                    row["iconOnPress"]("Remove", iIndex);
                                  }}
                                />
                                //row['icon']
                              )}
                            </CustomText>
                            <View
                              style={[
                                styles.bodyText,
                                {
                                  backgroundColor:
                                    jIndex % 2 === 0 ? "#deebf7" : "#fff",
                                },
                                { paddingVertical: 0, paddingHorizontal: 4 },
                              ]}
                            >
                              <InputBox />
                            </View>
                          </View>
                        );
                      })}
                    </>
                  );
                })}
              </>
            ) : row["columnType"] === "dropDown" ? (
              <>
                <View
                  key={index}
                  style={[
                    styles.body,
                    {
                      backgroundColor: isEven ? "#deebf7" : "#fff",
                    },
                  ]}
                >
                  <View
                    style={[
                      {
                        ...styles.bodyText,
                        ...{
                          backgroundColor: isEven ? "#deebf7" : "#fff",
                          paddingVertical: 0,
                          paddingHorizontal: 6,
                        },
                      },
                    ]}
                  >
                    <GridDropDown
                      style={{ color: "#6c757d" }}
                      isValid={true}
                      label={""}
                      options={row["columnOption"]}
                      value={searchDetails[row["columnName"]] || ""}
                      onSelect={(text) => {
                        console.log("column ==>", text);
                        onchange({ name: "Desired Rate", value: text });
                        setColumn({
                          RateSection:
                            text["label"] === "Rate Formula" ? true : false,
                          LoanPurpose:
                            text["label"] === "Purchase" ? true : false,
                        });
                      }}
                    />
                  </View>
                  <View
                    style={[
                      {
                        ...styles.bodyText,
                        ...{ backgroundColor: isEven ? "#deebf7" : "#fff" },
                        ...{
                          paddingVertical: 0,
                          paddingHorizontal: ["dropDown"].includes(row["type"])
                            ? 4
                            : 8,
                        },
                      },
                    ]}
                  >
                    {!Column["RateSection"] ? (
                      <InputBox
                        onChangeText={(text) =>
                          onchange({ name: row["columnName"], value: text })
                        }
                        value={
                          row["dataType"] === "Currency"
                            ? formatCurrency(searchDetails[row["columnName"]])
                                .toString()
                                .replace("$", "")
                            : row["dataType"] === "Percentage"
                            ? formatPercentage(searchDetails[row["columnName"]])
                            : searchDetails[row["columnName"]] || ""
                        }
                        onFocus={() => {
                          let val = cleanValue(
                              searchDetails[row["columnName"]] || ""
                            ),
                            text =
                              val == 0
                                ? ""
                                : val?.toString()?.replaceAll("$", "");
                          onchange({ name: row["columnName"], value: text });
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </View>
                </View>
              </>
            ) : (
              <View
                key={index}
                style={[
                  row["type"] === "header" ? styles.header : styles.body,

                  {
                    display:
                      (tableDetails[1]["borrowers"]?.length &&
                        row["columnName"] === "FICO Score") ||
                      (row["hint"] === "RateFormula" &&
                        !Column["RateSection"]) ||
                      (row["hint"] === "Loan Purpose" && Column["LoanPurpose"])
                        ? "none"
                        : "flex",
                  },
                ]}
              >
                <CustomText
                  style={[
                    row["type"] === "header"
                      ? styles.headerText
                      : {
                          ...styles.bodyText,
                          ...{ backgroundColor: isEven ? "#deebf7" : "#fff" },
                        },
                  ]}
                >
                  {row["columnName"]}
                </CustomText>

                <View
                  style={[
                    row["type"] === "header"
                      ? styles.headerText
                      : {
                          ...styles.bodyText,
                          ...{ backgroundColor: isEven ? "#deebf7" : "#fff" },
                          ...{
                            paddingVertical: 0,
                            paddingHorizontal: ["dropDown"].includes(
                              row["type"]
                            )
                              ? 4
                              : 8,
                          },
                        },
                  ]}
                >
                  {row["type"] === "input" ? (
                    <InputBox
                      onChangeText={(text) =>
                        onchange({ name: row["columnName"], value: text })
                      }
                      value={
                        row["dataType"] === "Currency"
                          ? formatCurrency(searchDetails[row["columnName"]])
                          : row["dataType"] === "Percentage"
                          ? formatPercentage(searchDetails[row["columnName"]])
                          : searchDetails[row["columnName"]] || ""
                      }
                      // onFocus={() => {
                      //   let val = cleanValue(
                      //       searchDetails[row["columnName"]] || ""
                      //     ),
                      //     text =
                      //       val == 0
                      //         ? ""
                      //         : val?.toString()?.replaceAll("$", "");
                      //   onchange({ name: row["columnName"], value: text });
                      // }}
                    />
                  ) : row["type"] === "dropDown" ? (
                    <GridDropDown
                      isValid={true}
                      label={""}
                      options={row["Option"]}
                      value={searchDetails[row["columnName"]] || ""}
                      onSelect={(text) =>
                        onchange({ name: row["columnName"], value: text })
                      }
                    />
                  ) : row["type"] === "multiSelect" ? (
                    <MultiSelect
                      label={""}
                      name={row["columnName"]}
                      options={row["Option"]}
                      isValid={false}
                      value={searchDetails[row["columnName"]] || ""}
                      onSelect={(item_) => {
                        onchange({ name: row["columnName"], value: item_ });
                      }}
                    />
                  ) : (
                    row["type"] === "header" && row["columnValue"]
                  )}
                </View>
              </View>
            )}
          </>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  table: {
    //width: 700,
    borderWidth: 1,
    borderColor: "#5e9cd3",
    borderStyle: "dotted",
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
    width: "50%",
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
    width: "50%",
    borderRightWidth: 1,
    borderRightColor: "#5e9cd3",
    borderRightStyle: "dotted",
    color: "#6c757d",
    fontSize: 12,
    height: 28,
  },
  icon: {
    right: 20,
    position: "absolute",
  },
});

export default TableNew;
