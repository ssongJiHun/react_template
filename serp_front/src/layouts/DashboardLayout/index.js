import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import TopBar from './TopBar';
import FooterBar from './FooterBar';


let Root = styled.div({
  backgroundColor: 'primary',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
})
let Wrapper = styled.div({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
})
let ContentContainer = styled.div({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
})
let Content = styled.div({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
})


const DashboardLayout = ({ children }) => {
  return (
    <Root>
      <TopBar />
      <Wrapper>
        <ContentContainer>
          <Content>
            {children}
            <FooterBar />
          </Content>
        </ContentContainer>
      </Wrapper>
    </Root>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};

export default DashboardLayout;
