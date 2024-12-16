
import './App.css';
import Footer from './common/Footer';
import FaqSection from './components/FaqSection';
import FeadratSearch from './components/FeadratSearch';
import Hero from './components/Hero';
import Hosting from './components/Hosting';
import KeySemanticsLottie from './components/KeySemanticsLottie';
import KeySemanticsWork from './components/KeySemanticsWork';
function App() {
  return (
    <>
      <Hero />
      <KeySemanticsWork />
      {/* <KeySemanticsLottie/> */}
      <FaqSection />
      <FeadratSearch />
      <Hosting />
      <Footer/>
    </>
  );
}

export default App;
