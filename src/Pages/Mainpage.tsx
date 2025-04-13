import { lazy, Suspense } from 'react';
const Landpage = lazy(()=> import('../Components/Landpage/Landpage'));
const About = lazy(()=> import('../Components/About/About'));
import { Fragment } from 'react';
const Speaker = lazy(() => import('../Components/Speakers/Speaker'));
const Benifit = lazy(() => import('../Components/Benifit/Benifit'));
const Footer = lazy(() => import('../Components/Footer/Footer'));
import { useParams } from 'react-router-dom';

const Mainpage = () => {
  const { name = "Guest" } = useParams(); // Get the dynamic name from URL

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Fragment>
        <Landpage name={name} /> {/* Pass name as prop */}
        <About />
        <Speaker />
        <Benifit />
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default Mainpage;
