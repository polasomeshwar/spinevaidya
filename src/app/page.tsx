import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Specializations } from "@/components/specializations";
import { HealingProcess } from "@/components/healing-process";
import { Testimonials } from "@/components/testimonials";
import { InstagramCarousel } from "@/components/instagram-carousel";
import { PressClippings } from "@/components/press-clippings";
import { MeetVaidya } from "@/components/meet-vaidya";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Specializations />
      <InstagramCarousel />
      <PressClippings />
      <HealingProcess />
      <Testimonials />
      <MeetVaidya />
      <FAQ />
      <Footer />
    </main>
  );
}
