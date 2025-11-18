import Header from "../components/Header";
import Footer from "../components/Footer";
import Instaprint_Container_1 from "../components/Instaprint_Container_1";
import Instaprint_Container_2 from "../components/Instaprint_Container_2";


function Instaprint() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Konten utama */}
      <main className="flex-1">
        <Instaprint_Container_1 />
        <Instaprint_Container_2 />
      </main>

      <Footer />
    </div>
  );
}

export default Instaprint;
