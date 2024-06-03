import Header from './components/Header/Header';
import HeaderMobile from './components/Header/HeaderMobile';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='w-full h-full relative'>
  
        <Header />
        <HeaderMobile />
        <Footer />
        <Home />
  
    </div>
  )
}

export default App;
