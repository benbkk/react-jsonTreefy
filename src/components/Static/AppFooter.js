import React from 'react';
import styled from 'styled-components';
import { palette } from 'variables';

const Footer = styled.footer`
    font-size: 15px;
    color: ${palette.black};
    line-height: 1.5;
    font-weight: 300;
    padding-left: 36px;
    margin-bottom: 0;
`;

const AppFooter = () => (
    <Footer>
        {'Made by Ben, WorkandPlay for OmiseGo prerequisite test'}
    </Footer>    
);

export default AppFooter;