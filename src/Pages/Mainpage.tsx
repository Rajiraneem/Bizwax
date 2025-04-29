import { lazy, Suspense, Fragment, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingAnimation from '../Components/LoadingAnimation/LoadingAnimation';


const Landpage = lazy(() => import('../Components/Landpage/Landpage'));
const About = lazy(() => import('../Components/About/About'));
const Speaker = lazy(() => import('../Components/Speakers/Speaker'));
const Benifit = lazy(() => import('../Components/Benifit/Benifit'));
const Footer = lazy(() => import('../Components/Footer/Footer'));

const Mainpage = () => {
    // rawParam will look like "amal&1234567890"
    const { name: rawParam = "Guest&" } = useParams();
    // split into [userName, phone]; if no “&”, phone will be undefined
    const [userName, customer_number] = rawParam.split('&');
  
    useEffect(() => {
      if (!customer_number) return;
  
      const payload = {
        phone_number: customer_number,
        body: "hi",
        button_text: "Book My Spot!"
      };
  
      fetch("https://bizwax.invitechai.com/webhook/bizwax", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("Webhook success:", data);
      })
      .catch(err => {
        console.error("Webhook error:", err);
      });
    }, [customer_number]);

  return (
    <Suspense fallback={<LoadingAnimation/>}>
      <Fragment>
        <Landpage name={userName} /> {/* Pass name as prop */}
        <About />
        <Speaker />
        <Benifit name={userName}/>
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default memo(Mainpage);
