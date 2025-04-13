import { memo } from "react";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card3 from "../../assets/card3.webp";


const About = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div style={{ fontFamily: 'ImpactCustom' }}>
          <h1 className="text-[40px] text-[#204967] mt-4">ABOUT BIZWAX 2025</h1>
        </div>
        <div className="mt-4 text-center pl-5 pr-5">
        Bizwax 2025 is not just another business event—it’s a strategic reset for the modern entrepreneur.
500+ professionals will come together to gain proven frameworks, futuristic tech insights, and military-grade leadership strategies from three of India’s most respected minds in business, AI, and crisis management.

Curated by Mission Means Consulting, this program is your opportunity to break free from reactive thinking and start leading with clarity, confidence, and cutting-edge tools.
        </div>
      </div>
      <div className="flex justify-center items-center mt-3.5">
        <div className="grid grid-rows-3 gap-4">
          {/* Card 1 */}
          <div className="">
            <img src={card1} loading='lazy' alt=""  className='w-[300px]'/>
          </div>
          {/* Card 2 */}
          <div className="">
            <a href="https://maps.app.goo.gl/Kk21CS9ybzj3qamW6  "><img src={card2} loading="lazy" alt=""  className='w-[300px]'/></a>
          </div>

          {/* Card 3 */}
          <div className="">
            <img src={card3} loading='lazy' alt=""  className='w-[300px]'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
