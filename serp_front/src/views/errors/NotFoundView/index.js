import React from "react";
import CompanyModal from "src/components/CompanyModal";
import MemoData from "src/components/Company_Data/MemoData";
import CompanyOrderTable from "src/components/CompanyOrderTable";
import { useState } from "react";
import TotalProductTable from "src/components/TotalProductTable";

const NotFoundView = () => {
  const rows = {
    company: "23132",
    representative: "",
    registerNum: "",
    BusinessType: "",
    DirectorPosition: "",
    DirectorName: "",
    phoneNum: "",
    email: "",
    address: "",
  };

  const [Data, setData] = useState(rows);


  return (
    <div width="100%">
      {/* <CompanyModal data={Data} /> */}
      <CompanyOrderTable/>
      {/* <MemoData /> */}
    </div>
  );
};

export default NotFoundView;
