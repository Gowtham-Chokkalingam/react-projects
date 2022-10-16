import Typed from "react-typed";
import React from "react";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] fon-bold p-2"> GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data</h1>
      
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">I am a </p>  <Typed className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 py-4" strings={["Aspiring", "Full-Stack", "Web-Developer"]} typeSpeed={100} backSpeed={50} loop></Typed>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
      </div>
    
  );
};

export default Hero;
