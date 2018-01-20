import styled from 'styled-components';

export const Main = styled.main`
    position: relative;
   
    height: calc(100vh - 64px);
    padding: 36px 0;
    overflow-y: auto;
    margin: auto;

    & .input-textarea,
    & pre {
        display: inline-block;
        vertical-align: top;
    }
    & pre {
        font-size: 14px;
        width: 70%;
    }
    & .input-textarea {
        width: 30%;
    }

    .action-buttons {
        position: fixed;
        bottom: 36px;
        right: 36px;
    }
`;

export const ButtonGroup = styled.div`
    position: relative;
`;

