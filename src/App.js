import React from 'react';
import Store from './store';
import { Provider } from 'react-redux';
import './App.css';
import Quiz_App from './components/Quiz_App';


function App() {
  return (
    <Provider store = {Store}>
      <Quiz_App />
    </Provider>
  );
}

export default App;