import React from 'react';
import AppWrapper from './StyledApp';

import MainStage from 'components/MainStage';

const App = () => (
    <AppWrapper className={'app-wrapper'}>
        <h1>reactjsonView</h1>
        <MainStage />
    </AppWrapper>
);

export default App;
