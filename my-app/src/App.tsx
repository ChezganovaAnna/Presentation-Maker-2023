import React from 'react';
import './App.css';
import MyEditor from "./components/Editor/editor";
import { Editor } from "./types/types";

type AppProps = {
  editor: Editor,
}
function App(props:AppProps) {
  return (
    <div >
      <MyEditor presentation={props.editor} />
    </div>
  );
}

export default App;
