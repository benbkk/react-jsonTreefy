import React from 'react';
import styled from 'styled-components';
import { palette } from 'variables';

const Header = styled.header`
    font-size: 24px;
    color: ${palette.white};
    line-height: 64px;
    font-weight: 300;
    padding-left: 36px;
    background: rgb(0, 188, 212);
    margin-bottom: 18px;
`;

const AppHeader = () => (
    <Header>
        {'react jsonView'}
    </Header>    
);

export default AppHeader;
