import BlogSection from "../sections/BlogSection";
import HomeSection from "../sections/HomeSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export default function HomePage() {
  return (
    <>
      <Navbar/>
      <HomeSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer/>
    </>
  );
}
