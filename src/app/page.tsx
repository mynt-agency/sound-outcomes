import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { LogoBanner } from "@/sections/LogoBanner";
import { Testimonial } from "@/sections/Testimonial";
import { Channels } from "@/sections/Channels";
import { Attribution } from "@/sections/Attribution";
import { Proof } from "@/sections/Proof";
import { CloseForm } from "@/sections/CloseForm";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoBanner />
      <Testimonial />
      <Channels />
      <Attribution />
      <Proof />
      <CloseForm />
      <Footer />
    </>
  );
}
