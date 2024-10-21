import React from "react"
import Header from "./Components/Header.jsx"
import MidHeader from "./Components/MidHeader.jsx"
import Freebies from "./Components/Freebies.jsx"
import Reviews from "./Components/Reviews.jsx"
import Premium from "./Components/Premium.jsx"
import Community from "./Components/Community.jsx"
import Footer from "./Components/Footer.jsx"
 function App() {
    useEffect(() => {
    // Dynamically add the widget script after the component mounts
    const script = document.createElement("script");
    script.src = "https://nexx-widget.vercel.app/widget.umd.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className=" flex flex-col gap-10  bg-white-100">
      <Header></Header>
      <MidHeader></MidHeader>
      <Freebies></Freebies>
      <Reviews></Reviews>
      <Premium></Premium>
      <Community></Community>
      <Footer></Footer>
       <my-widget project-id="316"></my-widget>
    </div>
  )
}
export default App
