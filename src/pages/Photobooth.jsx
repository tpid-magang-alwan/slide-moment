import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Photobooth_Container_1 from "../components/Photobooth_Container_1";
import Photobooth_Container_2 from "../components/Photobooth_Container_2";


function Photobooth() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Konten utama */}
      <main className="flex-1">
        <Photobooth_Container_1 />
        <Photobooth_Container_2 />
      </main>

      <Footer />
    </div>
  );
}

export default Photobooth;
