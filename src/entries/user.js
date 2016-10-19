import ReactDOM from 'react-dom';
import React from 'react';
import { hashHistory } from 'react-router';
import Routes from 'routes/user';

ReactDOM.render(<Routes history={hashHistory} />, document.getElementById('root'));
