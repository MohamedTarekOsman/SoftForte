import { RouterProvider } from "react-router-dom";
import Router from "./Router/index.jsx";
// import Navbar from './components/Navbar/NavBar.jsx';

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
