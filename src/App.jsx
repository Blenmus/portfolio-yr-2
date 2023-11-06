import React, { useEffect } from "react";
import "./App.css";
import { gsap } from "gsap";
import { motion } from "framer-motion"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from 'three';
import Scrollbar from 'smooth-scrollbar';
import NavBar from "./components/navbar";
import Landing from "./components/Landing"
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  


//scroll indicator java


  //#region               <-----------------------TAILWINDCSS--------------------------->
  return (
  
<div className="z-[-2] bg-gradient-to-b from-gray-700 via-gray-900 to-black">
  <div className="w-screen h-screen absolute overflow-hidden">
      
  </div>
  
      {/* all objects fixed to window */}
<div>

  <NavBar />
  <div>
<Landing id="Home"/>
<About id="aboutSection" />
<Skills id="skillsSection" />
<Projects id="projectsSection" />
<Contact id="contactSection" />

  </div>



 

</div>

 
</div>
  );
  //#endregion
}
