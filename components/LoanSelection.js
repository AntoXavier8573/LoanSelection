import { useEffect, useState } from "react";
// import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import SearchCriteria from "./SearchCriteria";
import LoanProducts from "./LoanProducts";
import Footer from "./Footer";

const LoanSelection = (props) => {
  const [IsSearching, setSearching] = useState(false);
  const [LoanData, setLoanData] = useState({});
  useEffect(() => {
    console.log("Page Load");
  }, [IsSearching]);
  return (
    <>
      <Header />
      <SearchCriteria handleSearch={setSearching} />
      <LoanProducts search={IsSearching} />
      <Footer />
      {/* <StatusBar style="auto" /> */}
    </>
  );
};

export default LoanSelection;
