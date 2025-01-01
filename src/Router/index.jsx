import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from '../Pages/Layout';
import Home from '../Pages/Home';
import ContactUs from '../Pages/ContactUs';
import AboutUS from '../Pages/AboutUS';

const Router = createBrowserRouter(createRoutesFromElements(
    <>
    
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/about-us' element={<AboutUS />} />
    </Route>            
    </>
  )
);

export default Router;
