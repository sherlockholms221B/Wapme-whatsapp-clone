import * as React from 'react';

//

const AppContext = React.createContext();

//
export const AppProvider = ({ children }) => {
  const [contextTest, setcontextTest] = React.useState(
    'context test passed !!!'
  );
  return (
    <AppContext.Provider
      value={{
        contextTest,
        setcontextTest,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//
export const UseGlobalContext = () => {
  return React.useContext(AppContext);
};
