import { memo, useCallback } from "react";
import price1 from "@assets/price1.webp"
import price2 from "@assets/price2.webp"
type LandpageProps = {
  name: string;
};
const Benifit: React.FC<LandpageProps> = ({ name }) => {
  // Function to track button clicks and send data to the analytics API
  // buttonType parameter identifies which ticket type was clicked (standard or vip)
  const trackButtonClick = useCallback((buttonType: string) => {
    try {
      console.log(`Tracking ${buttonType} ticket button click`);
      // Send tracking data to the API
      fetch('https://bizwax.invitechai.com/api/button-clicks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          button_id: `ticket-${buttonType}`,
          button_text: `Book your Ticket (${buttonType})`,
          page_url: window.location.href,
          button_class: 'book-ticket-btn'
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Button click tracked successfully');
        return response.json();
      })
      .then(data => {
        console.log('Response data:', data);
      })
      .catch(error => {
        console.error('Error tracking button click:', error);
      });
    } catch (error) {
      console.error('Error in trackButtonClick:', error);
    }
  }, []);

  const benefits = [
    " Gain access to high-value networking with 500+ business leaders",
    "  Equip yourself with tools to thrive in unpredictable business landscapes",
    "Apply strategic leadership principles from military to boardroom",
    " Learn 10 practical frameworks to secure business growth even during crises",
    " Discover how AI integration can increase operational and decision-making efficiency",
    "Understand and build a future-ready AI ecosystem in your organization",
  ];

  return (
    <section id="benefits" className="bg-[#254c64] text-white py-10 mt-5 px-5 md:px-20">
      <h1
        className="text-[35px] md:text-[45px] text-center mb-10"
        style={{ fontFamily: 'ImpactCustom' }}
      >
        Hi <span className="text-[#ffd325]">{name}</span>,<br></br>
        <span className=""> Benefits You'll Get</span>
      </h1>


      <div className="space-y-6">
        {benefits.map((text, index) => (
          <div className="flex gap-3 items-stretch" key={index}>
            {/* Yellow bar with fixed width and dynamic height */}
            <div className="w-[6px] bg-yellow-400 rounded-sm" />
            <p className="text-[15px] leading-[1.7]">{text}</p>
          </div>
        ))}
      </div>
      <div id='register' className="flex flex-col justify-center items-center mt-10 mb-4">
        <div className="flex text-[40px]  mb-10" style={{ fontFamily: "ImpactCustom" }}>Choose Your Ticket</div>
        <div className="flex justify-center flex-col items-center relative w-[350px]">
          {/* First Image */}
          <img src={price1} loading="lazy" alt="" className="w-full rounded-xl" />

          {/* Centered Button Over Image */}
          <a
            href="https://app.ticketforevents.com/3-giant-strategists/registration"
            target="_blank"
            rel=""
            className="absolute inset-0 flex items-center justify-center"
          >
            <button
              className="bg-[#204967] text-white border border-white px-10 py-3 rounded-full hover:bg-[#1a2f44] transition-all mt-[420px]"
              onClick={() => trackButtonClick('standard')}
            >
              Book your Ticket
            </button>
          </a>
        </div>
        <div className="flex justify-center flex-col items-center relative w-[350px]">
          {/* First Image */}
          <img src={price2} loading="lazy" alt="" className="w-full rounded-xl mt-5" />

          {/* Centered Button Over Image */}
          <a
            href="https://app.ticketforevents.com/3-giant-strategists/registration"
            target="_blank"
            rel=""
            className="absolute inset-0 flex items-center justify-center"
          >
            <button
              className="bg-[#204967] text-white border border-white px-10 py-3 rounded-full hover:bg-[#1a2f44] transition-all mt-[420px]"
              onClick={() => trackButtonClick('vip')}
            >
              Book your Ticket
            </button>
          </a>
        </div>

      </div>



    </section>
  );
};

export default memo(Benifit);
