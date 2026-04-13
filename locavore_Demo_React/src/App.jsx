import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Tagline from './components/Tagline';
import Featured from './components/Featured';
import Brands from './components/Brands';
import FooterCTA from './components/FooterCTA';
 
export default function App() {
  return (
    <>
      <Hero />
      <Nav />
      <Tagline />
      <Featured />
      <Brands />
      <FooterCTA />
    </>
  );
}