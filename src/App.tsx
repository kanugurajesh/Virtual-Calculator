import Keyboard from "./components/Keyboard";
import { useState } from "react";

function App() {

  const [input, setInput] = useState<string>("");

  return (
    <div className="p-5 w-screen h-screen overflow-hidden">
      <div className="h-full w-full flex flex-col items-center justify-between">
        <textarea
          name=""
          id=""
          value={input}
          className="w-full h-1/2 border-2 border-black rounded-md p-4 font-bold text-xl mb-12"
          placeholder="Enter your calculation here..."
        ></textarea>
        <div className="flex-grow"></div>
        <Keyboard input={input} setInput={setInput} />
      </div>
    </div>
  );
}

export default App;
