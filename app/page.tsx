import Brands from "@/components/Brands";
import Clients from "@/components/Clients";
import ClientsComponent from "@/components/ClientsComponent";
import NavBar from "@/components/Hero";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Footer from "@/components/Footer";
import AboutDesktop from "@/components/AboutDesktop";
import AboutComponent from "@/components/AboutComponent";

export default function Home() {
  return (
    <>
      <NavBar />
      <ClientsComponent />
      <Works />
      <Brands />
      {/* <About /> */}
      {/* <AboutDesktop /> */}
      <AboutComponent />
      <Footer />
     </>
  )
}