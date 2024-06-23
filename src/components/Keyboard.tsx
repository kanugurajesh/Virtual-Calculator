const Keyboard = () => {
    return (
        <div className="w-full h-full border-2">
            <div className="flex justify-center">
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-gray-800 border-r-white">C</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-gray-800 border-r-white">+/-</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-gray-800 border-r-white">%</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20 border-2 border-gray-800 border-r-white">/</button>
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">7</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">8</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">9</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20 border-2 border-white">X</button>
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">4</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">5</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">6</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20 border-2 border-white">-</button>
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">1</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">2</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">3</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20 border-2 border-white">+</button>
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-800 text-white text-2xl w-1/2 h-20 border-2 border-white">0</button>
                <button className="bg-gray-800 text-white text-2xl w-1/4 h-20 border-2 border-white">.</button>
                <button className="bg-orange-500 text-white text-2xl w-1/4 h-20 border-2 border-white">=</button>
            </div>                
        </div>
    )
}

export default Keyboard;