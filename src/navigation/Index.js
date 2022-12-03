import React from 'react';
import {ContextProvider} from '../context/ContextProvider';
import Routes from './Routes';

const Providers = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
};
export default Providers;
