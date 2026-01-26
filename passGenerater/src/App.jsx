import { useCallback, useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(5);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");

  const passordRef = useRef(null);

  const passwordGenerater = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (charAllow) str += "!@#$%^&*()_+";
    if (numAllow) str += "0123456789";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPass(pass);
  }, [length, charAllow, numAllow, setPass]);
  const copyPasswordToClipboard = useCallback(() => {
    passordRef.current?.select();
    passordRef.current?.setSelectionRange(0, 99999); // For mobile devices
    window.navigator.clipboard.writeText(pass);
  }, [pass]);
  useEffect(
    () => {
      passwordGenerater();
    },
    [length, charAllow, numAllow, passwordGenerater] // dependencies
  );

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-2xl px-6 py-6 my-10 bg-gray-900 text-orange-400 border border-gray-700">
      <h1 className="text-white text-2xl font-semibold text-center mb-6">
        🔐 Password Generator
      </h1>

      {/* Input + Copy button */}
      <div className="flex items-center shadow-inner rounded-xl overflow-hidden mb-6 bg-gray-800 border border-gray-700">
        <input
          type="text"
          value={pass}
          placeholder="Your password"
          readOnly
          ref={passordRef}
          className="w-full px-4 py-2 bg-transparent text-white outline-none"
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 transition-all"
        >
          Copy
        </button>
      </div>

      {/* Options */}
      <div className="space-y-4 text-sm">
        {/* Length slider */}
        <div className="flex items-center justify-between">
          <label className="text-white font-medium">Length: {length}</label>
          <input
            type="range"
            min={5}
            max={100}
            value={length}
            className="w-2/3 accent-orange-500 cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        {/* Checkboxes */}
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              className="accent-orange-500 w-4 h-4"
              onChange={() => setNumAllow((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-gray-300">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              className="accent-orange-500 w-4 h-4"
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label htmlFor="characterInput" className="text-gray-300">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
