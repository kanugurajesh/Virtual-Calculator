const Keyboard = () => {
    return (
        <div className="w-full h-full flex flex-col gap-[2.5px] font-bold">
            <div className="flex justify-center gap-[2.5px]">
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-[3px] border-gray-800 rounded rounded-br-none hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">C</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 rounded rounded-b-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">+/-</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 rounded rounded-b-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">%</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20 rounded rounded-bl-none border-[3px] border-orange-500 hover:bg-white hover:text-orange-500 transition-all ease-in-out duration-300">/</button>
            </div>
            <div className="flex justify-center gap-[2.5px]">
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">7</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-l-none rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">8</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-l-none rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">9</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20  rounded rounded-l-none border-[3px] border-orange-500 hover:bg-white hover:text-orange-500 transition-all ease-in-out duration-300">X</button>
            </div>
            <div className="flex justify-center gap-[2.5px]">
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">4</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-l-none rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">5</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-l-none rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">6</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20  rounded rounded-l-none border-[3px] border-orange-500 hover:bg-white hover:text-orange-500 transition-all ease-in-out duration-300">-</button>
            </div>
            <div className="flex justify-center gap-[2.5px]">
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">1</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-l-none rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">2</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-l-none rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">3</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20  rounded rounded-l-none border-[3px] border-orange-500 hover:bg-white hover:text-orange-500 transition-all ease-in-out duration-300">+</button>
            </div>
            <div className="flex justify-center gap-[2.5px]">
                <button className="bg-gray-800 text-white text-2xl w-1/2 h-20  rounded rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">0</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20  rounded rounded-l-none rounded-r-none border-[3px] border-gray-800 hover:bg-white hover:text-gray-800 transition-all ease-in-out duration-300">.</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20  rounded rounded-l-none border-[3px] border-orange-500 hover:bg-white hover:text-orange-500 transition-all ease-in-out duration-300">=</button>
            </div>                
        </div>
    )
}

export default Keyboard;