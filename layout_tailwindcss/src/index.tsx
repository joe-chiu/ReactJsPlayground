import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  return (
    <div className="flex flex-col gap-1 w-full h-full bg-red-300">
      <div className="h-10 flex items-center bg-green-400" >
        <div className="border-2 border-black">
          <div className="w-14 h-10 bg-blue-300">Logo</div>
        </div>
        <div className="flex-grow flex border-2 border-black place-content-center">
          <div className="h-10 w-16 border-2 border-black">Nav</div>
          <div className="h-10 w-72 border-2 border-black">Search</div>
        </div>
        <div className="flex border-2 border-black">
          <div className="h-10 border-2 border-black">Menu</div>
          <div className="h-10 border-2 border-black">Profile</div>
          <div className="h-10 border-2 border-black">WindowCtrl</div>
        </div>
      </div>
      <div className="flex-row flex h-full bg-blue-300">
        <div className="flex-col flex w-14 h-full border-2 border-black">
          <div className="flex-grow border-2 border-black">
            <div className="h-80 border-2 border-black">Tab</div>
            <div className="h-16 border-2 border-black">Menu</div>
          </div>
          <div className="h-16 border-2 border-black">
            <div>Store</div>
          </div>
        </div>
        <div className="flex-col flex w-72 h-full border-2 border-black">
          <div className="h-14 border-2 border-black">ChatList Header</div>
          <div className="flex-grow border-2 border-black">ChatList</div>
        </div>
        <div className="flex-grow flex-col flex h-full border-2 border-black">
          <div className="h-14 flex-row flex border-2 border-black">
              <div className="w-14 border-2 border-black">Icon</div>
              <div className="w-auto max-w-xs border-2 border-black">Chat title</div>
              <div className="flex-grow border-2 border-black">Chat tabs</div>
              <div className="w-32 border-2 border-black">CallCtrl</div>
          </div>
          <div className="flex-grow flex-row flex border-2 border-black">
            <div className="flex-grow flex-col flex border-2 border-black">
              <div className="flex-grow border-2 border-black">Content</div>
              <div className="h-20 flex-row flex border-2 border-black">
                <div className="flex-grow border-2 border-black">Compose</div>
                <div className="w-14 border-2 border-black">Send</div>
              </div>
            </div>
            <div className="w-60 flex-col flex border-2 border-black">
              <div className="ml-auto w-12 border-2 border-black">Close</div>
              <div className="h-20 border-2 border-black">Info Pane</div>
              <div className="h-20 border-2 border-black">Participants</div>
              <div className="flex-grow border-2 border-black">Options</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  ,
  document.getElementById("root")
);