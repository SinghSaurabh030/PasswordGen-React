import { useCallback, useEffect, useState } from "react"

function App() {
  let [len,setlen]=useState(8);
  let [num,setNum]=useState(false);
  let [char,setChar]=useState(false);
  let [pass,setPass]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num) str+="0123456789";
    if(char) str+="!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
  
    }
    setPass(pass);
  },[len,num,char,pass]);
useEffect(()=>{passwordGenerator();},[len,num,char]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
         <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="outp flex shadow rounded-lg overflow-hidden mb-4">
              <input
              type="text"
              value={pass}
              placeholder="password"
              readOnly
              className="outline-none w-full py-1 px-3"
              />
              <button
               className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range" 
                min={6}
                max={100}
                value={len}
                className='cursor-pointer'
                onChange={(e) => {setlen(e.target.value)}}
                />
                 <label>Length: {len}</label>
              </div >
              <div className="flex items-center gap-x-1">
                <input type="checkbox" 
                value={num}
                onChange={(e) => {setNum((old)=>!old)}}
                id="numberInput"
                />
                 <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                type="checkbox"
                value={char}
                id="charInput"
                onChange={(e) => {setChar((old)=>!old)}}
                />
                <label htmlFor="charInput">Characters</label>
              </div>
        </div>
    </div>
    
  )
}

export default App
