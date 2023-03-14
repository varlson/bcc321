import React from "react";

function Navbar() {
  return (
    <div>
      <div className="bg-black p-2">
        <div className="grid grid-cols-12 w-9/12 m-auto">
          <span className="text-white text-xl">LOGO</span>
          <div className="col-start-11">
            <button className="bg-yellow-500 px-2 py-1  rounded">
              Login/Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
