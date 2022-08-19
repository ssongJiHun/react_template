import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

const Footer = styled.div({
  width: "100%",
  margin: "auto",
  padding: "0 0 1.5rem 0"
})
const Footer_descript = styled.div({
  textAlign: "center",
  fontWeight: 200,
})
const Footer_ment = styled.div({
  padding: 4,
  fontSize: 12
})
const Footer_image = styled.div({
  textAlign: "center",
  marginTop: 20,
  marginBottom: 20
})



const DashBoardFooterLayout = () => {

  return (
    <Footer>
      <Footer_image>
        {/* <img src={TobelongLogo} /> */}
      </Footer_image>
      <Footer_descript>
        <Footer_ment>제공 서비스 : SOTHECODE_ERP ㅣ 회사명 : SOTHECODe</Footer_ment>
        <Footer_ment>Disclaimer: All content is provided for fun and entertainment purposes only</Footer_ment>
        <Footer_ment>ⓒ 2021. 소더코드 .All Rights Reserved.</Footer_ment>
      </Footer_descript>
    </Footer>
  );
};

DashBoardFooterLayout.propTypes = {
  children: PropTypes.node
};

export default DashBoardFooterLayout;
