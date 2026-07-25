import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Specializations } from "@/components/specializations";
import { HealingProcess } from "@/components/healing-process";
import { Testimonials } from "@/components/testimonials";
import { InstagramCarousel } from "@/components/instagram-carousel";
import { PressClippings } from "@/components/press-clippings";
import { MeetVaidya } from "@/components/meet-vaidya";
import { ClinicGallery } from "@/components/clinic-gallery";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "SpineVaidya Ayurveda Clinic",
    "description": "Best Ayurvedic Spine Treatment clinic for Back Pain, Sciatica, and Slip Disc.",
    "telephone": "+91-8019339168",
    "url": "https://beingvaidya.com", // Assuming this is the domain based on the repository info
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad", // Primary location
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "hasMap": "https://maps.app.goo.gl/knMY3Gk7CTpt7sUW6",
    "areaServed": [
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "City", "name": "Warangal" },
      { "@type": "City", "name": "Karimnagar" },
      { "@type": "City", "name": "Nizamabad" },
      { "@type": "City", "name": "Bhongir" },
      { "@type": "City", "name": "Kodad" },
      { "@type": "City", "name": "Vizag" },
      { "@type": "City", "name": "Vijayawada" },
      { "@type": "State", "name": "Telangana" },
      { "@type": "State", "name": "Andhra Pradesh" }
    ],
    "medicalSpecialty": ["Ayurvedic", "Chiropractic", "PhysicalTherapy"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <Hero />
      <Specializations />
      <InstagramCarousel />
      <PressClippings />
      <HealingProcess />
      <Testimonials />
      <ClinicGallery />
      <MeetVaidya />
      <FAQ />
      <Footer />
    </main>
  );
}
