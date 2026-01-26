import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="fixed flex flex-wrap
                        justify-center bottom-12 inset-x-0 px-2"
      >
        <div className="flex flex-wrap justify-center gap-4 bg-white px-3 py-2  rounded-full shadow-lg">
          <button
            onClick={() => setBgColor("red")}
            className="outline-none px-4 py-1   rounded-full text-black shadow-lg"
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            Blue
          </button>
          <button
            onClick={() => setBgColor("green")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            Yellow
          </button>
          <button
            onClick={() => setBgColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            Purple
          </button>
          <button
            onClick={() => setBgColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            Pink
          </button>
          <button
            onClick={() => setBgColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
