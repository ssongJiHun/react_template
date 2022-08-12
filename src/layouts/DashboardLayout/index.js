import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import NavBar from './NavBar';
import FooterBar from './FooterBar';

let Root = styled.div({
  backgroundColor: '#F8F8FA',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
})
let Wrapper = styled.div({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 40,
  paddingLeft: 250

})
let ContentContainer = styled.div({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
})
let Content = styled.div({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
})


const DashboardLayout = ({ children }) => {
  return (
    <Root>
      <NavBar/>
      <Wrapper>
        <ContentContainer>
          <Content>
            {children}

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
