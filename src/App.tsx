import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="p-5 w-screen h-screen">
      <div className="h-full w-full flex flex-col items-center justify-between">
        <textarea
          name=""
          id=""
          className="w-full h-1/3 border-2 border-black rounded-md p-2 font-bold text-lg mb-12"
          placeholder="Enter the text here"
        ></textarea>
        <div className="flex-grow"></div>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
