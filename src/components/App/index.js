import React from 'react';
import AppHeader from 'static/AppHeader';
import AppFooter from 'static/AppFooter';
import Main from 'components/Main';

const App = () => (
    <div className={'app-wrapper'}>
        <AppHeader />
        <Main />
    </div>    
)

export default App;
