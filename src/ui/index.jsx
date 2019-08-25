import React from 'react';
import ReactDom from 'react-dom';
import { Landing } from './Landing';

export const App = ({}) => {
  return <Landing/>;
};

ReactDom.render(<App/>,
    document.getElementById('root'));
