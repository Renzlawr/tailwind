import React from "react"

const DoubleDropdownList = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="absolute top-48 w-0 h-0 border-[10px] border-solid border-transparent border-b-white" />
      <div className="bg-white h-64 w-1/3 rounded grid gap-4 grid-cols-2 grid-rows-1 p-3">
        <ul className="h-full flex justify-center items-center flex-col">
          {[
            ["First", "/first"],
            ["Second", "/second"],
            ["Third", "/third"],
          ].map(([string, url], index) => {
            return (
              <li
                key={index}
                className="py-5 text-center rounded px-1 hover:bg-slate-300 cursor-pointer w-full"
              >
                {string}
              </li>
            )
          })}
        </ul>
        <ul className="h-full flex justify-center items-center flex-col">
          {[
            ["First", "/first"],
            ["Second", "/second"],
            ["Third", "/third"],
          ].map(([string, url], index) => {
            return (
              <li
                key={index}
                className="py-5 text-center rounded px-1 hover:bg-slate-300 cursor-pointer w-full"
              >
                {string}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default DoubleDropdownList
