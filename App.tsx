import React from 'react';
import { Provider } from "react-redux";
import store from "./src/store";
import RootSwitchNavigation from "./src/rootSwitchNavigation";


const App = () => {

  return (
    <Provider store={store}>
      <RootSwitchNavigation />
    </Provider>
  );
};

export default App;
