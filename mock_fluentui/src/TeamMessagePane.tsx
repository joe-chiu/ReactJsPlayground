import { useState } from "react";

import { Compose } from "./Compose";

const customStyle = {
  chatContainer: {
    backgroundColor: "rgb(238 242 255)",
    maxWidth: "none",
  }
};

export const TeamMessagePane = () => {

  return (
    <div id="messagePane" className="grow flex flex-col">
      { /* the h-52 somehow works like min-height and is crucial to make the layout work */ }
      <div id="teamPostsArea" className="grow h-52">
      </div>
      <Compose />
    </div>
  );
};
