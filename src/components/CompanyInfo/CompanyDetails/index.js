import Paper from "../../Paper";

import InfoTitle from "./InfoTitle";
import InfoContent from "./InfoContent";
import InfoMemo from "./InfoMemo";

import { useQueryClient } from 'react-query';

const CompanyDetails = (props) => {
  const {companyIdx} = props;

  const queryClient = useQueryClient();
  const query = queryClient.getQueryData(['companys'])
  
  console.log(companyIdx)
  // const getCurrentCompany =(idx)=>{
  //   return query.find(e => e.idx === idx)
  // }  lodash 으로 정렬

  return (

    companyIdx === -1 ? (
      <Paper sx={{
        ml: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 400,
        fontSize: "15px",
        color: "#919294",
      }}>
        업체를 선택해주세요.
      </Paper>
    ) : (
      <Paper sx={{ ml: 10 }}>
        {/* <InfoTitle  data={query.find(e => e.idx === companyIdx)}/> */}
        {/* <InfoContent data={res} />
        <InfoMemo data={{idx : res.idx, memos : res.company_memos}} /> */}
      </Paper>

    )

  );
};

export default CompanyDetails;