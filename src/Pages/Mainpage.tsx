// Mainpage.js
import Landpage from '../Components/Landpage/Landpage';
import About from '../Components/About/About';
import { Fragment } from 'react';
import Speaker from '../Components/Speakers/Speaker';
import Benifit from '../Components/Benifit/Benifit';
import Footer from '../Components/Footer/Footer';
import { useParams } from 'react-router-dom';

const Mainpage = () => {
  const { name = "Guest" } = useParams(); // Get the dynamic name from URL

  return (
    <Fragment>
      <Landpage name={name} /> {/* Pass name as prop */}
      <About />
      <Speaker />
      <Benifit />
      <Footer />
    </Fragment>
  );
};

export default Mainpage;
