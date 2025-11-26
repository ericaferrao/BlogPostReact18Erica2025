import './App.css';

import { useContext } from 'react';

import MessageContext from './context/MessageContext';

function App() {
  const message = "hellow world";
  return (
    <>
      <MessageContext.Provider value={message}>
        <ComponentA />

      </MessageContext.Provider>
    </>
  );
}

function ComponentA() {
  return (
    <> <ComponentB /></>)
};

function ComponentB() {
  const message = useContext(MessageContext)
  return (
    <> <p>Message:{message}</p> </>)
};

export default App;
