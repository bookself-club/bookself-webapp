import React from 'react';
import { hot } from 'react-hot-loader';
import Theme from 'docz-theme-default';
import db from './db.json';

import Wrapper from 'src/utils/DoczWrapper';

const Root = ({ imports }) => (
  <Theme
    db={db}
    imports={imports}
    hashRouter={false}
    websocketUrl="ws://127.0.0.1:60505"
    wrapper={Wrapper}
  />
);

export default hot(module)(Root);
