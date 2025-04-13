const Benifit = () => {
  const benefits = [
    "Learn 10 practical frameworks to secure business growth even during crises",
    " Discover how AI integration can increase operational and decision-making efficiency",
    "Apply strategic leadership principles from military to boardroom",
    " Understand and build a future-ready AI ecosystem in your organization",
    "Gain access to high-value networking with 500+ business leaders",
    "Equip yourself with tools to thrive in unpredictable business landscapes",
  ];

  return (
    <section className="bg-[#254c64] text-white py-10 mt-5 px-5 md:px-20">
      <h1
        className="text-[35px] md:text-[45px] text-center mb-10"
        style={{ fontFamily: 'ImpactCustom' }}
      >
        Benefits You’ll Get
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

      <div className="flex justify-center mt-10">
        <a
          href="https://app.ticketforevents.com/3-giant-strategists/registration"
          target="_blank"
          rel="">
          <button className="bg-[#204967] text-white border border-white px-10 py-4 rounded-full hover:bg-[#1a2f44] transition-all">
            Book your Ticket
          </button>
        </a>

      </div>
    </section>
  );
};

export default Benifit;
