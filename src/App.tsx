import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="p-10 w-screen h-screen flex flex-col gap-20 ">
      <textarea name="" id="" className="w-full h-28 border-2 border-black rounded-md p-2" placeholder="Enter the text here"></textarea>
      <Keyboard />
    </div>
  );
}

export default App;
