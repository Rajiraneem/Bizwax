import { useState } from "react";
import dropdown from "../../assets/chevron-down.webp";
import frame1 from "../../assets/Frame 1.webp";
import frame2 from "../../assets/Frame 2.webp";
import frame3 from "../../assets/Frame 3.webp";
import session from "../../assets/SESSION.webp";

const speakers = [
   {
      id: 1,
      name: "Umer Abdussalam",
      image: frame1,
      sessionTitle: "AI Ecosystem in Business Organizations",
      description: "Tech Futurist | AI Ecosystem Consultant | CEO of Olaph.ai",
     
      more: "AI is not the future—it’s the present advantage. In this session, Umer Abdussalam will walk you through how AI can be integrated into every layer of your company, from IT audits to decision-making workflows, with real-world examples of how it improves efficiency and profitability",
      keytakeways: [
         " Understanding AI-readiness through IT audits",
         " Report-based AI integration: how it works",
         "Operational & managerial gains from AI adoption",
         " Building a sustainable, future-proof AI ecosystem",
         " War Strategies to Tackle Corporate Crises",
      ]
   },

   {
      id: 2,
      name: "Tiny Philip",
      image: frame2,
      sessionTitle: "10 Vaccinations for Business Success",
     
      description: "Renowned Business Advisor | Strategy Consultant",
      more: "In today’s uncertain business climate, survival requires more than passion—it demands preparation. Tiny Philip delivers a practical framework of 10 powerful strategies to safeguard your business from collapse and keep it thriving, no matter what.",
      keytakeways: [
         " Build resilience into your business model",
         "Spot hidden vulnerabilities early",
         "Secure long-term competitive advantage",
         "Convert crises into growth opportunities",
         "AI Ecosystem in Business Organizations",
      ]
   },
   {
      id: 3,
      name: "Lt Gen PM Hariz (Retd)",
      image: frame3,
      sessionTitle: " War Strategies to Tackle Corporate Crises",
      description: " Leadership Trainer | Strategic Advisor | Former GOC-in-C Southern Command",
      more: "What if your leadership team could think like a military command center in a warzone? Lt Gen Hariz brings his 39 years of military strategy and leadership experience into the business world. This session teaches you how to lead with calm, clarity, and control—especially in crisis.",
      keytakeways: [
         "Build systems to predict and neutralize threats",
         "Lead with clarity under extreme pressure",
         " Make sharp decisions when it matters most",
         "   Instill resilience and loyalty across teams",
      ]
   },
];

const Speaker = () => {
   const [expanded, setExpanded] = useState<number | null>(null);

   const toggleExpand = (id: number) => {
      setExpanded(expanded === id ? null : id);
   };

   return (
      <section className="flex flex-col justify-center items-center mt-5 ">
         <div className="mt-4" style={{ fontFamily: "ImpactCustom" }}>
            <h1 className="text-[#204866] text-[45px]">Our Speakers</h1>
         </div>

         <div className="grid grid-rows-3 gap-6 mt-6">
            {speakers.map((speaker,index) => (
               <div key={speaker.id} className="text-center mb-6">
                  <div className="flex justify-center items-center">
                     <img src={speaker.image} loading={index === 0 ? 'eager' : 'lazy'} alt="" className="w-[350px]" />
                  </div>

                  <h1
                     className="text-[#f1bb1c] text-[35px] mt-3"
                     style={{ fontFamily: "ImpactCustom" }}
                  >
                     {speaker.name}
                  </h1>

                  <h5 className="font-[poppins] p-5">{speaker.description}</h5>

                  <div
                     className={`w-[360px] transition-all duration-500 ${expanded === speaker.id ? "h-auto pb-5" : "h-[200px]"
                        } mx-auto bg-[#284f6d] rounded-[25px] overflow-hidden shadow-md`}
                  >
                     <img
                        src={session}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        alt="Session"
                        className="w-[100px] rounded-tl-[25px]"
                     />
                     <h1 className="font-[poppins] text-[20px] text-center p-2 text-white">
                        {speaker.sessionTitle}
                     </h1>

                     {expanded === speaker.id && (
                        <div className="text-white px-4 text-sm text-left space-y-2 ">
                          
                           <p className="pt-2">{speaker.more}</p>

                           <h3 className="mt-4 font-semibold text-white">Key Takeaways:</h3>
                           <ul className="list-disc list-inside pl-2 space-y-1 text-white">
                              {speaker.keytakeways.map((point, index) => (
                                 <li key={index}>{point}</li>
                              ))}
                           </ul>
                        </div>
                     )}




                     <div className="flex justify-center ">
                        <button
                           onClick={() => toggleExpand(speaker.id)}
                           className="flex items-center gap-2 bg-[#204967] text-white border border-white px-8 py-3  rounded-full hover:bg-[#1a2f44] transition-all font-[poppins] mt-4"
                        >
                           <span>{expanded === speaker.id ? "Show Less" : "Show More"}</span>
                           <img
                              src={dropdown}
                              loading={index === 0 ? 'eager' : 'lazy'}
                              alt="Dropdown Icon"
                              className={`w-8 h-8 transition-transform duration-300 ${expanded === speaker.id ? "rotate-180" : "rotate-0"} floating`}
                           />

                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <div className="flex justify-center items-center mt-8">
            <a
               href="https://app.ticketforevents.com/3-giant-strategists/registration"
               target="_blank"
               rel="noopener noreferrer"
            >
               <button className="px-10 py-4 text-white rounded-[25px] bg-[#204967] hover:bg-[#1a2f44] transition-all">
                  Book your Ticket
               </button>
            </a>
         </div>
      </section>
   );
};

export default Speaker;
