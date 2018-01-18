import React from 'react';
import styled from 'styled-components';
import { palette } from 'variables';

const Header = styled.header`
    font-size: 24px;
    color: ${palette.white};
    line-height: 64px;
    font-weight: 300;
    padding-left: 36px;
    background: ${palette.linkBlue};
    margin-bottom: 0;

    h1 {
        font-size: 36px;
        margin: 0;
    }
`;

const AppHeader = () => (
    <Header className={'app-header'}>
        <h1>{'react jsonView'}</h1>
    </Header>    
);

export default AppHeader;
