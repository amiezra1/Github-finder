import React, { Fragment } from 'react';
import spinner from './spinner.gif';
export const Spinner = () => (
  <Fragment>
    <img src={spinner} alt='Loading...' style={loadingStyle} />
  </Fragment>
);

const loadingStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block',
};
