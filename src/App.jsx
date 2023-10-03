import {} from 'react';
import Header from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer/>
    </>
  );
}

export default App;
