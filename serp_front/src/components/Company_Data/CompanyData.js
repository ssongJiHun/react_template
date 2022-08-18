import CompanyDataTop from "./CompanyDataTop";
import MemoData from "./MemoData";
import OutputData from "./OutputData";
import Paper from "../Paper";

const CompanyData = (props) => {
  return (
    <Paper height="auto" minWidth="440px" sx={{ ml: "10px" }}>
      <CompanyDataTop data={props.topData} />
      <OutputData data={props.outputData} />
      <MemoData data={props.memoData} />
    </Paper>
  );
};

export default CompanyData;
