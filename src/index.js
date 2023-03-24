import React from "react";
import ReactDOM from "react-dom";

import JsmpegPlayer from "./player/player";

import "./styles.css";

function App() {
  return (
    <JsmpegPlayer
      wrapperClassName="video-wrapper"
      videoUrl="ws://localhost:9999/?token=123"
      options={true}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
