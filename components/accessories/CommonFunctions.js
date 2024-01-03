import { web, android, ios } from "./Platform";

const handleAPI = async ({ name, params, method, requestOptions = null }) => {
  let url = "http://localhost/LoanSelectionAPIs/api/";
  params = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  // if (!web) {
  //   url = API_URL_MOBILE;
  // } else if (window.location.host === "http://localhost:54997/api/") {
  //   url = API_URL_MOBILE.replace(
  //     "https://www.directcorp.com",
  //     "http://www.solutioncenter.biz"
  //   );
  // }
  try {
    return fetch(
      `${url}${name}?${params}`,
      requestOptions
        ? requestOptions
        : {
            method: method || "GET",
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
    )
      .then(async function (response) {
        let res = await response.json();
        // if (
        //   name === "GetBorrowerRedirectURLs" &&
        //   (params.includes("484156") || params.includes("484309"))
        // ) {
        //   res = res.split("~");
        //   res[0] =
        //     "../../../Esignature/Presentation/Webforms/ESignShoppingCart_bootstrap_new.aspx?" +
        //     params +
        //     "&sType=3";
        //   res = res.join("res");
        // }
        return res;
      })
      .catch(function (err) {
        console.log(`Error from handleAPI ====>  ${err}`);
      });
  } catch (error) {}
};
function findArraysWithKey(data, targetKey) {
  const result = [];
  function search(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === targetKey && Array.isArray(obj[key])) {
          result.push(obj);
        }

        if (typeof obj[key] === "object" && obj[key] !== null) {
          search(obj[key]);
        }
      }
    }
  }
  data.forEach(search);
  return result;
}
function formatCurrency(value) {
  let num = parseFloat(
      (value || "").toString().replace("$", "").replace(",", "")
    ).toString(),
    numParts = num.split("."),
    dollars = numParts[0],
    cents = numParts[1] || "",
    sign = num == (num = Math.abs(num));
  dollars = dollars.replace(/\$|\,/g, "");
  if (isNaN(dollars)) dollars = "0";
  dollars = dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let val = "$" + ((sign ? "" : "-") + dollars + (cents ? "." + cents : ".00"));
  val = val.replaceAll("--", "-");
  if (val == "$-0.00") val = "$0.00";
  return val;
}
function formatPercentage(value) {
  // Convert the input value to a floating-point number
  const floatValue = parseFloat(value);
  // Check if the conversion was successful
  if (!isNaN(floatValue)) {
    // Format the number as a percentage with four decimal places
    const formattedPercentage = floatValue.toFixed(4) + "%";
    return formattedPercentage;
  } else {
    // Handle the case where the input is not a valid number
    return "Invalid Input";
  }
}
const cleanValue = (sVal) => {
  try {
    sVal = sVal.replaceAll("$", "").replaceAll(",", "").replaceAll("%", "");
    if (sVal == "") sVal = 0;
  } catch (e) {}
  return sVal;
};

export {
  handleAPI,
  findArraysWithKey,
  formatCurrency,
  formatPercentage,
  cleanValue,
};
