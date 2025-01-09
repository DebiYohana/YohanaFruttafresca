// CVonline.tsx (halaman utama)
import Hero from "./components/hero";
import PersonalInfo from "./components/personalinfo";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import ContactForm from "./components/contactform";
import RatingStars from "./components/ratingstars";  
import Products from "./components/produk";


// Fungsi utama untuk render halaman CV online
export default function CVonline() {
  return (   
    <section>
      <Hero />
      <PersonalInfo />
      <Products />
      <RiwayatPendidikan />
      <ContactForm />
      <RatingStars/>
    </section>
  );
}
