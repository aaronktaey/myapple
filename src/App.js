import Nav from "./Nav";
import About from "./About";
import Contents from "./Contents";
import Footer from "./Footer";
import NotFound from "./NotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contents" element={<Contents/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
