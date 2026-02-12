"use client";

import BlogSection from "../sections/BlogSection";
import HomeSection from "../sections/HomeSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import Intro from "@/components/animation/Intro";


export default function Page() {
  const [entered, setEntered] = useState<boolean>(false);
  // const [brouse, setBrouse] = useState<boolean>(false);

  // const brouse = ['recuiter', 'visitor']

  return (
    <>
      {!entered && <Intro onFinish={() => setEntered(true)} />}
      {/* {!brouse && <Brouse onFinish={() => setBrouse(true)}} */}
      {entered && (
        <>
          <Navbar />
          <HomeSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}
