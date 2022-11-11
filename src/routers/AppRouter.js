//Router component
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//Component
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';
import Hamburger from '../components/Hamburger';


//Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Works from '../pages/Works';
import PageNotFound from '../pages/PageNotFound';
import Moviest from '../pages/Moviest';
import TweelingBakery from '../pages/TweelingBakery';
import Portfolio from '../pages/Portfolio';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/works/moviest" element={<Moviest /> }/>
          <Route path="/works/tweeling-bakery" element={<TweelingBakery /> }/>
          <Route path="/works/portfolio" element={<Portfolio /> }/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  );
};
