import React, { useState } from "react";
import Head from "next/head";

function Calculator() {
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");

  const handleButtonClick = (number) => {
    setResult(result + number);
  };

  // Clear Button
  const handleClearButton = () => {
    setResult("");
    setAnswer("");
  };

  // Adding function
  const addition = (result) => {
    //  here every operation is going on behind the scene
    const newAnswer = eval(result);
    console.log(result);
    return newAnswer;
  };

  // IS equal to button
  const handleIsEqualButton = () => {
    setAnswer(addition(result));
    // setResult(answer);
  };

  return (
    <div>
      <Head>
        <title>𝘼𝘿𝘿-𝙈𝙀</title>
      </Head>
      <div className="h-screen bg-slate-200 flex justify-center items-center">
        <div className="  h-[80%] w-[30%] rounded-lg shadow-lg bg-slate-300 flex flex-col items-center">
          {/* Here result will show or display what button will be pressed */}
          <div className="text-5xl w-[90%]  h-[30%] mt-5 rounded-lg shadow-inner bg-zinc-200">
            {result}
            <div className="mt-6 pl-30 text-7xl">{answer}</div>
          </div>

          {/* From here calculator buttons section start */}
          <div className="w-[90%] h-full grid grid-cols-4 gap-3 mt-4">
            <button
              className=" rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-blue-600 focus:outline-none"
              onClick={() => handleButtonClick("/")}
            >
              /
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-red-500 focus:outline-none"
              onClick={() => handleButtonClick("*")}
            >
              *
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-red-400 focus:outline-none"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-blue-500 focus:outline-none"
              onClick={() => handleButtonClick(".")}
            >
              .
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-gray-400 focus:outline-none"
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            <button
              className=" rounded-lg text-6xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-green-600 focus:outline-none"
              onClick={() => handleIsEqualButton()}
            >
              =
            </button>
            <button
              className="rounded-lg text-4xl py-2 px-2 bg-slate-200 text-gray-900 font-semibold shadow-md hover:bg-green-300 focus:outline-none"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>

            <button
              className=" col-span-2 col-start-2 col-end-4 rounded-lg text-4xl py-2 px-2 bg-green-400 text-gray-900 font-semibold shadow-md hover:bg-green-600 focus:outline-none"
              onClick={() => handleClearButton()}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
