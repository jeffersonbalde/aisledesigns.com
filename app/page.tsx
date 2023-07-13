import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
        <Hero />
        <Clients />
        <Works />
    </div>
  )
}