import * as React from 'react';
import { Config as _Config } from './IConfig';

import { app } from './app';

//React.createElement
//React.isValidElement

const state: string = app.state;
const config: _Config = app.config;

console.log(state, config);
