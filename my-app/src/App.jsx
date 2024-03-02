import "./App.css";
import Main from "./compontents/Main";
import Header from "./compontents/Header";
import Footer from "./compontents/Footer";
import Conditional1 from "./compontents/Conditional1";
import Conditional2 from "./compontents/Conditional2";
import ListRendering from "./compontents/ListRendering";
import UScompontent from "./compontents/UScompontent";
import USobjCompontent from "./compontents/USobjCompontent";
import USArrycompontent from "./compontents/USArrycompontent";
import FunctionalEffect from "./compontents/FunctionalEffect";
import CompA from "./Compontent/CompA";
import { createContext } from "react";
import ControlFunctional from "./Compontent/ControlFunctional";
import FunctionInput from "./Compontent/FunctionInput";
import OtherInputs from "./Compontent/OtherInputs";
import MultipleCheck from "./Compontent/MultipleCheck";
import HookuseRef from "./Compontent/HookuseRef";
import HookuseRef2 from "./Compontent/HookuseRef2";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Compontent/Home";
import About from "./Compontent/About";
import Contact from "./Compontent/Contact";
import Navbar from "./Compontent/Navbar";
import PageNotFound from "./Compontent/PageNotFound";
import Products from "./Compontent/Products";
import Shirts from "./Compontent/Shirts";
import Jeans from "./Compontent/Jeans";
import User from "./Compontent/User";
import UserDetail from "./Compontent/UserDetail";
import Admin from "./Compontent/Admin";
import Search from "./Compontent/Search";

// export const NameContext = createContext();
// export const ChannelContext = createContext();

function App() {
  const navigate = useNavigate();

  // const name = "Saddique";
  // const age = 22;

  return (
    <>
      {/* { name == "Qadoos" ? <Conditional1/> : <Conditional2/> }
  {
    age > 18 ? <h1>You can vote</h1> : <h1>You can not vote</h1>
  } */}

      {/* <ListRendering/> */}

      {/* <UScompontent/> */}
      {/* <USobjCompontent/> */}
      {/* <USArrycompontent/> */}
      {/* <FunctionalEffect/> */}
      {/* <NameContext.Provider value={"Saddique"}>
  <ChannelContext.Provider value={"Learn what ever you want"}>
      <CompA />
  </ChannelContext.Provider>
</NameContext.Provider> */}
      {/* <ControlFunctional/> */}
      {/* <FunctionInput/> */}
      {/* <OtherInputs/> */}
      {/* <MultipleCheck/> */}
      {/* <HookuseRef /> */}
      {/* <HookuseRef2 /> */}

      {/*  routing */}

      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="shirts" element={<Shirts />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        
        <Route path="/user" element={<User />}>
          <Route path=":id" element={<UserDetail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}

      {/* <button onClick={()=>navigate('./about')}>About</button>
<button onClick={()=>navigate('./contact')}>Contact</button> */}
      {/* <br />
      <br /> */}

      {/* <button onClick={()=> navigate(-1)}>Go Back</button> */}



    </>
  );
}

export default App;
