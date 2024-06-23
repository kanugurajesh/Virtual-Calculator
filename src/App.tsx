// import Keyboard from "./components/Keyboard";

// function App() {
//   return (
//     <div className="p-5 w-screen h-screen flex flex-col items-center justify-between gap-16 overflow-hidden">
//       <textarea name="" id="" className="w-full min-h-[150px] border-2 border-black rounded-md p-2 font-bold text-lg" placeholder="Enter the text here"></textarea>
//       <Keyboard />
//     </div>
//   );
// }

// export default App;

import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="p-5 w-screen h-screen flex flex-col justify-between overflow-hidden">
      <textarea
        name=""
        id=""
        className="w-full h-1/2 border-2 border-black rounded-md p-2 font-bold text-lg mb-12"
        placeholder="Enter the text here"
      ></textarea>
      <div className="flex-grow"></div>
      <Keyboard />
    </div>
  );
}

export default App;
