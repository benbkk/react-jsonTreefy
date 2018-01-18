import styled from 'styled-components';

export const MainStage = styled.main`
    position: relative;
    width: 100vw;
    padding: 36px;
    position: relative;
    table-layout: fixed;
    height: calc(100vh - 64px);
    overflow-y: auto;

    & .input-textarea,
    & pre {
        display: inline-block;
        vertical-align: top;
    }
    & pre {
        font-size: 16px;
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

