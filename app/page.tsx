
import Profile from "./components/biodata";
import Hero from "./components/hero";
import HobbiesGallery from "./components/hobi";
import ContactForm from "./components/contact_form";
import Rating from "./components/contact_form";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import Skills from "./components/skills";
import "./style.css"
import ContactHistory from "./components/contact_history";





export default function Gallery() {
  return (
    <section>
      <Hero/>
      <Profile/>
      <RiwayatPendidikan/>
      <RiwayatPekerjaan/>
      <Skills/>
      <HobbiesGallery/>
      <ContactForm/>
      <ContactHistory/>
      
      
</section>
);
}