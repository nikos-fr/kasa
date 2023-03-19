import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import {useState,useEffect} from "react"
// import data from "./data/data.json"

function App() {
  const [apparts, setApparts] = useState([]) 

  // useEffect(() => {
  //   setApparts(data)
  // },[])

  useEffect(() =>{
    const fetchData = async () => {
      try{
          const response = await fetch("./data/data.json")
          const data = await (response.json())
          setApparts(data)
      } catch(error){
         console.log("une erreur c'est produite" + error);
      }
    }
    setTimeout(fetchData,0)
    return () => {}
  }, []) 
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home apparts={apparts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:logementId" element={<Logement apparts={apparts}/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
