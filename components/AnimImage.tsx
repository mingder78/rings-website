"use client";
import { useEffect } from "react";

type AppProps = {
  name: string;
};

const App = ({ name }: AppProps) => {
  return (
    <>
      <div className="reveal">
        <img src="https://picsum.photos/400/200" />
      </div>
      <div className="reveal">
        <img src="https://picsum.photos/401/200" />
      </div>
      <div className="reveal">
        <img src="https://picsum.photos/402/200" />
      </div>
      <div className="reveal">
        <img src="https://picsum.photos/403/200" />
      </div>
      <div className="reveal">
        <img src="https://picsum.photos/404/200" />
      </div>
      <div className="reveal">
        <img src="https://picsum.photos/405/200" />
      </div>
      <div className="reveal">
        <img src="https://picsum.photos/406/200" />
      </div>
      <style>
        {`

        `}
      </style>
    </>
  );
};
export default App;
