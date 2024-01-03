import { View, StyleSheet } from "react-native";
import {
  Separator,
  AccordionItem,
  Button,
} from "../components/accessories/CommomComponents";
import Icon from "react-native-vector-icons/FontAwesome";

import CustomText from "../components/accessories/CustomText";
import Table from "../components/accessories/Table";
import { useEffect, useRef, useState } from "react";
import Dropdown from "./accessories/DropDown";
import { handleAPI, findArraysWithKey } from "./accessories/CommonFunctions";
import DropDownButton from "./accessories/DropDownButton";
import { web, android, ios } from "./accessories/Platform";

const SearchCriteria = ({ handleSearch }) => {
  const [borrower, setBorrower] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState({ bottom: false, top: false });
  const [topMenuPosition, setTopMenuPosition] = useState({
    top: 0,
    left: 0,
    opacity: 0,
  });
  const [TypeOption, setTypeOption] = useState({});
  const [TableColumns, setTableColumns] = useState({});
  const [searchDetails, setsearchDetails] = useState({
    "Monthly Income ($)": 0,
    "Self Employed": 0,
    "Liabilities ($)": 0,
    "First Time Home Buyer": 0,
    "Term (Months)": 360,
    "Lien Position": 2,
    "Lock Period Days": 4,
    "Existing Government Loan": 1,
    "Other Options": 0,
    "Compensation Type": 0,
    'Purchase Price':0,
    'Appraised': 0,
    "Loan Amount": 0,
    "Loan Amount 2nd": 0,
    "Term Months 2nd": 0,
    'LTV': 0,
    'CLTV': 0,
    "Desired Rate": 5.99,
    "Rate Charge% | (Rebate%)": 0,
  });
  const topMenuUseref = useRef();
  useEffect(() => {
    handlePageLoad();
  }, []);
  //=================================== Function declarations Begins=======================================
  const handleAddBorrower = (Type, Id) => {
    let brw = [
      [
        { columnName: "First Name", columnValue: " " },
        { columnName: "Last Name", columnValue: " " },
        { columnName: "FICO Score", columnValue: " " },
        { columnName: "Cell Phone", columnValue: " " },
        { columnName: "Email", columnValue: " " },
      ],
    ];
    if (Type === "Add")
      setBorrower((prevBorrower) => [...prevBorrower, ...brw]);
    else
      setBorrower((prevBorrower) =>
        prevBorrower.filter((item, index) => index !== Id)
      );
  };
  const handleOnChange = (obj) => {
    const { name, value } = obj;
    setsearchDetails({
      ...searchDetails,
      [name]:
        typeof value === "string"
          ? value?.toString()?.replaceAll("$", "")
          : value["value"]?.toString()?.replaceAll("$", ""),
    });
    console.log("On change value ==>", searchDetails);
  };
  const handlePageLoad = () => {
    let obj = {
      LoanId: 306860,
      EmpNum: 23673,
      WhatProcess: 1,
    };
    handleAPI({
      name: "GetNeededTypeOptions",
      params: {},
    }).then((response) => {
      debugger;
      response = JSON.parse(response)["Table"][0];
      response = JSON.parse(response["OutputJson"])["DataOut"];
      findArraysWithKey(response, "BorInfo");
      console.log("Result ====>", response);
    });
    let data = {
      Table: [
        { TypeOption: "0", TypeDesc: "Occupancy" },
        { TypeOption: "1", TypeDesc: "Primary Residence" },
        { TypeOption: "2", TypeDesc: "Secondary Residence" },
        { TypeOption: "3", TypeDesc: "Investment" },
      ],
      Table1: [
        { TypeOption: "0", TypeDesc: "Property Type" },
        { TypeOption: "1", TypeDesc: "Single Family Residence - Detached" },
        { TypeOption: "10", TypeDesc: "Second Home One Unit" },
        { TypeOption: "11", TypeDesc: "Second Home Two Unit" },
        { TypeOption: "12", TypeDesc: "Manufactured" },
        { TypeOption: "13", TypeDesc: "Mobile" },
        { TypeOption: "14", TypeDesc: "Modular" },
        { TypeOption: "15", TypeDesc: "1 Unit Owner Occupied" },
        { TypeOption: "16", TypeDesc: "Condo - High Rise (Approved Project)" },
        { TypeOption: "2", TypeDesc: "Single Family Residence - Attached" },
        { TypeOption: "26", TypeDesc: "3 Unit Owner Occupied" },
        { TypeOption: "27", TypeDesc: "4 Unit Owner Occupied" },
        { TypeOption: "28", TypeDesc: "1 Unit Investment" },
        { TypeOption: "29", TypeDesc: "2 Unit Investment" },
        { TypeOption: "3", TypeDesc: "2 Unit Owner Occupied" },
        { TypeOption: "30", TypeDesc: "3 Unit Investment" },
        { TypeOption: "31", TypeDesc: "4 Unit Investment" },
        {
          TypeOption: "4",
          TypeDesc: "PUD – Detached (Planned Unit Development)",
        },
        {
          TypeOption: "5",
          TypeDesc: "PUD – Attached (Planned Unit Development)",
        },
        { TypeOption: "6", TypeDesc: "Condo - Low Rise to 4 stories" },
        { TypeOption: "7", TypeDesc: "Condo - High Rise 5+ stories" },
        { TypeOption: "8", TypeDesc: "Condo - Detached" },
        { TypeOption: "9", TypeDesc: "Condo - Low Rise (Approved Project)" },
      ],
      Table2: [
        { TypeOption: "0", TypeDesc: "Loan Purpose" },
        { TypeOption: "1", TypeDesc: "Purchase" },
        { TypeOption: "2", TypeDesc: "Cash Out Refinance" },
        { TypeOption: "3", TypeDesc: "Rate and Term Refinance" },
        { TypeOption: "4", TypeDesc: "Construction" },
        { TypeOption: "5", TypeDesc: "Construction to Permanent" },
        { TypeOption: "6", TypeDesc: "Other" },
      ],
      Table3: [
        { TypeOption: "0", TypeDesc: "State" },
        { TypeOption: "AK", TypeDesc: "ALASKA" },
        { TypeOption: "AL", TypeDesc: "ALABAMA" },
        { TypeOption: "AR", TypeDesc: "ARKANSAS" },
        { TypeOption: "AZ", TypeDesc: "ARIZONA" },
        { TypeOption: "CA", TypeDesc: "CALIFORNIA" },
        { TypeOption: "CO", TypeDesc: "COLORADO" },
        { TypeOption: "CT", TypeDesc: "CONNECTICUT" },
        { TypeOption: "DC", TypeDesc: "DISTRICT OF COLUMBIA" },
        { TypeOption: "DE", TypeDesc: "DELAWARE" },
        { TypeOption: "FL", TypeDesc: "FLORIDA" },
        { TypeOption: "GA", TypeDesc: "GEORGIA" },
        { TypeOption: "HI", TypeDesc: "HAWAII" },
        { TypeOption: "IA", TypeDesc: "IOWA" },
        { TypeOption: "ID", TypeDesc: "IDAHO" },
        { TypeOption: "IL", TypeDesc: "ILLINOIS" },
        { TypeOption: "IN", TypeDesc: "INDIANA" },
        { TypeOption: "KS", TypeDesc: "KANSAS" },
        { TypeOption: "KY", TypeDesc: "KENTUCKY" },
        { TypeOption: "LA", TypeDesc: "LOUISIANA" },
        { TypeOption: "MA", TypeDesc: "MASSACHUSETTS" },
        { TypeOption: "MD", TypeDesc: "MARYLAND" },
        { TypeOption: "ME", TypeDesc: "MAINE" },
        { TypeOption: "MI", TypeDesc: "MICHIGAN" },
        { TypeOption: "MN", TypeDesc: "MINNESOTA" },
        { TypeOption: "MO", TypeDesc: "MISSOURI" },
        { TypeOption: "MS", TypeDesc: "MISSISSIPPI" },
        { TypeOption: "MT", TypeDesc: "MONTANA" },
        { TypeOption: "NC", TypeDesc: "NORTH CAROLINA" },
        { TypeOption: "ND", TypeDesc: "NORTH DAKOTA" },
        { TypeOption: "NE", TypeDesc: "NEBRASKA" },
        { TypeOption: "NH", TypeDesc: "NEW HAMPSHIRE" },
        { TypeOption: "NJ", TypeDesc: "NEW JERSEY" },
        { TypeOption: "NM", TypeDesc: "NEW MEXICO" },
        { TypeOption: "NV", TypeDesc: "NEVADA" },
        { TypeOption: "NY", TypeDesc: "NEW YORK" },
        { TypeOption: "OH", TypeDesc: "OHIO" },
        { TypeOption: "OK", TypeDesc: "OKLAHOMA" },
        { TypeOption: "OR", TypeDesc: "OREGON" },
        { TypeOption: "PA", TypeDesc: "PENNSYLVANIA" },
        { TypeOption: "PR", TypeDesc: "PUERTO RICO" },
        { TypeOption: "RI", TypeDesc: "RHODE ISLAND" },
        { TypeOption: "SC", TypeDesc: "SOUTH CAROLINA" },
        { TypeOption: "SD", TypeDesc: "SOUTH DAKOTA" },
        { TypeOption: "TN", TypeDesc: "TENNESSEE" },
        { TypeOption: "TX", TypeDesc: "TEXAS" },
        { TypeOption: "UT", TypeDesc: "UTAH" },
        { TypeOption: "VA", TypeDesc: "VIRGINIA" },
        { TypeOption: "VT", TypeDesc: "VERMONT" },
        { TypeOption: "WA", TypeDesc: "WASHINGTON" },
        { TypeOption: "WI", TypeDesc: "WISCONSIN" },
        { TypeOption: "WV", TypeDesc: "WEST VIRGINIA" },
        { TypeOption: "WY", TypeDesc: "WYOMING" },
      ],
      Table4: [
        { TypeOption: "0", TypeDesc: "No" },
        { TypeOption: "1", TypeDesc: "Yes" },
      ],
      Table5: [
        { TypeOption: "-1", TypeDesc: "" },
        { TypeOption: "0", TypeDesc: "No" },
        { TypeOption: "1", TypeDesc: "Yes" },
      ],
      Table6: [
        {
          TypeXml:
            '<TypeXml><row TypeId="26" TypeOption="5" TypeDesc="Conventional" TypeBitwise="2"/><row TypeId="26" TypeOption="9" TypeDesc="test" TypeBitwise="16"/><row TypeId="26" TypeOption="16" TypeDesc="FHA" TypeBitwise="128"/><row TypeId="26" TypeOption="2" TypeDesc="VA" TypeBitwise="2048"/><row TypeId="26" TypeOption="28" TypeDesc="HARP" TypeBitwise="16384"/><row TypeId="26" TypeOption="29" TypeDesc="Utah Housing" TypeBitwise="32768"/><row TypeId="26" TypeOption="30" TypeDesc="Chenoa" TypeBitwise="65536"/><row TypeId="26" TypeOption="31" TypeDesc="Non-QM" TypeBitwise="131072"/><row TypeId="38" TypeOption="1" TypeDesc="Fixed Rate" TypeBitwise="1"/><row TypeId="38" TypeOption="2" TypeDesc="GPM – Graduated Payment Mortgage" TypeBitwise="2"/><row TypeId="38" TypeOption="3" TypeDesc="ARM – Adjustable Rate Mortgage" TypeBitwise="4"/><row TypeId="38" TypeOption="5" TypeDesc="Fixed - Interest Only" TypeBitwise="16"/><row TypeId="38" TypeOption="4" TypeDesc="Other" TypeBitwise="8"/><row TypeId="38" TypeOption="6" TypeDesc="Buydown" TypeBitwise="32"/><row TypeId="38" TypeOption="7" TypeDesc="ARM - Interest Only" TypeBitwise="64"/><row TypeId="38" TypeOption="8" TypeDesc="Balloon" TypeBitwise="128"/><row TypeId="38" TypeOption="9" TypeDesc="HELOC" TypeBitwise="256"/><row TypeId="42" TypeOption="1" TypeDesc="Treasury 1-Year" TypeBitwise="1"/><row TypeId="42" TypeOption="13" TypeDesc="Treasury 1-Month" TypeBitwise="4096"/><row TypeId="42" TypeOption="2" TypeDesc="Treasury 3-Year" TypeBitwise="2"/><row TypeId="42" TypeOption="3" TypeDesc="Treasury 6-Month" TypeBitwise="4"/><row TypeId="42" TypeOption="4" TypeDesc="11th Dist COFI" TypeBitwise="8"/><row TypeId="42" TypeOption="5" TypeDesc="Median COFI" TypeBitwise="16"/><row TypeId="42" TypeOption="7" TypeDesc="Prime 1-Month" TypeBitwise="64"/><row TypeId="42" TypeOption="8" TypeDesc="Other" TypeBitwise="128"/><row TypeId="42" TypeOption="11" TypeDesc="LIBOR 1-Month" TypeBitwise="256"/><row TypeId="42" TypeOption="10" TypeDesc="LIBOR 6-Month" TypeBitwise="512"/><row TypeId="42" TypeOption="9" TypeDesc="LIBOR 1-Year" TypeBitwise="1024"/><row TypeId="42" TypeOption="12" TypeDesc="MTA 1-Month" TypeBitwise="2048"/><row TypeId="42" TypeOption="14" TypeDesc="New Index" TypeBitwise="8192"/><row TypeId="42" TypeOption="15" TypeDesc="SOFR 30 Day Ave" TypeBitwise="16384"/><row TypeId="95" TypeOption="0" TypeDesc="VA Military Active Status"/><row TypeId="95" TypeOption="1" TypeDesc="Regular Military" TypeBitwise="1"/><row TypeId="95" TypeOption="2" TypeDesc="Reserves or National Guard" TypeBitwise="2"/><row TypeId="145" TypeOption="4" TypeDesc="None" TypeBitwise="8"/><row TypeId="145" TypeOption="1" TypeDesc="Borrower Paid" TypeBitwise="1"/><row TypeId="145" TypeOption="2" TypeDesc="Both Borrower and Lender Paid" TypeBitwise="2"/><row TypeId="145" TypeOption="3" TypeDesc="Lender Paid" TypeBitwise="4"/><row TypeId="186" TypeOption="60" TypeDesc="60" TypeBitwise="1"/><row TypeId="186" TypeOption="84" TypeDesc="84" TypeBitwise="2"/><row TypeId="186" TypeOption="120" TypeDesc="120" TypeBitwise="4"/><row TypeId="186" TypeOption="180" TypeDesc="180" TypeBitwise="8"/><row TypeId="186" TypeOption="240" TypeDesc="240" TypeBitwise="16"/><row TypeId="186" TypeOption="300" TypeDesc="300" TypeBitwise="32"/><row TypeId="186" TypeOption="360" TypeDesc="360" TypeBitwise="64"/><row TypeId="186" TypeOption="480" TypeDesc="480" TypeBitwise="128"/><row TypeId="187" TypeOption="1" TypeDesc="1" TypeBitwise="1"/><row TypeId="187" TypeOption="3" TypeDesc="3" TypeBitwise="2"/><row TypeId="187" TypeOption="6" TypeDesc="6" TypeBitwise="4"/><row TypeId="187" TypeOption="12" TypeDesc="12" TypeBitwise="8"/><row TypeId="187" TypeOption="24" TypeDesc="24" TypeBitwise="16"/><row TypeId="187" TypeOption="36" TypeDesc="36" TypeBitwise="32"/><row TypeId="187" TypeOption="60" TypeDesc="60" TypeBitwise="64"/><row TypeId="187" TypeOption="84" TypeDesc="84" TypeBitwise="128"/><row TypeId="187" TypeOption="120" TypeDesc="120" TypeBitwise="256"/><row TypeId="187" TypeOption="180" TypeDesc="180" TypeBitwise="512"/></TypeXml>',
        },
      ],
      Table7: [
        { Rate: 1.75 },
        { Rate: 1.875 },
        { Rate: 2.0 },
        { Rate: 2.125 },
        { Rate: 2.25 },
        { Rate: 2.375 },
        { Rate: 2.5 },
        { Rate: 2.625 },
        { Rate: 2.75 },
        { Rate: 2.875 },
        { Rate: 3.0 },
        { Rate: 3.125 },
        { Rate: 3.25 },
        { Rate: 3.375 },
        { Rate: 3.5 },
        { Rate: 3.625 },
        { Rate: 3.75 },
        { Rate: 3.875 },
        { Rate: 3.99 },
        { Rate: 4.0 },
        { Rate: 4.125 },
        { Rate: 4.25 },
        { Rate: 4.375 },
        { Rate: 4.5 },
        { Rate: 4.625 },
        { Rate: 4.75 },
        { Rate: 4.875 },
        { Rate: 4.99 },
        { Rate: 5.0 },
        { Rate: 5.125 },
        { Rate: 5.25 },
        { Rate: 5.375 },
        { Rate: 5.5 },
        { Rate: 5.625 },
        { Rate: 5.75 },
        { Rate: 5.875 },
        { Rate: 5.99 },
        { Rate: 6.0 },
        { Rate: 6.125 },
        { Rate: 6.25 },
        { Rate: 6.375 },
        { Rate: 6.5 },
        { Rate: 6.625 },
        { Rate: 6.75 },
        { Rate: 6.875 },
        { Rate: 6.99 },
        { Rate: 7.0 },
        { Rate: 7.125 },
        { Rate: 7.225 },
        { Rate: 7.25 },
        { Rate: 7.375 },
        { Rate: 7.5 },
        { Rate: 7.625 },
        { Rate: 7.75 },
        { Rate: 7.875 },
        { Rate: 7.99 },
        { Rate: 8.0 },
        { Rate: 8.125 },
        { Rate: 8.25 },
        { Rate: 8.375 },
        { Rate: 8.5 },
        { Rate: 8.625 },
        { Rate: 8.75 },
        { Rate: 8.875 },
        { Rate: 8.99 },
        { Rate: 9.0 },
        { Rate: 9.125 },
        { Rate: 9.25 },
        { Rate: 9.375 },
        { Rate: 9.5 },
        { Rate: 9.625 },
        { Rate: 9.75 },
        { Rate: 9.875 },
        { Rate: 10.0 },
        { Rate: 10.125 },
        { Rate: 10.25 },
        { Rate: 10.375 },
        { Rate: 10.5 },
        { Rate: 10.625 },
        { Rate: 10.75 },
        { Rate: 10.875 },
        { Rate: 11.0 },
        { Rate: 11.125 },
        { Rate: 11.25 },
        { Rate: 11.375 },
        { Rate: 11.5 },
      ],
      Table8: [
        { TypeOption: "0", TypeDesc: "Select" },
        { TypeOption: "2", TypeDesc: "12" },
        { TypeOption: "4", TypeDesc: "30" },
        { TypeOption: "5", TypeDesc: "45" },
        { TypeOption: "6", TypeDesc: "60" },
        { TypeOption: "7", TypeDesc: "75" },
        { TypeOption: "8", TypeDesc: "90" },
        { TypeOption: "9", TypeDesc: "120" },
        { TypeOption: "10", TypeDesc: "150" },
        { TypeOption: "11", TypeDesc: "180" },
      ],
      Table9: [
        {
          TypeId: 26,
          TypeOption: "5",
          TypeDesc: "Conventional",
          TypeBitwise: 2,
          SortOrder: 1,
        },
        {
          TypeId: 26,
          TypeOption: "9",
          TypeDesc: "test",
          TypeBitwise: 16,
          SortOrder: 8,
        },
        {
          TypeId: 26,
          TypeOption: "16",
          TypeDesc: "FHA",
          TypeBitwise: 128,
          SortOrder: 10,
        },
        {
          TypeId: 26,
          TypeOption: "2",
          TypeDesc: "VA",
          TypeBitwise: 2048,
          SortOrder: 11,
        },
      ],
      Table10: [
        {
          TypeId: 186,
          TypeOption: "60",
          TypeDesc: "60",
          TypeBitwise: 1,
          SortOrder: 1,
        },
        {
          TypeId: 186,
          TypeOption: "84",
          TypeDesc: "84",
          TypeBitwise: 2,
          SortOrder: 2,
        },
        {
          TypeId: 186,
          TypeOption: "120",
          TypeDesc: "120",
          TypeBitwise: 4,
          SortOrder: 3,
        },
        {
          TypeId: 186,
          TypeOption: "180",
          TypeDesc: "180",
          TypeBitwise: 8,
          SortOrder: 4,
        },
        {
          TypeId: 186,
          TypeOption: "240",
          TypeDesc: "240",
          TypeBitwise: 16,
          SortOrder: 5,
        },
        {
          TypeId: 186,
          TypeOption: "300",
          TypeDesc: "300",
          TypeBitwise: 32,
          SortOrder: 6,
        },
        {
          TypeId: 186,
          TypeOption: "360",
          TypeDesc: "360",
          TypeBitwise: 64,
          SortOrder: 7,
        },
        {
          TypeId: 186,
          TypeOption: "480",
          TypeDesc: "480",
          TypeBitwise: 128,
          SortOrder: 8,
        },
      ],
      Table11: [
        {
          TypeId: 38,
          TypeOption: "1",
          TypeDesc: "Fixed Rate",
          TypeBitwise: 1,
          SortOrder: 1,
        },
        {
          TypeId: 38,
          TypeOption: "2",
          TypeDesc: "GPM – Graduated Payment Mortgage",
          TypeBitwise: 2,
          SortOrder: 2,
        },
        {
          TypeId: 38,
          TypeOption: "3",
          TypeDesc: "ARM – Adjustable Rate Mortgage",
          TypeBitwise: 4,
          SortOrder: 3,
        },
        {
          TypeId: 38,
          TypeOption: "5",
          TypeDesc: "Fixed - Interest Only",
          TypeBitwise: 16,
          SortOrder: 4,
        },
        {
          TypeId: 38,
          TypeOption: "4",
          TypeDesc: "Other",
          TypeBitwise: 8,
          SortOrder: 5,
        },
        {
          TypeId: 38,
          TypeOption: "6",
          TypeDesc: "Buydown",
          TypeBitwise: 32,
          SortOrder: 6,
        },
        {
          TypeId: 38,
          TypeOption: "7",
          TypeDesc: "ARM - Interest Only",
          TypeBitwise: 64,
          SortOrder: 7,
        },
        {
          TypeId: 38,
          TypeOption: "8",
          TypeDesc: "Balloon",
          TypeBitwise: 128,
          SortOrder: 8,
        },
        {
          TypeId: 38,
          TypeOption: "9",
          TypeDesc: "HELOC",
          TypeBitwise: 256,
          SortOrder: 9,
        },
      ],
      Table12: [
        { LenderID: 75969, LenderName: "Alliance Credit Union" },
        { LenderID: 106005, LenderName: "Axia Financial, LLC" },
        { LenderID: 100249, LenderName: "Axia Home Loans" },
        { LenderID: 358, LenderName: "Bank One" },
        { LenderID: 16671, LenderName: "BB and T" },
        { LenderID: 11361, LenderName: "Chase Corr Home Equity" },
        { LenderID: 3275, LenderName: "Chase Correspondent Lending" },
        { LenderID: 84, LenderName: "Chase Wholesale Mortgage" },
        { LenderID: 89666, LenderName: "CMC Funding" },
        { LenderID: 91836, LenderName: "Construction Capital Source" },
        { LenderID: 78, LenderName: "Direct Mortgage, Corp." },
        { LenderID: 70669, LenderName: "Fannie Mae" },
        { LenderID: 89653, LenderName: "Fannie Mae - Released" },
        { LenderID: 83430, LenderName: "First National Bank of Trenton" },
        { LenderID: 90193, LenderName: "Flagstar Bank, FSB" },
        { LenderID: 55, LenderName: "Fleet Mortgage Corporation" },
        { LenderID: 10899, LenderName: "Franklin American Mortgage Company" },
        { LenderID: 17462, LenderName: "Freddie Mac Corp." },
        { LenderID: 4, LenderName: "GMAC Mortgage Corporation" },
        { LenderID: 89726, LenderName: "Golden State Finance Authority" },
        { LenderID: 363, LenderName: "Lending Solutions, Inc." },
        { LenderID: 464, LenderName: "Lending Solutions, Inc." },
        {
          LenderID: 8009,
          LenderName: "Morgan Stanley Mortgage Capital Holdings LLC",
        },
        { LenderID: 90436, LenderName: "New Penn Financial, LLC" },
        { LenderID: 90319, LenderName: "New Penn Financial, LLC" },
        { LenderID: 76732, LenderName: "Northpointe Bank" },
        { LenderID: 106002, LenderName: "Orion Lending" },
        { LenderID: 91171, LenderName: "Quicken Loans Mortgage Services" },
        {
          LenderID: 89670,
          LenderName: "Stearns Correspondent Lending Division",
        },
        { LenderID: 66, LenderName: "Sunbelt National Mortgage" },
        { LenderID: 10802, LenderName: "SunTrust Mortgage, Inc." },
        { LenderID: 89380, LenderName: "The Money Source Inc." },
        { LenderID: 11324, LenderName: "U.S. Bank Home Mortgage" },
        {
          LenderID: 90343,
          LenderName: "U.S. Bank National Association - Wholesale",
        },
        { LenderID: 11441, LenderName: "Utah Housing Corporation" },
        { LenderID: 91172, LenderName: "Washington Federal" },
        { LenderID: 73, LenderName: "Washington Mutual Bank, FA" },
        { LenderID: 1164, LenderName: "Wells Fargo Bank, NA" },
        { LenderID: 69, LenderName: "WMC Weyerhouser" },
      ],
      Table13: [
        {
          TypeId: 42,
          TypeOption: "1",
          TypeDesc: "Treasury 1-Year",
          TypeBitwise: 1,
          SortOrder: 1,
        },
        {
          TypeId: 42,
          TypeOption: "13",
          TypeDesc: "Treasury 1-Month",
          TypeBitwise: 4096,
          SortOrder: 1,
        },
        {
          TypeId: 42,
          TypeOption: "2",
          TypeDesc: "Treasury 3-Year",
          TypeBitwise: 2,
          SortOrder: 2,
        },
        {
          TypeId: 42,
          TypeOption: "3",
          TypeDesc: "Treasury 6-Month",
          TypeBitwise: 4,
          SortOrder: 3,
        },
        {
          TypeId: 42,
          TypeOption: "4",
          TypeDesc: "11th Dist COFI",
          TypeBitwise: 8,
          SortOrder: 4,
        },
        {
          TypeId: 42,
          TypeOption: "5",
          TypeDesc: "Median COFI",
          TypeBitwise: 16,
          SortOrder: 5,
        },
        {
          TypeId: 42,
          TypeOption: "7",
          TypeDesc: "Prime 1-Month",
          TypeBitwise: 64,
          SortOrder: 7,
        },
        {
          TypeId: 42,
          TypeOption: "8",
          TypeDesc: "Other",
          TypeBitwise: 128,
          SortOrder: 8,
        },
        {
          TypeId: 42,
          TypeOption: "11",
          TypeDesc: "LIBOR 1-Month",
          TypeBitwise: 256,
          SortOrder: 9,
        },
        {
          TypeId: 42,
          TypeOption: "10",
          TypeDesc: "LIBOR 6-Month",
          TypeBitwise: 512,
          SortOrder: 10,
        },
        {
          TypeId: 42,
          TypeOption: "9",
          TypeDesc: "LIBOR 1-Year",
          TypeBitwise: 1024,
          SortOrder: 11,
        },
        {
          TypeId: 42,
          TypeOption: "12",
          TypeDesc: "MTA 1-Month",
          TypeBitwise: 2048,
          SortOrder: 12,
        },
        {
          TypeId: 42,
          TypeOption: "14",
          TypeDesc: "New Index",
          TypeBitwise: 8192,
          SortOrder: 13,
        },
        {
          TypeId: 42,
          TypeOption: "15",
          TypeDesc: "SOFR 30 Day Ave",
          TypeBitwise: 16384,
          SortOrder: 15,
        },
      ],
    };
    let TypeOption = {
      Occupany: data["Table"],
      PropertyType: data["Table1"],
      LoanPurpose: data["Table2"],
      State: data["Table3"],
      YesorNo: data["Table4"],
      LockPeriod: data["Table8"],
      AgencyType: data["Table9"],
      Term: data["Table10"],
      AmortizationType: data["Table11"],
    };
    const BorrowerProperty = [
      {
        columnName: "Borrower & Property",
        columnValue: (
          <View
            style={{
              position: "absolute",
              top: 4,
              right: 10,
            }}
          >
            <Button
              title={
                <CustomText style={{ fontSize: 12, color: "white" }}>
                  Add Borrower
                </CustomText>
              }
              style={{
                paddingHorizontal: 10,
                paddingVertical: 3,
              }}
              onPress={() => {
                handleAddBorrower("Add");
              }}
            />
          </View>
        ),
        type: "header",
      },
      {
        columnName: "Borrower",
        borrowers: borrower,
        iconOnPress: handleAddBorrower,
      },
      {
        columnName: "FICO Score",
        columnValue: " ",
        type: "input",
        dataType: "int",
      },
      {
        columnName: "Occupancy",
        columnValue: " ",
        Option: TypeOption["Occupany"],
        type: "dropDown",
      },
      {
        columnName: "Property Type",
        columnValue: " ",

        Option: TypeOption["PropertyType"],
        type: "dropDown",
      },
      {
        columnName: (
          <View style={{ flexDirection: "row", flex: 3 }}>
            <View> Property Address</View>
            <View style={{ flex: 1 }}>
              <Button
                title="TBD=No"
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 4,
                  alignSelf: "flex-end",
                  fontSize: 10,
                  left: 30,
                }}
              />
            </View>
          </View>
        ),
        columnValue: " ",
        type: "input",
      },
      { columnName: "Zip", columnValue: " ", type: "input" },
      { columnName: "City", columnValue: " ", type: "input" },
      {
        columnName: "State",
        columnValue: " ",

        Option: TypeOption["State"],
        type: "dropDown",
      },
      {
        columnName: "Monthly Income ($)",
        columnValue: " ",
        dataType: "Currency",
        type: "input",
      },
      {
        columnName: "Self Employed",
        columnValue: " ",
        Option: TypeOption["YesorNo"],
        type: "dropDown",
      },
      {
        columnName: "Liabilities ($)",
        columnValue: " ",
        dataType: "Currency",
        type: "input",
      },
      {
        columnName: "First Time Home Buyer",
        columnValue: " ",
        Option: TypeOption["YesorNo"],
        type: "dropDown",
      },
    ];
    const TermsOptions = [
      {
        columnName: "Terms and Options",
        columnValue: "",
        type: "header",
      },
      {
        columnName: "Agency (Loan) Type",
        Option: TypeOption["AgencyType"],
        columnValue: " ",
        type: "multiSelect",
      },
      {
        columnName: "Amortization Type",
        columnValue: " ",
        Option: TypeOption["AmortizationType"],
        type: "multiSelect",
      },
      {
        columnName: "Term (Months)",
        columnValue: " ",
        Option: TypeOption["Term"],
        type: "multiSelect",
      },
      {
        columnName: "Lien Position",
        columnValue: " ",
        Option: LienOptions,
        type: "dropDown",
      },
      {
        columnName: "Single Premium Mortgage",
        columnValue: " ",
        Option: SinglePremium,
        type: "dropDown",
      },
      {
        columnName: "Lender Fees In Rate",
        columnValue: " ",
        Option: FeesOptions,
        type: "dropDown",
      },
      {
        columnName: "Lock Period Days",
        columnValue: " ",
        Option: TypeOption["LockPeriod"],
        type: "dropDown",
      },
      {
        columnName: "Existing Government Loan",
        columnValue: " ",
        Option: ExistGovOptions,
        type: "dropDown",
      },
      {
        columnName: "Other Options",
        columnValue: " ",
        Option: OtherOptions,
        type: "multiSelect",
      },
      {
        columnName: "Compensation Type",
        columnValue: " ",
        Option: CompensationType,
        type: "dropDown",
      },
    ];
    const LoanInformation = [
      {
        columnName: "Loan Information",
        columnValue: "",
        type: "header",
      },
      {
        columnName: "Loan Purpose",
        columnValue: " ",
        Option: TypeOption["LoanPurpose"],
        type: "dropDown",
      },
      {
        columnName: "Purchase Price",
        columnValue: " ",
        dataType: "Currency",
        type: "input",
        hint:'Loan Purpose'
      },
      {
        columnName: "Appraised",
        columnValue: " ",
        dataType: "Currency",
        type: "input",
      },
      {
        columnName: "Loan Amount",
        columnValue: " ",
        dataType: "Currency",
        type: "input",
      },
      {
        columnName: "Loan Amount 2nd",
        columnValue: " ",
        dataType: "Currency",
        type: "input",
      },
      {
        columnName: "Term Months 2nd",
        columnValue: " ",
        Option: TermMonths,
        type: "dropDown",
      },
      {
        columnName: "LTV",
        columnValue: " ",
        dataType: "Percentage",
        type: "input",
      },
      {
        columnName: "CLTV",
        columnValue: " ",
        dataType: "Percentage",
        type: "input",
      },
      {
        columnName: "Loan Program",
        columnValue: " ",
        type: "input",
        dataType: "int",
      },
      {
        columnName: "Desired Rate",
        columnType: "dropDown",
        columnOption: DesiredRate,
        columnValue: " ",
        dataType: "Percentage",
        type: "input",
      },
      {
        columnName: "Rate Charge% | (Rebate%)",
        columnValue: " ",
        dataType: "Percentage",
        type: "input",
        hint: "RateFormula",
      },
      {
        columnName: "Nearest Rate Charge",
        columnValue: " ",
        Option: NearestRateCharge,
        type: "dropDown",
        hint: "RateFormula",
      },
      {
        columnName: "Lenders to Search",
        columnValue: " ",
        Option: LendersOptions,
        type: "multiSelect",
      },
    ];
    console.log("Type options ===>", TypeOption);
    setTypeOption(TypeOption);
    setTableColumns({
      BorrowerProperty,
      TermsOptions,
      LoanInformation,
    });
  };

  const handleMenuOpen = () => {
    topMenuUseref.current.measure((_fx, _fy, _w, h, _px, py) => {
      setTopMenuPosition({
        top: py + (web ? 40 : 50),
        left: _px + (web ? 0 : -195),
        opacity: 1,
      });
    });
  };
  const handleMenu = () => {
    setMenuOpen({ ...isMenuOpen, top: !isMenuOpen["top"] });
  };

  //=================================== Function declarations Ends=======================================
  let options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  let LienOptions = [
    { TypeDesc: "Lien Position", TypeOption: "1" },
    { TypeDesc: "1st Lien", TypeOption: "2" },
    { TypeDesc: "2st Lien", TypeOption: "3" },
  ];
  let SinglePremium = [
    { TypeDesc: "None", TypeOption: "4" },
    { TypeDesc: "Borrower Paid", TypeOption: "1" },
    { TypeDesc: "Lender Paid", TypeOption: "3" },
  ];

  let CompensationType = [
    { TypeDesc: "Select", TypeOption: "0" },
    { TypeDesc: "Lender Paid", TypeOption: "1" },
    { TypeDesc: "Borrower Paid", TypeOption: "2" },
  ];
  let FeesOptions = [
    { TypeDesc: "Select", TypeOption: "0" },
    { TypeDesc: "Fees In", TypeOption: "1" },
    { TypeDesc: "Fees Out", TypeOption: "2" },
  ];
  let ExistGovOptions = [
    { TypeDesc: "No", TypeOption: "1" },
    { TypeDesc: "FHA", TypeOption: "16" },
    { TypeDesc: "VA", TypeOption: "2" },
    { TypeDesc: "Rural Housing", TypeOption: "9" },
    { TypeDesc: "Fannie Mea", TypeOption: "29" },
    { TypeDesc: "Freddie Mac", TypeOption: "30" },
  ];
  let OtherOptions = [
    { TypeDesc: "None", TypeOption: "0" },
    { TypeDesc: "Request Escrow Waiver", TypeOption: "1" },
    {
      TypeDesc: "Property listed on MLS in the last 6 months",
      TypeOption: "2",
    },
    { TypeDesc: "Energy Efficient Mortgage", TypeOption: "3" },
    { TypeDesc: "Down Payment Gift", TypeOption: "4" },
    { TypeDesc: "Law Enforcement (or similar) Grant", TypeOption: "6" },
    { TypeDesc: "No Prepayment Penalty", TypeOption: "7" },
  ];
  let LendersOptions = [
    { TypeDesc: "Direct Mortgage, Corp.", TypeOption: "1" },
    { TypeDesc: "Axia Financial, LLC.", TypeOption: "2" },
    { TypeDesc: "Orion Lending", TypeOption: "3" },
  ];
  let TermMonths = [
    { TypeDesc: "Select", TypeOption: "0" },
    { TypeDesc: "120", TypeOption: "120" },
    { TypeDesc: "360", TypeOption: "360" },
  ];
  let DesiredRate = [
    { TypeDesc: "Desired Rate", TypeOption: "1" },
    { TypeDesc: "Rate Formula", TypeOption: "2" },
  ];
  let NearestRateCharge = [
    { TypeDesc: "Equal or Above", TypeOption: "1" },
    { TypeDesc: "Equal or Below", TypeOption: "2" },
  ];
  let VAMilitary = [
    { TypeDesc: "None", TypeOption: "8" },
    { TypeDesc: "Regular Military", TypeOption: "1" },
    { TypeDesc: "Reserves or National Guard", TypeOption: "2" },
  ];

  const menuOption = [
    {
      Name: "FNM 3.2 File",
      onPress: () => {
        // handleLogOut_();
        handleMenu();
      },
      icon: "file-upload",
      from: "Material",
      size: 18,
    },
    {
      Name: "Use Last Run",
      onPress: () => {
        handleMenu();
      },
      icon: "keyboard-backspace",
      from: "Material",
      size: 18,
    },
    {
      Name: "Start With a Fresh Run",
      onPress: () => {
        handleMenu();
      },
      icon: "file",
      from: "FontAwesome",
      size: 16,
    },
    {
      Name: "Search for a Loan or Loan Prospect",
      onPress: () => {
        handleMenu();
      },
      icon: "search",
      from: "FontAwesome",
      size: 16,
    },
    {
      Name: "Get Title Pricing",
      onPress: () => {
        handleMenu();
      },
      icon: "attach-money",
      from: "MaterialIcons",
      size: 20,
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
      icon: "settings",
      from: "MaterialIcons",
      size: 18,
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
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 20,
        width: "100%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", top: 10 }}>
        <View ref={topMenuUseref}>
          <Button
            title="Menu"
            style={[
              styles["btn"],
              {
                borderRadius: 0,
                marginLeft: 0,
                paddingVertical: 8,
                paddingHorizontal: 8,
              },
            ]}
            onPress={() => {
              handleMenu();
              handleMenuOpen();
            }}
          />

          <DropDownButton
            listOption={menuOption}
            Open={isMenuOpen["top"]}
            MenuPosition={topMenuPosition}
            handleOpen={handleMenu}
          />
        </View>
        <View style={styles["RateText"]}>
          <CustomText style={{ color: "#fff" }}>
            Select a Rate Lock Scenario
          </CustomText>
        </View>
      </View>
      <View style={{ top: 30, flexDirection: "row", alignItems: "baseline" }}>
        <View style={{ width: 300 }}>
          <Dropdown
            isValid={true}
            label={"Loan Officer"}
            options={options}
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
        <CustomText style={{ left: 40 }}>Change Company</CustomText>
      </View>
      <Separator />
      <AccordionItem
        title={
          <>
            <CustomText style={{ fontSize: 20, margin: 10 }} ob>
              Loan Product Search Criteria
            </CustomText>
            <View>
              <Button
                title="Create Loan"
                style={{
                  fontSize: 15,
                  paddingHorizontal: 5,
                  paddingVertical: 6,
                  alignSelf: "flex-end",
                  fontSize: 12,
                }}
              />
            </View>
          </>
        }
        isExpand={true}
        isAccordion={false}
      >
        <View style={styles["bodyContainer"]}>
          <View style={styles["tableContainer"]}>
            <Table
              tableDetails={TableColumns["BorrowerProperty"]}
              borrowerDetails={borrower}
              onchange={handleOnChange}
              searchDetails={searchDetails}
            />
          </View>
          <View style={styles["tableContainer"]}>
            <Table
              tableDetails={TableColumns["TermsOptions"]}
              onchange={handleOnChange}
              searchDetails={searchDetails}
            />
          </View>
          <View style={[styles["tableContainer"]]}>
            <Table
              tableDetails={TableColumns["LoanInformation"]}
              onchange={handleOnChange}
              searchDetails={searchDetails}
            />
            <View style={{ alignSelf: "center", top: 18 }}>
              <Button
                title={
                  <CustomText
                    bold={false}
                    style={{ fontSize: 14, color: "#fff" }}
                  >
                    <Icon name="search" size={18} color="white" />
                    {"  "}Search for Loan Products
                  </CustomText>
                }
                style={styles["btn"]}
                onPress={() => {
                  handleSearch(true);
                }}
              />
            </View>
          </View>
        </View>
        <Separator />
      </AccordionItem>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    gap: 15,
    display: "grid",
    "grid-template-columns": "repeat(auto-fit,minmax(400px,1fr))",
  },
  tableContainer: {
    //     Width:'33%',
    //minWidth:400,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: "flex-end",
    fontSize: 12,
    justifyContent: "center",
  },
  RateText: {
    backgroundColor: "#5e9cd3",
    height: 24,
    left: 10,
    fontSize: 12,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
});
export default SearchCriteria;
