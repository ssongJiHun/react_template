import Paper from "../../Paper";

import InfoTitle from "./InfoTitle";
import InfoContent from "./InfoContent";
import InfoMemo from "./InfoMemo";

import { useQueryClient } from 'react-query';

const CompanyDetails = (props) => {
  const {detailsInfo} = props;

  return (

    detailsInfo === null ? (
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
        <InfoTitle  data={detailsInfo}/>
        <InfoContent data={detailsInfo} />
        <InfoMemo data={{idx : detailsInfo.idx, memos : detailsInfo.company_memos}} />
      </Paper>

    )

  );
};

export default CompanyDetails;