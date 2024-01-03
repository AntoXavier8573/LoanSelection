import { View } from "react-native";
import CustomText from "./accessories/CustomText";
import LoanProductTable from "./accessories/LoanProductTable";
import { useEffect, useState } from "react";

const LoanProducts = ({ search }) => {
  const LoanProduct = [
    {
      Id: 1,
      LineId: "1",
      Name: "Conventional 30 Year Fixed - Freddie Mac (6010-1)",
      APR: "7.3746%",
      InterestRate: "7.3750%",
      LockPeriodDesc: "30 Days",
      Payment: "$2,941.00",
      RateChosen:
        '<span style="color:rgb(0, 128, 0)">(0.807%) | ($3,211.58) Credit </span>',
      FinalPoint: "(0.807)",
      FinalAmount: "($3,211.58)",
      BasePoint: "5.667",
      LockExpDate: "01/15/2024",
      LockPeriodId: "4",
      LnProgId: "6010",
      IntRateId: "35",
      AgencyReady: "0",
      Run: "15954867",
      LPLoan: "1",
      Accept: "1",
      Reason: "",
    },
    { Id: -1, LineId: 1, show: false },
    {
      Id: 1,
      LineId: "2",
      Name: "Conventional 30 Year Fixed - Freddie Mac (6010-1)",
      APR: "7.3746%",
      InterestRate: "7.3750%",
      LockPeriodDesc: "30 Days",
      Payment: "$2,941.00",
      RateChosen:
        '<span style="color:rgb(0, 128, 0)">(0.807%) | ($3,211.58) Credit </span>',
      FinalPoint: "(0.807)",
      FinalAmount: "($3,211.58)",
      BasePoint: "5.667",
      LockExpDate: "01/15/2024",
      LockPeriodId: "4",
      LnProgId: "6010",
      IntRateId: "35",
      AgencyReady: "0",
      Run: "15954867",
      LPLoan: "1",
      Accept: "1",
      Reason: "",
    },
    { Id: -1, LineId: 2, show: false },
  ];
  const [LoanProducts, setLoanProducts] = useState();
  const [ProductOpen, setProductOpen] = useState({});
  const [ActiveRate, setActiveRate] = useState({ Rate: "3.8750%" });
  console.log("searching ==>", search);
  useEffect(() => {
    setLoanProducts(LoanProduct);
  }, []);
  const handleLoanProductClick = (obj) => {
    setProductOpen({ ...ProductOpen, [obj]: !ProductOpen[obj] });
    console.log("Loan production row click ==>>>", obj);
  };
  const handleRantBandRowClick = (obj) => {
    setActiveRate({ Rate: obj["InterestRate"] });
    console.log("Rate Band click =>>>", obj);
  };
  return (
    <>
      {search && (
      //   <CustomText>Search button is clicked</CustomText>
      // ) : (
        // <CustomText>Loan Products</CustomText>
        <LoanProductTable
          LoanProducts={LoanProducts}
          VisibleRateBand={ProductOpen}
          ProductClick={handleLoanProductClick}
          RateBandClick={handleRantBandRowClick}
          ActiveRate={ActiveRate}
        />
      )}
    </>
  );
};
export default LoanProducts;
