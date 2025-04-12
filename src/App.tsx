import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileOnlyWrapper from "./Components/MobileOnlyWrapper/MobileOnlyWrapper";
import Mainpage from './Pages/Mainpage';
import "./assets/Fonts/fonts.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/:name" 
          element={
            <MobileOnlyWrapper>
              <Mainpage />
            </MobileOnlyWrapper>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
