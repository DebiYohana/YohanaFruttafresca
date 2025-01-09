// CVonline.tsx (halaman utama)
import Hero from "./components/hero";
import PersonalInfo from "./components/personalinfo";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import ContactForm from "./components/contactform";
import RatingStars from "./components/ratingstars";  // Pastikan nama komponen sesuai dengan file
import "./maul-style.css";  // Pastikan file CSS ada di tempat yang benar
import HobbiesGallery from "./components/mygallery";

// Fungsi utama untuk render halaman CV online
export default function CVonline() {
  return (   
    <section>
      <Hero />
      <PersonalInfo />
      <RiwayatPendidikan />
      <HobbiesGallery/>
      <ContactForm />
      <RatingStars/>
    </section>
  );
}
