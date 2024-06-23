import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="p-5 w-screen h-screen flex flex-col items-center justify-center gap-16">
      <textarea name="" id="" className="w-full min-h-[150px] border-2 border-black rounded-md p-2 font-bold text-lg" placeholder="Enter the text here"></textarea>
      <Keyboard />
    </div>
  );
}

export default App;