import React from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = React.useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24  max-w-[1240px] mx-auto px-4 ">
      <h1 className="w-full text-xl font-bold text-[#00df9a]">React</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>

        <li className="p-4">Resoureces</li>
        <li className="p-4">About</li>

        <li className="p-4">Contact</li>
      </ul>

      <div className="block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20}></AiOutlineClose> : <AiOutlineMenu size={20}></AiOutlineMenu>}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 block md:hidden"
            : "fixed h-full  left-[-100%] top-0 ease-in duration-500" 
        }
      >
        <h1 className="w-full text-xl font-bold text-[#00df9a] m-4">Portfolio React</h1>

        <ul className="uppercase p-2">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resoureces</li>
          <li className="p-4 border-b border-gray-600">About</li>

          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
       
      </div>
    </div>
  );
};

export default Navbar;
