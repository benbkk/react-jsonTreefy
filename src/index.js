import React from 'react';
import {render} from 'react-dom';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

import globalcss from 'css';

render(<App />, document.getElementById('root'));
registerServiceWorker();
