import React, {createContext} from 'react';
import {useColorScheme} from 'react-native';
export const Context = createContext();
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export const ContextProvider = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Context.Provider
      value={{
        isDarkMode,
      }}>
      {children}
    </Context.Provider>
  );
};
