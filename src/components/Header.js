import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    // This is for the Header
    <nav className="absolute h-16 w-full flex items-center justify-center text-white font-main text-xl">
      {/* This is for the Logo text */}
      <div className="absolute left-[15%]">
        <NavLink to='/' className="hover:text-slate-300 cursor-pointer">Logo</NavLink>
      </div>
      {/* This is for the navigation links */}
      <div className="flex w-1/2 justify-evenly items-center">
        {["First", "Second", "Third", "Fourth"].map((string, index) => {
          return (
            <div key={index} className="flex flex-col items-center hover:text-slate-300">
              <h1 className="peer cursor-pointer">{string}</h1>
              <div className="hidden peer-hover:flex hover:flex flex-col items-center rounded bg-white w-[200px] mt-10 absolute p-5">
                <div className="absolute top-[-20px] w-0 h-0 border-[10px] border-solid border-transparent border-b-white" />
                {[
                  ["First", "/first"],
                  ["Second", "/second"],
                  ["Third", "/third"],
                ].map(([title, url], index) => {
                  return (
                    <NavLink
                      key={index}
                      to={url}
                      className="px-5 py-3 text-black hover:bg-gray-200 rounded cursor-pointer text-center w-full"
                    >
                      {title}
                    </NavLink>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default Header
