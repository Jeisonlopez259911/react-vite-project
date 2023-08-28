import React, { useEffect, useState } from "react";
import { Datepicker, Input, initTE } from "tw-elements";
import { BsFillAirplaneFill } from "react-icons/bs";
import { Canvas } from '@react-three/fiber'
import "./App.css"

function App() {

  const [clickButton, setClickButton] = useState(0);

  const clickCambio = () => {
    setClickButton(clickButton + 1);
  }



  useEffect(() => {
    initTE({ Datepicker, Input });
  }, []);

  return (
    <>

      <nav
        className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="ml-5 flex w-[30%] items-center justify-between">
          <input
            type="search"
            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-[#025951] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#0CF25D] focus:text-[#025951] focus:shadow-[#0CF25D] focus:outline-none motion-reduce:transition-none dark:border-[#0CF25D] dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-[#0CF25D]"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2" />

          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </div>
      </nav>
      <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          onClick={clickCambio}
          type="button"
          className="inline-block rounded bg-[#025951] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Button
        </button>
        <h2>hiciste click {clickButton} veces</h2>
      </div>
 
      <div className="grid justify-items-stretch">
        <div className="bg-[#071D26] grid justify-items-stretch justify-self-center px-6 w-20 pb-20 ">
          <BsFillAirplaneFill className="text-[#F2E7DC] justify-self-center  animate-fade-up animate-twiceanimate-fade-up animate-infinite animate-delay-300" />
        </div>
      </div>
      <div>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="#9FC131" position={[0, 0, 5]} />

          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>

        </Canvas>
      </div>
      <div className="grid justify-items-stretch">
        <Canvas className="justify-self-center bottom-20">
          <directionalLight color="#F04A62" position={[60, 60, 60]} />
          <mesh>
            <sphereGeometry/>
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </>
  )
}

export default App
