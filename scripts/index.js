import constants from './constants';
import content from './content';

import React from 'react';
import ReactDOM from 'react-dom';

import Dmlf from './experiences/Dmlf';

require('../styles/main.less');

let app = document.querySelector('.app');

ReactDOM.render(<Dmlf constants={constants} content={content} />, app);
