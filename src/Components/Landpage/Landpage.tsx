import React, { useEffect, memo, useCallback } from 'react';
import hero from '../../assets/heroimage .webp';
import bluerectanglebg from "../../assets/Bluerecatnglebg.webp";
import yellowbar from "../../assets/yellowbar.webp";
import dropdown from "../../assets/chevron-down.webp";

type LandpageProps = {
  name: string;
};

const Landpage: React.FC<LandpageProps> = ({ name }) => {
  // Preload non-critical images to improve caching
  useEffect(() => {
    const imagesToCache = [bluerectanglebg, yellowbar, dropdown];
    imagesToCache.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const scrollToSection = useCallback((id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  },[]);

  return (
    <main className="bg-white w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Hero Image - eager load as it is critical */}
        <img
          src={hero}
          loading="eager"
          alt="Speakers"
          className="z-10 relative max-w-full h-auto md:-mt-32 animate-fade-in"
        />

        {/* Blue Background */}
        <img
          src={bluerectanglebg}
          loading="lazy"
          alt="Wave Background"
          className="w-full h-[40vh] -mt-[150px]"
        />

        {/* Yellow Bar with Slide-In Animation */}
        <img
          src={yellowbar}
          loading="lazy"
          alt="Yellow Bar"
          className="absolute top-[51%] left-[4%] h-[157px] w-[3%] md:left-10 md:h-30 md:w-[1%] z-20 animate-slide-in-left"
        />

        {/* Text Content */}
        <div className="absolute top-[50%] left-[10%] md:left-[80px] z-50 text-white animate-fade-up delay-300">
          {/* Event Title */}
          <p className="text-[20px] font-[poppins] md:text-sm font-bold mb">
            BIZWAX 2025
          </p>

          {/* Main Heading */}
          <div className="mb-2">
            <h1
              style={{ fontFamily: 'ImpactCustom' }}
              className="text-[50px] md:text-[40px] leading-[45px]"
            >
              3 Giant <br /> Strategists <br /> Meet
            </h1>
          </div>

          {/* Subheading */}
          <div className="mb-1 mt-2">
            <h2
              className="text-[#ffd325] text-[40px] md:text-xl ml-[-22px]"
              style={{ fontFamily: 'ImpactCustom' }}
            >
              Hi, {name}
            </h2>
          </div>

          {/* Welcome Message */}
          <p className="text-lg md:text-base text-white mt-[-2px] mb-2 font-[poppins] ml-[-22px]">
            Welcome To 3 Giant Strategists Meet
          </p>


          {/* Call-to-Action Button with Dropdown Icon */}
          {/* Call-to-Action Buttons - Equal Size */}
          <div className="flex justify-center  gap-2 mt-4 ml-[-22px]">
            {/* Button 1 */}
        
             <button onClick={() => scrollToSection('speaker')} className=" border-1  rounded-[25px] px-1 py-2 text-[15px] md:text-base    hover:bg-yellow-400 transition-all duration-300 inline-block text-center w-28 text-semibold">Speakers</button>

            {/* Button 2 */}
            <button onClick={() => scrollToSection('benefits')} className=" border-1 rounded-[25px] px-1 py-2 text-[15px] md:text-base   hover:bg-yellow-400 transition-all duration-300 inline-block text-center w-28 text-semibold">Benefits</button>

            {/* Button 3 */}
             <button onClick={() => scrollToSection('register')} className="animated-border  rounded-[25px] px-1 py-2 text-[15px] md:text-base   hover:bg-yellow-400 transition-all duration-300 inline-block text-center w-28 text-semibold">Register</button> 
           
          </div>

          {/* Dropdown Icon */}
          <div className="flex justify-center mt-2">
            <img
              src={dropdown}
              loading="lazy"
              alt="Dropdown Icon"
              className="w-8 h-auto animate-bounce"
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default memo(Landpage);
