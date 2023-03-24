import * as React from "react";

import "../styles.css";

import JSMpeg from "jsmpeg-player";

class Player extends React.Component {
  componentDidMount() {
    // const script = document.createElement("script");
    // script.type = 'type= "text/javascript" ';
    // script.src =
    //   "https://cdn.jsdelivr.net/npm/jsmpeg-player@2/build/JSMpeg.min.js";
    // // script.src = "jsmpeg.min.js";
    // document.body.appendChild(script);

    // const script2 = document.createElement("script");
    // script.type = 'type= "text/javascript" ';
    // script2.text = ` var videoUrl = 'test.mpg';
    // new JSMpeg.VideoElement('#videoWrapper', videoUrl);`;
    // document.body.appendChild(script2);

    // const script3 = document.createElement("script");
    // script3.text = ` import JSMpeg from "jsmpeg-player";`;
    // document.head.appendChild(script3);
    // const script = document.createElement("script");
    // script.type = 'type= "text/javascript" ';
    // script.src = "jsmpeg.min.js";
    // document.body.appendChild(script);
    // const script2 = document.createElement("script");
    // script.type = 'type= "text/javascript" ';
    // script.text =
    //   "var videoUrl = 'test.mpg'; var player = new JSMpeg.Player(videoUrl);";
    // document.body.appendChild(script2);
    let videoUrl = "ws://localhost:9999/?token=123";
    let videoWrapper = document.getElementById("videoWrapper");
    new JSMpeg.VideoElement(videoWrapper, videoUrl);
  }

  render() {
    return (
      <div>
        video
        <div id="videoWrapper" style={{ width: "500px", height: "500px" }} />
        {/* <div className="jsmpeg" data-url="test.mpg" /> */}
      </div>
    );
  }
}

export default Player;
