import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyEditor from "./components/Editor/editor";
import { Editor } from "./types/types";

type AppProps = {
  myProp: Editor,
}
function App({myProp}:AppProps) {
  return (
    <div >
      <MyEditor presentation={myProp} />
    </div>
  );
}

export default App;
