
'use client'
import { useEffect, useState } from "react";


export default function Home() {

  const [time, setTime] = useState(0)

  const [isStart, setIsStart] = useState(false)

  useEffect(() => {
  let timer ;
  if (isStart){
    timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000);
  }
  return () => clearInterval(timer)
  }, [isStart])


  const handelStartStop = () =>{
    setIsStart((prevState => !prevState))
  }

  const handleReset = () =>{
    setIsStart(false)
    setTime(0)
  }
  return (
    <>
    <div className="w-full h-20 flex justify-evenly items-center ">
      <h1 className="text-2xl font-bold">{Math.floor(time / 60 )}:{time % 60 < 10 ? "0" : ""}{time %  60}</h1>
    </div>
    <div className="flex justify-evenly items-center h-40 w-full ">
      <button className="px-4 py-2 text-xl bg-black text-white" onClick={handelStartStop}>{isStart ? "Stop" : "Start"}</button>
     
      <button className="px-4 py-2 text-xl bg-black text-white" onClick={handleReset}>Reset</button>
    </div>
    
    
    </>
  );
}
