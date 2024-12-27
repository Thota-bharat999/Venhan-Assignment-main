import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import FlowCanvas from './components/FlowCanvas';

const App = () => {
  return (
    <Provider store={store}>
      <FlowCanvas />
    </Provider>
  );
};

export default App;
